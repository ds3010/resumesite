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
      // PREVIOUS CSS CLASSES
      // const liClasses = areThereDuties
      //   ? classes.itemDivLi
      //   : classes.itemDivLiSecond;

      // const imgClasses = areThereImages
      //   ? classes.itemHeaderWithImage
      //   : classes.itemHeader;

      //PREVIOUS RETURN
      // return (
      //   <div className={classes.itemDiv} key={index}>
      //     <div className={classes.headerBox}>
      //       {areThereImages && (
      //         <img src={item.imageUrl} className={classes.image} alt=""></img>
      //       )}
      //       <ul className={imgClasses}>
      //         <li className={liClasses}>{description}</li>
      //         {duration !== "" && <li className={liClasses}>{duration}</li>}
      //         {location !== "" && <li className={liClasses}>{location}</li>}
      //         {role !== "" && <li className={liClasses}>{role}</li>}
      //       </ul>
      //     </div>
      //     {item.duties && (
      //       <ul className={classes.itemDivLiUl}>
      //         {item.duties.map((duty, index) => {
      //           return (
      //             <li className={classes.itemDivLiUlLi} key={index}>
      //               {duty}
      //             </li>
      //           );
      //         })}
      //       </ul>
      //     )}
      //   </div>
      // );
      return (
        <div className="container mb-2">
          <div className="card" key={index}>
            <div className="card-body p-0" >
              <h5 className="card-header bg-light text-center">{description}</h5>
              {(duration || location || role || areThereImages) && <div>
                <div className="d-inline-block">
                  {areThereImages && (
                      <img src={item.imageUrl} className="card-image-top img-fluid align-middle" style={{width: "5rem"}} alt="">
                      </img>
                  )}
                </div>
                <div className="d-inline-block align-middle">
                  <ul class="list-group"> 
                    {duration !== "" && <li class="list-group-item border-0"><span class="font-weight-bold ">Duration: </span>{duration}</li>}
                    {location !== "" && <li class="list-group-item border-0"><span class="font-weight-bold">Location: </span>{location}</li>}
                    {role !== "" && <li class="list-group-item border-0"><span class="font-weight-bold">Role: </span>{role}</li>}
                  </ul>
                </div>
              </div>}
            
            {item.duties && (
              <ul class="list-group ml-5">
                {item.duties.map((duty, index) => {
                  return (
                    <li class="list-group-item border-0 p-0 m-0" key={index}>
                      {duty}
                    </li>
                  );
                })}
              </ul>
            )}
            </div>
          </div>
        </div>
      );
    });
    // console.log(content);
  } else if (props.option[0].id === 5) {
    content = <Contact></Contact>;
  }
  // }, [props.option[0]]);

  return (
    <div style={{height: "100%", overflow: "scroll"}}>
      <h1 className="text-center">{props.option[0].title}</h1>
      {content}
    </div>
  );
};

export default MainScreen;
