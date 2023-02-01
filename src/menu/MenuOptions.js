//import classes from "./MenuOptions.module.css";

const MenuOptions = (props) => {
  const onClicked = () => {
    props.onSelected(props.id);
  };
  return (
    // <div>
    <li className="nav-item">
      <a className="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show" href="#" onClick={onClicked}>{props.title}</a>
    </li>
  );
};

export default MenuOptions;
