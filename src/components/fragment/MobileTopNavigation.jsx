import React from "react";
import "../assets/scss/MobTopNav.scss";
import Brand from "./Brand";

class MobileTopNavigation extends React.Component {
  render() {
    return (
      <nav className="mob-top-navigation">
        <Brand />
      </nav>
    );
  }
}

export default MobileTopNavigation;
