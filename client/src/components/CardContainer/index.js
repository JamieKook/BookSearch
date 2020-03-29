import React from "react";

function CardContainer(props) {
  return (
    <div className="container flex-column">
        {props.children}
    </div>
  );
}

export default CardContainer;