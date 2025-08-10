import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import {uploadMealImage} from "@/lib/s3";
import {Meal, Meals, NewMeal} from "@/types/meal";

const db = sql("meals.db");

export const getMeals = async (): Promise<Meals> => {
  return db.prepare("SELECT * FROM meals").all() as Meals;
};

export const getMeal = async (slug: string): Promise<Meal> => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
};

export const addMeal = async (newMeal: NewMeal) => {
  const slug = slugify(newMeal.title, {
    lower: true
  });
  const instructions = xss(newMeal.instructions);
  const extension = newMeal.image.name.split(".").pop();
  const imageName = `${slug}-${Date.now()}.${extension}`;

  const bufferedImage = await newMeal.image.arrayBuffer();
  await uploadMealImage({
    fileName: imageName,
    fileType: newMeal.image.type,
    fileBuffer: bufferedImage
  });

  const dbMeal: Omit<Meal, "id"> = {
    title: newMeal.title,
    summary: newMeal.summary,
    instructions,
    creator: newMeal.creator,
    creator_email: newMeal.creator_email,
    image: imageName,
    slug
  };

  db.prepare(`
    INSERT INTO meals (
      title, summary, instructions, creator, creator_email, image, slug
    )
    VALUES (
      @title, @summary, @instructions, @creator, @creator_email, @image, @slug
    )
  `).run(dbMeal);
};
