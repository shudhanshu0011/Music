import React, { useContext, useState } from "react";
import "../assets/scss/Navigation.scss";
import Brand from "./Brand";
import { ThemeContext } from "../../api/Theme";

function Navigation() {
  const [isLanguageListOpen, setLangList] = useState(false);
  const [isOpenProfile, setOpenProfile] = useState(false);

  function handleOpenLanguageList() {
    if (isOpenProfile === true) setOpenProfile(!isOpenProfile);
    setLangList(!isLanguageListOpen);
  }

  function handleOpenProfile() {
    if (isLanguageListOpen === true) setLangList(!isLanguageListOpen);
    setOpenProfile(!isOpenProfile);
  }
  const useStyle = useContext(ThemeContext);
  return (
    <nav style={useStyle.component}>
      <Brand />
      <div className={"navigation"}>
        {/* <NavigationButton href={"/home"} name={"Home"}/>*/}
        {/*<NavigationButton href={"/home/add"} name={"Add"}/>*/}
      </div>
    </nav>
  );
}

export default Navigation;
