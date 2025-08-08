import classes from "@/app/not-found.module.css";

const NotFound = () => {
  return (
    <main
      className={classes.notFound}
    >
      <h1>Not found</h1>
      <p>Meal was not found</p>
    </main>
  );
};

export default NotFound;
