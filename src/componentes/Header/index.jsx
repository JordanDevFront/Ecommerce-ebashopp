import React from "react";

import { useMediaQuery } from "react-responsive";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

export function Header() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isDesktopOrLaptop && <HeaderDesktop />}
      {isTabletOrMobile && (
        <>
          <HeaderMobile />
        </>
      )}
    </>
  );
}
