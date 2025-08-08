import Image from "next/image";
import {notFound} from "next/navigation";

import {useAWSBucket} from "@/composables/useAWSBucket";
import {getMeal} from "@/lib/meals";

import classes from "./page.module.css";

interface MealPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateMetadata = async ({
  params
}: MealPageProps) => {
  const {
    slug
  } = await params;
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealPage = async ({
  params
}: MealPageProps) => {
  const {
    slug
  } = await params;
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header
        className={classes.header}
      >
        <div
          className={classes.image}
        >
          <Image
            src={useAWSBucket(meal.image)}
            fill
            alt={meal.title}
          />
        </div>
        <div
          className={classes.headerText}
        >
          <h1>{meal.title}</h1>
          <p
            className={classes.creator}
          >
            by
            <a
              href={`mailto:${meal.creator_email}`}
            >
              {' '}
              {meal.creator}
            </a>
          </p>
          <p
            className={classes.summary}
          >
            {meal.summary}
          </p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions
          }}
        />
      </main>
    </>
  );
};

export default MealPage;
