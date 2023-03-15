import React from "react";
import GrayPage from "../pages/GrayPage";
import LogoPage from "../pages/LogoPage";
import HeaderPage from "../pages/HeaderPage";
import PicturePage from "../pages/PicturePage";
import GreenPage from "../pages/GreenPage";

const MainPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="mainPage md:w-6/12 md:mx-auto">
          <div className="header">
            <HeaderPage />
          </div>
          <div className="bottleImg">
            <PicturePage />
          </div>
          <div className="logo">
            <LogoPage />
          </div>
          <div className="grayColumn">
            <GrayPage />
          </div>
          <div className="greenColumn">
            <GreenPage />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
