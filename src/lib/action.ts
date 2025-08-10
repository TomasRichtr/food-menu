"use server";

import Joi from "joi";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

import {addMeal} from "@/lib/meals";
import {NewMeal} from "@/types/meal";

export const shareMeal = async (
  prevState: {
    message: string,
    data?: {title: string, summary: string, instructions: string, creator: string, creator_email: string }
  },
  formData: FormData
) => {
  const meal: NewMeal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  try {
    await validateNew(meal);
    await addMeal(meal);
    revalidatePath("/meals");
  } catch (err) {
    if (err instanceof Error && err.message) {
      return {
        message: err.message,
        data: {
          title: meal.title,
          summary: meal.summary,
          instructions: meal.instructions,
          creator: meal.creator,
          creator_email: meal.creator_email,
        }
      };
    }
    throw err;
  }

  redirect("/meals");
};

const validateNew = async (newMeal: NewMeal) => {
  await Joi.object({
    title: Joi.string().min(1).max(255).messages({
      "string.max": "Meal title can`t exceed 255 characters"
    }),
    summary: Joi.string().min(1).max(1275).messages({
      "string.max": "Meal summary can`t exceed 1275 characters"
    }),
    instructions: Joi.string().min(1).max(2550).messages({
      "string.max": "Meal instructions can`t exceed 2550 characters"
    }),
    image: Joi.custom((value, helpers) => {
      if (!(value instanceof File)) {
        return helpers.error("any.invalid");
      }
      if (value.size === 0) {
        return helpers.error("file.empty");
      }
      if (value.size > 5 * 1024 * 1024) {
        return helpers.error("file.tooLarge");
      }
      if (!value.type.startsWith("image/")) {
        return helpers.error("file.notImage");
      }
      return value;
    }).messages({
      "any.invalid": "Image must be a file",
      "file.empty": "Image file cannot be empty",
      "file.tooLarge": "Image file cannot exceed 5MB",
      "file.notImage": "File must be an image"
    }),
    creator: Joi.string().min(1).max(255).messages({
      "string.max": "Creator name can`t exceed 255 characters"
    }),
    creator_email: Joi.string().email().max(255).messages({
      "string.email": "Please enter a valid email address",
      "string.max": "Creator email can`t exceed 255 characters"
    }),
  }).validateAsync(newMeal);
};
