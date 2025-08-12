import {
  ReactNode, Suspense,
} from "react";

import Loader from "@/components/shared/loader";

import classes from "./loadingSection.module.css";


interface LoadingSectionProps {
    children: ReactNode;
    loadingText?: string;
}

export const LoadingSection = ({
  children,
  loadingText,
}: LoadingSectionProps) => {
  return (
    <section
      className={classes.loadingSection}
    >
      <Suspense
        fallback={(
          <Loader
            text={loadingText}
          />
        )}
      >
        {children}
      </Suspense>
    </section>
  );
};
