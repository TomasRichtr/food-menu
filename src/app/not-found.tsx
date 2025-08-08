import classes from "./not-found.module.css";

const NotFound = () => {
  return (
    <main
      className={classes.notFound}
    >
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
};

export default NotFound;
