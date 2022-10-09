import React from "react";
import "./AppButton.scss";

export const AppButton = ({ title, loading, method, active }) => {
  return (
    <button
      type="button"
      disabled={loading}
      onClick={method}
      className={active ? 'app-button  app-button--active' : 'app-button'}
    >
      {title}
    </button>
  );
};
