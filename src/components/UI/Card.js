import "./Card.css";

/**
 *
 * @param {Object} props react prop to accept our card component to act as a container of other components
 * @param {String} props.children a reserved name, it always be the content between the open and close component
 * @returns
 */
function Card(props) {
  // adds everithing we receive as a classeName outside to the card class
  const classes = "card " + props.className;

  return <div className={classes}> {props.children} </div>;
}

export default Card;
