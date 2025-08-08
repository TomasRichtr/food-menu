import MealItem from "@/components/meals/mealItem";
import classes from "@/components/meals/mealsGrid.module.css";
import {Meals} from "@/types/meal";

interface MealsGridProps {
  meals: Meals
}

const MealsGrid = ({
  meals
}: MealsGridProps) => {
  return (
    <ul
      className={classes.meals}
    >
      {meals.map((meal) => (
        <li
          key={meal.slug}
        >
          <MealItem
            {...meal}
          />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
