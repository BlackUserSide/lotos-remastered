import React from "react";
import { DesktopFooter } from "./DesktopFooter";
import "./footer.sass";
export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <DesktopFooter />
    </footer>
  );
};
