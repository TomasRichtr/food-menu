import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "@/components/mainHeader/mainHeader.module.css";
import {MainHeaderBackground} from "@/components/mainHeader/mainHeaderBackground";
import NavLink from "@/components/navLink";
import {ROUTE} from "@/constants/route";


const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <div
        className={classes.header}
      >
        <Link
          className={classes.logo}
          href={ROUTE.HOME}
        >
          <Image
            src={logoImg}
            alt="A place with food on it"
            priority
          />
        </Link>

        <nav
          className={classes.nav}
        >
          <ul>
            <li>
              <NavLink
                href={ROUTE.MEALS}
              >
                Browse Meals
              </NavLink>

            </li>

            <li>
              <NavLink
                href={ROUTE.COMMUNITY}
              >
                Foodies Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainHeader;
