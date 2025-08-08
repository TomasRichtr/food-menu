import './globals.css';
import {Metadata} from "next";
import { ReactNode } from 'react';

import MainHeader from "@/components/layout/mainHeader/mainHeader";
import {MainHeaderBackground} from "@/components/layout/mainHeader/mainHeaderBackground";

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

const RootLayout = ({
  children,
}: {
 children: ReactNode;
}) => {
  return (
    <html
      lang="en"
    >
      <body>
        <header>
          <MainHeader />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
