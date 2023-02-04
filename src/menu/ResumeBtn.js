import classes from "./ResumeBtn.module.css";
import Axios from "axios";
import FileDownload from "js-file-download";

const ResumBtn = () => {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "https://dsengineerresume.herokuapp.com/",
      method: "GET",
      responseType: "blob",
    })
      .then((res) => {
        console.log(res);
        FileDownload(res.data, "DanielSeijasResume.pdf");
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          console.log(
            "File not available, server is down, please check with the Administrator"
          );
        }
      });
  };

  return (
    
      <button className="btn btn-dark btn-outline-light" onClick={download}>Download Resume</button>
    
  );
};

export default ResumBtn;
