import React from "react";
import Fullpage, {
  FullpageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

export const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullpageSections>
        <FullpageSection></FullpageSection>
      </FullpageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
