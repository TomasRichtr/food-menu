import sql from "better-sqlite3";

import {Meals} from "../types/meal";

const db = sql("meals.db");

export const getMeals = async (): Promise<Meals> => {
  return db.prepare("SELECT * FROM meals").all() as Meals;
};
