interface Meal {
    id: number;
    slug: string;
    title: string;
    image: string;
    summary: string;
    creator: string;
    creator_email: string;
    instructions: string;
}

type Meals = Meal[];

export type {
  Meal,
  Meals
};
