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
      <div className="container mt-3 pt-4">
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
                    className="img-fluid width-auto p-1"
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
      <div className="container content-row pt-4">
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

      return (
        <div className="container mb-2 mt-2 pt-4" key={index}>
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
    <div style={{ height: "100%", overflow: "scroll",fontFamily: 'Montserrat',paddingBottom: '100px' }}>
      {props.option[0].titleImage ?
        <div className="container h-30 pt-4 text-center">
          <div className="row">
            <div className="col-md-5">
              <img
                src={props.option[0].titleImage}
                className="img-fluid width-auto  rounded-circle float-md-right"
                style={{ maxHeight: "10rem" }}
                alt=""
              ></img>
            </div>
            <div className="col-md-7 align-self-center">
              <h1 className="float-md-left">{props.option[0].title}</h1>
            </div>
          </div>
        </div>
      : <h1 className="text-center pt-4">{props.option[0].title}</h1>}
      
      {content}
    </div>

  );
};

export default MainScreen;
