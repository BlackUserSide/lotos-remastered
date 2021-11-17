import React from "react";
import { StructureComponentContext } from "./StructureContext/StructureComponentContext";
import { StructurePage } from "./StructurePage";

export const ControllerStructure: React.FC = () => {
  return (
    <StructureComponentContext>
      <StructurePage />
    </StructureComponentContext>
  );
};
