import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const DeleteAll = () => {
  const { deleteAll } = useContext(GlobalContext);

  return (
    <button className="btn btn-danger" onClick={deleteAll}>
      Delete All
    </button>
  );
};
