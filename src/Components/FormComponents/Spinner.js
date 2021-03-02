import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => {
  return (
    <div>
      Loading...
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  );
};

export default Spinner;
