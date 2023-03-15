import React from "react";
import { useDispatch} from "react-redux";

const Button = ({ typeAction, children }) => {
  const dispatch = useDispatch();

   return (
    <div>
      <button type="button" onClick={() => dispatch({ type: typeAction })}>
        {children}
      </button>
    </div>
  );
};

export default Button;
