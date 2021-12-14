import React from "react";
import { useHistory } from "react-router";
import "./textcomposition.sass";
export const TextComposition: React.FC = () => {
  const history = useHistory();
  return (
    <div className="text-composition-last">
      <h2 className="h2">“ Ты и я, семья, друзья - все находят для себя! ”</h2>
      <p>— Сергій, засновник</p>
      <div className="btn-btn-wrapper">
        <span onClick={() => history.push("/login")}>Приєднатись</span>
      </div>
    </div>
  );
};
