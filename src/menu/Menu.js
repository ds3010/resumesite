// import classes from "./Menu.module.css";
// import CloseButton from "../buttons/CloseButton";
import MenuOptions from "./MenuOptions.js";
// import { useState } from "react";
// import SmartDeviceMenuOptions from "./SmartDeviceMenuOptions";
import ResumeBtn from "./ResumeBtn";

const Menu = (props) => {
  // const [smartDeviceMenuDisplay, setSmartDeviceMenuDisplay] = useState(false);

  const optionSelected = (id) => {
    props.optionSelected(id);
    // setSmartDeviceMenuDisplay(false);
  };

  // const displayMenuOptions = () => {
  //   setSmartDeviceMenuDisplay((previousState) => {
  //     return !previousState;
  //   });
  // };

  //console.log(props.optionDisplayed);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* <div className="container"> */}
      <div
        className="d-flex container ml-0 mr-0 p-2 justify-content-between"
        style={{ maxWidth: "100%" }}
      >
        <a className="navbar-brand" style={{ fontFamily: 'Montserrat'}} href="#">
          Daniel Seijas
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse text-center" id="navbarNav">
          <ul className="navbar-nav ml-auto">
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
            <li className="nav-item">
              <ResumeBtn></ResumeBtn>
            </li>
          </ul>
        </div>

        {/* <div className={classes.hamburgerDiv}>
            <button
              className={classes.hamburger}
              onClick={displayMenuOptions}
            ></button>
          </div> */}
      </div>
      {/* </div> */}
      {/* {smartDeviceMenuDisplay && (
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
      )} */}
    </nav>
  );
};

export default Menu;
