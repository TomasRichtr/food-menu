import './globals.css';

export const metadata = {
    title: 'NextLevel Food',
    description: 'Delicious meals, shared by a food-loving community.',
};

import { ReactNode } from 'react';

import {HeaderBackground} from "@/components/headerBackground";

export default function RootLayout({
 children,
}: {
 children: ReactNode;
}) {
    return (
      <html
        lang="en"
      >
        <body>
          <HeaderBackground/>
          {children}
        </body>
      </html>
    );
}
