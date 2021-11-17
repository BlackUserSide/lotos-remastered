import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
//import { getDataStructure } from "../../api/structure";
import "./structurepage.sass";
import { IDataUser, IMainDataStructure } from "./types";
import { useHistory } from "react-router";
import { getDataUser } from "../../api/user";
//import { getDataStrForUser } from "../../function/getDataStrForUser";
import { StructureContext } from "./StructureContext/StructureContext";

export const StructurePage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { dataStructure, newDataStruct } = useContext(StructureContext);
  let history = useHistory();
  const [dataStruct, setDataStruct] = useState<Array<IMainDataStructure>>([]);
  const [dataUser, setDataUser] = useState<IDataUser>({
    firstName: "",
    lastName: "",
    surname: "",
    id: 0,
  });
  //const [activeId, setActiveId] = useState<number[]>([0]);
  const updateWrapper = useCallback(() => {
    if (dataStructure) {
      let time = setTimeout(() => {
        setDataStruct(dataStructure);
      }, 100);
      return () => {
        clearTimeout(time);
        if (ref.current !== null) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      };
    }
  }, [dataStructure]);
  useEffect(() => {
    updateWrapper();
    console.log(dataStructure, "dataStructure");
  }, [dataStructure, updateWrapper]);

  useEffect(() => {
    getDataUser()
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              setDataUser(res.data[0]);
              break;
            case 401:
              localStorage.clear();
              history.push("/login");
              break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history]);
  const getHandlerStructure: any = (id: number, idLine: number) => {
    if (newDataStruct) {
      newDataStruct(id, idLine);
      updateWrapper();
    }
  };

  return (
    <div className="structure-page-wrapper">
      <div className="link-wrapper-navigation">
        <div className="container-navigatin-link">
          <Link to="/cabinet/home" className="main-link-navigation">
            Головна
          </Link>
          <span>/</span>
          <Link to="/cabinet/business" className="active-link">
            Моя структура
          </Link>
        </div>
      </div>
      <div className="structure-wrapper">
        <div className="top-line-wrapper">
          <h1 className="h1">Моя структура</h1>
          <p>Людей у структурі: Не разраховано</p>
          <p>Загальний обсяг: Не разраховано</p>
        </div>
        <div className="structure-container">
          <div className="line-my-wrapper">
            <div className="item-line-wrapper-user">
              <div className="top-line-user">
                <div className="user-icon">
                  <div className="image-wrapper">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 6.8C8.90931 6.8 9.78139 6.44179 10.4244 5.80416C11.0673 5.16654 11.4286 4.30174 11.4286 3.4C11.4286 2.49826 11.0673 1.63346 10.4244 0.995837C9.78139 0.358213 8.90931 0 8 0C7.09069 0 6.21862 0.358213 5.57563 0.995837C4.93265 1.63346 4.57143 2.49826 4.57143 3.4C4.57143 4.30174 4.93265 5.16654 5.57563 5.80416C6.21862 6.44179 7.09069 6.8 8 6.8ZM0 17C-1.56548e-08 15.9582 0.206926 14.9266 0.608964 13.964C1.011 13.0015 1.60028 12.127 2.34315 11.3903C3.08601 10.6536 3.96793 10.0692 4.93853 9.67056C5.90914 9.27187 6.94943 9.06667 8 9.06667C9.05058 9.06667 10.0909 9.27187 11.0615 9.67056C12.0321 10.0692 12.914 10.6536 13.6569 11.3903C14.3997 12.127 14.989 13.0015 15.391 13.964C15.7931 14.9266 16 15.9582 16 17H0Z"
                        fill="#1FBB83"
                      />
                    </svg>
                  </div>
                </div>
                <div className="name-wrapper">
                  <p>{`${dataUser.surname} ${dataUser.firstName} ${dataUser.lastName}`}</p>
                  <span>{dataUser.id}</span>
                </div>
              </div>
              <div className="info-wrapper-item">
                <p>ВО: Lt</p>
                <p></p>
              </div>
            </div>
          </div>
          {dataStruct.map((e, i) => (
            <div className="line-wrapper-offside" key={i}>
              {e.data
                ? e.data.map((k, o) => (
                    <div
                      className="item-line-wrapper-user"
                      key={o}
                      onClick={() => {
                        getHandlerStructure(k.id, e.id);
                      }}
                    >
                      <div className="top-line-user">
                        <div className="user-icon">
                          <div className="image-wrapper">
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 6.8C8.90931 6.8 9.78139 6.44179 10.4244 5.80416C11.0673 5.16654 11.4286 4.30174 11.4286 3.4C11.4286 2.49826 11.0673 1.63346 10.4244 0.995837C9.78139 0.358213 8.90931 0 8 0C7.09069 0 6.21862 0.358213 5.57563 0.995837C4.93265 1.63346 4.57143 2.49826 4.57143 3.4C4.57143 4.30174 4.93265 5.16654 5.57563 5.80416C6.21862 6.44179 7.09069 6.8 8 6.8ZM0 17C-1.56548e-08 15.9582 0.206926 14.9266 0.608964 13.964C1.011 13.0015 1.60028 12.127 2.34315 11.3903C3.08601 10.6536 3.96793 10.0692 4.93853 9.67056C5.90914 9.27187 6.94943 9.06667 8 9.06667C9.05058 9.06667 10.0909 9.27187 11.0615 9.67056C12.0321 10.0692 12.914 10.6536 13.6569 11.3903C14.3997 12.127 14.989 13.0015 15.391 13.964C15.7931 14.9266 16 15.9582 16 17H0Z"
                                fill="#828282"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="name-wrapper">
                          <p>{`${k.surname} ${k.firstName} ${k.lastName}`}</p>
                          <span>{k.id}</span>
                        </div>
                      </div>
                      <div className="info-wrapper-item">
                        <p>ВО: 2 000 Lt</p>
                        <p>Запрошено людей: 11</p>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          ))}
          <div ref={ref}></div>
        </div>
      </div>
    </div>
  );
};
