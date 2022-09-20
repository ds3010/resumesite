import classes from "./MainScreen.module.css";
import Contact from "./Contact";
// import { useState, useEffect } from "react";

const MainScreen = (props) => {
  // const [] = useState({description: "", duration: "", location: "", role: ""})
  //console.log(props.option[0].items);
  // let duration = "";
  // let location = "";
  // let role = "";
  // let content = "";
  // let description = "";

  // useEffect(() => {
  let duration = "";
  let location = "";
  let role = "";
  let description = "";
  let content = "";
  let areThereDuties = false;
  let areThereImages = false;

  if (props.option[0].items) {
    content = props.option[0].items.map((item, index) => {
      description = item.description;

      if (item.duration) {
        duration = item.duration;
      } else {
        duration = "";
      }
      if (item.location) {
        location = item.location;
      } else {
        location = "";
      }
      if (item.role) {
        role = item.role;
      } else {
        role = "";
      }
      if (item.duties) {
        areThereDuties = true;
      }
      if (item.imageUrl) {
        areThereImages = true;
      }

      const liClasses = areThereDuties
        ? classes.itemDivLi
        : classes.itemDivLiSecond;

      const imgClasses = areThereImages
        ? classes.itemHeaderWithImage
        : classes.itemHeader;

      return (
        <div className={classes.itemDiv} key={index}>
          <div className={classes.headerBox}>
            {areThereImages && (
              <img src={item.imageUrl} className={classes.image} alt=""></img>
            )}
            <ul className={imgClasses}>
              <li className={liClasses}>{description}</li>
              {duration !== "" && <li className={liClasses}>{duration}</li>}
              {location !== "" && <li className={liClasses}>{location}</li>}
              {role !== "" && <li className={liClasses}>{role}</li>}
            </ul>
          </div>
          {item.duties && (
            <ul className={classes.itemDivLiUl}>
              {item.duties.map((duty, index) => {
                return (
                  <li className={classes.itemDivLiUlLi} key={index}>
                    {duty}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      );
    });
    // console.log(content);
  } else if (props.option[0].id === 5) {
    content = <Contact></Contact>;
  }
  // }, [props.option[0]]);

  return (
    <div className={classes.fullElement}>
      <h1 className={classes.pageTitle}>{props.option[0].title}</h1>
      {content}
    </div>
  );
};

export default MainScreen;
