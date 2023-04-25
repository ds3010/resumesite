import"./MainScreen.css";
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

  if (props.option[0].id === 1) {
    const intContent = props.option[0].items.map((item, index) => {
      return (
        // <div key={index} className="container">
        //   <li
        //     className="text-left justify-content-left font-weight-normal"
        //     style={{ justifyContent: "left", fontSize: "20px" }}
        //   >
        //     {item.description}
        //   </li>
        // </div>
        <li key={index} className="list-group-item">
          <h5 className="font-weight-normal">{item.description}</h5>
        </li>
      );
    });
    content = (
      <div className="container mt-3">
        <ul className="list-group list-group-flush mb-5">{intContent}</ul>
      </div>
    );
  } else if (props.option[0].id === 5) {
    content = <Contact></Contact>;
  } else if (props.option[0].id === 4) {
    const intContent = props.option[0].items.map((item, index) => {
      return (
        <div className="col-sm-6 col-lg-4 mb-4" key={index}>
          {/* <div className="col-lg d-inline-block mt-3 w-25 " key={index}> */}
          <div className="card h-100">
            <div className="card-body p-0">
              <h5 className="card-header bg-light text-dark text-center">
                {item.description}
              </h5>
              {item.imageUrl && (
                <div className="d-flex justify-content-center pt-2">
                  <img
                    src={item.imageUrl}
                    className="img-fluid width-auto pb-2"
                    style={{ maxHeight: "4rem" }}
                    alt=""
                  ></img>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
    content = (
      <div className="container content-row">
        <div className="row">
          {/* <div className="card-columns">{intContent}</div> */}
          {intContent}
        </div>
      </div>
    );
  } else if (props.option[0].items) {
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
        <div className="container mb-2 mt-2" key={index}>
          <div className="card">
            <div className="card-body p-0">
              <h5 className="card-header bg-light text-dark text-center">
                {description}
              </h5>
              {(duration || location || role || areThereImages) && (
                <div>
                  <div id="edImage" className="d-inline-block">
                    {areThereImages && (
                      <img 
                        // id="edImage" 
                        src={item.imageUrl}
                        className="card-image-top img-fluid align-middle"
                        style={{ width: "5rem" }}
                        alt=""
                      ></img>
                    )}
                  </div>
                  <div id="edDetails" className="d-inline-block align-middle">
                    <ul className="list-group">
                      {duration !== "" && (
                        <li className="list-group-item border-0">
                          <span className="font-weight-bold ">Duration: </span>
                          {duration}
                        </li>
                      )}
                      {location !== "" && (
                        <li className="list-group-item border-0">
                          <span className="font-weight-bold">Location: </span>
                          {location}
                        </li>
                      )}
                      {role !== "" && (
                        <li className="list-group-item border-0">
                          <span className="font-weight-bold">Role: </span>
                          {role}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {item.duties && (
                <ul className="list-group ml-5">
                  {item.duties.map((duty, index) => {
                    return (
                      <li
                        className="list-group-item border-0 p-0 m-0"
                        key={index}
                      >
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
  }
  // }, [props.option[0]]);

  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <h1 className="text-center">{props.option[0].title}</h1>
      {content}
    </div>
  );
};

export default MainScreen;
