import React, { useEffect, useState } from "react";
import "./instructions.sass";
type TProps = {
  dataManual: string;
};
export const InstuctionsProduct: React.FC<TProps> = ({ dataManual }) => {
  const [dataManualState, setDataMainualState] = useState<Array<string[]>>([]);
  useEffect(() => {
    if (dataManual) {
      const newArr = [];
      let tmpArr = dataManual.split("/");
      for (let i = 0; i < tmpArr.length; i++) {
        let tmp = tmpArr[i].split("|");
        newArr.push(tmp);
      }
      setDataMainualState(newArr);
    }
  }, [dataManual]);
  return (
    <>
      <div className="instructions-wrapper">
        <div className="top-line">
          <h2 className="h2">Інструкція застосування</h2>
        </div>
        {dataManualState.map((e, i) => (
          <div className="container-instruction-wrapper" key={i}>
            <div className="main-content-instruction">
              <h4 className="h4">{e[0]}</h4>
              <p>{e[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
