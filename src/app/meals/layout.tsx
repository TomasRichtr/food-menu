import {
  ReactNode,
} from "react";

const MealsLayout = ({
  children,
}: {children: ReactNode}) => {
  return (
    <>
      <p>Meals layout</p>
      {children}
    </>
  );
};

export default MealsLayout;
