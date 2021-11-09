import React from "react";
import "./homecabinet.sass";
import { MainInfoWrapper } from "./MainInfoWrapper/MainInfoWrapper";
export const HomeCabinet: React.FC = () => {
  return (
    <>
      <div className="home-cabinet-wrapper">
        <MainInfoWrapper />
      </div>
    </>
  );
};
