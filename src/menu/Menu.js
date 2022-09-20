import classes from "./Menu.module.css";
// import CloseButton from "../buttons/CloseButton";
import MenuOptions from "./MenuOptions.js";
import { useState } from "react";
import SmartDeviceMenuOptions from "./SmartDeviceMenuOptions";
import ResumeBtn from "./ResumeBtn";

const Menu = (props) => {
  const [smartDeviceMenuDisplay, setSmartDeviceMenuDisplay] = useState(false);

  const optionSelected = (id) => {
    props.optionSelected(id);
    setSmartDeviceMenuDisplay(false);
  };

  const displayMenuOptions = () => {
    setSmartDeviceMenuDisplay((previousState) => {
      return !previousState;
    });
  };

  //console.log(props.optionDisplayed);
  return (
    <>
      <div className={classes.fullElement}>
        <div className={classes.menu}>
          <div className={classes.name}>
            <h2>Daniel Seijas</h2>
          </div>
          {props.options.map((option) => {
            return (
              <MenuOptions
                title={option.title}
                key={option.id}
                id={option.id}
                onSelected={optionSelected}
              ></MenuOptions>
            );
          })}
          <ResumeBtn></ResumeBtn>
          <div className={classes.hamburgerDiv}>
            <button
              className={classes.hamburger}
              onClick={displayMenuOptions}
            ></button>
          </div>
        </div>
      </div>
      {smartDeviceMenuDisplay && (
        <div className={classes.smartDeviceMenu}>
          {props.options.map((option) => {
            return (
              <SmartDeviceMenuOptions
                title={option.title}
                key={option.id}
                id={option.id}
                onSelected={optionSelected}
              ></SmartDeviceMenuOptions>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Menu;
