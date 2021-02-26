import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => {
  return (
    <div>
      Reticulating splines...
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  );
};

export default Spinner;
