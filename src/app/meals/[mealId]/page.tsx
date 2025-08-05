interface PageProps {
  params: {
    mealId: string;
  };
}

const MealPage = ({
  params
}: PageProps) => {
  return (
    <h1>
      Meal: {params.mealId}
    </h1>
  );
};

export default MealPage;
