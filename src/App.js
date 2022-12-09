import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./assets/styles/styles.sass";

import BackBtnComponent from "./components/back-btn.component";
import CardDetailsPageComponent from "./components/card/card-details-page.component";
import HeaderComponent from "./components/header.component";
import MobileNavigationComponent from "./components/mobile-navigation.component";
import { ALL_DATA } from "./data/data";
import CartPageComponent from "./pages/cart-page.component";
import HomePageComponent from "./pages/home-page.component";
import PackagePageComponant from "./pages/package-page.componant";
import QuickViewPageComponent from "./pages/quick-view-page.component";
import SearchPageComponent from "./pages/search-page.component";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" ||
      location.pathname === "/search" ||
      location.pathname === "/cart" ? (
        <React.Fragment>
          <HeaderComponent />
        </React.Fragment>
      ) : (
        <BackBtnComponent />
      )}

      <Routes>
        <Route path="/" element={<HomePageComponent datas={ALL_DATA} />} />

        <Route
          exact
          path="/quick-view/:name"
          element={<QuickViewPageComponent urlName={location.state} />}
        />

        <Route
          exact
          path="/package"
          element={<PackagePageComponant datas={ALL_DATA} />}
        />

        <Route
          exact
          path="/details-page/:id"
          element={<CardDetailsPageComponent />}
        />

        <Route exact path="/cart" element={<CartPageComponent />} />

        <Route exact path="/search" element={<SearchPageComponent />} />
      </Routes>

      {location.pathname === "/" ||
      location.pathname === "/search" ||
      location.pathname === "/cart" ? (
        <React.Fragment>
          <MobileNavigationComponent />
        </React.Fragment>
      ) : (
        <BackBtnComponent />
      )}
    </div>
  );
};

export default App;
