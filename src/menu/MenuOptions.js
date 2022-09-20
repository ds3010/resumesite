import classes from "./MenuOptions.module.css";

const MenuOptions = (props) => {
  const onClicked = () => {
    props.onSelected(props.id);
  };
  return (
    // <div>
    <div className={classes.option}>
      <h4 onClick={onClicked}>{props.title}</h4>
    </div>
  );
};

export default MenuOptions;
