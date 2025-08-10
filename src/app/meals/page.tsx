import Link from "next/link";

import MealsGrid from "@/components/meals/mealsGrid";
import {LoadingSection} from "@/components/shared/loadingSection";
import {ROUTE} from "@/constants/route";
import {getMeals} from "@/lib/meals";

import classes from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Discover all the meals we have for you",

};

const Meals = async () => {
  const meals = await getMeals();

  return (
    <MealsGrid
      meals={meals}
    />
  );
};

const MealsPage = () => {
  return (
    <>
      <header
        className={classes.header}
      >
        <h1>
          Delicious meals, created{" "}
          <span
            className={classes.highlight}
          >
            by you...
          </span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p
          className={classes.cta}
        >
          <Link
            href={ROUTE.SHARE}
          >
            Share Your Favorite Recipe!
          </Link>
        </p>
      </header>
      <main
        className={classes.main}
      >
        <LoadingSection
          loadingText="Loading meals..."
        >
          <Meals />
        </LoadingSection>
      </main>
    </>
  );
};

export default MealsPage;
