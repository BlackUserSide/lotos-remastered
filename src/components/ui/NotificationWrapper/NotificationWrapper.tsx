import React from "react";

type TProps = {
  message: string;
};
export const NotificationWrapper: React.FC<TProps> = ({ message }) => {
  return (
    <div className="notif-wrapper-main">
      <div className="container-notif">
        <p>{message}</p>
      </div>
    </div>
  );
};
