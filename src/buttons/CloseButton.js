import classes from "./CloseButton.module.css";

const CloseButton = () => {
  return (
    <div className={classes.closeButtonDiv}>
      <button className={classes.closeButton}>X</button>
    </div>
  );
};

export default CloseButton;
