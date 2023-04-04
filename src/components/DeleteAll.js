import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const DeleteAll = () => {
  const { deleteAll } = useContext(GlobalContext);

  return (
    <button className="btn-delete-all" onClick={deleteAll}>
      Delete All
    </button>
  );
};
