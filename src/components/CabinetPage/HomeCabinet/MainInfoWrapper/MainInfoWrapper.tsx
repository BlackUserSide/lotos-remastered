import React, { useEffect, useState } from "react";
import nameImage from "../../../../img/iconCabinet/IconMainHome/name.png";
import classIco from "../../../../img/iconCabinet/IconMainHome/classImage.png";
import hzIcon from "../../../../img/iconCabinet/IconMainHome/hzIcon.png";
import idIcon from "../../../../img/iconCabinet/IconMainHome/idIcon.png";
import copy from "../../../../img/iconCabinet/IconMainHome/copyBtn.png";
import { getDataUser } from "../../../api/user";
import { useHistory } from "react-router";
export const MainInfoWrapper: React.FC = () => {
  const [dataUser, setDataUser] = useState<any>({});
  const [dataInvite, setDataInvite] = useState<any>();
  const testFunct = (link: string) => {
    navigator.clipboard.writeText(link);
  };
  let history = useHistory();
  useEffect(() => {
    getDataUser()
      .then((res) => {
        if (res) {
          console.log(res);

          switch (res.status) {
            case 200:
              setDataUser(res.data[0]);
              setDataInvite(res.data[1]);
              break;
            case 401:
              localStorage.clear();
              history.push("/login");
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  }, [history]);
  console.log(dataInvite);

  return (
    <>
      {dataUser.surname ? (
        <div className="main-info-wrapper">
          <div className="top-line">
            <h1 className="h1">Особиста інформація</h1>
          </div>
          <div className="container-wrapper-inform-cabinet">
            <div className="first-block-inform">
              <div className="name-user-wrapper item-block-inform">
                <div className="image-wrapper">
                  <img src={nameImage} alt="" />
                </div>
                <p>{`${dataUser.surname} ${dataUser.firstName} ${dataUser.lastName}`}</p>
              </div>
              <div className="class-wrapper item-block-inform">
                <div className="image-wrapper">
                  <img src={classIco} alt="" />
                </div>
                <p>1</p>
                <div className="inform-ico item-block-inform">
                  <img src={""} alt="" />
                </div>
                <div className="information-hidden"></div>
              </div>
              <div className="id-wrapper-user item-block-inform">
                <div className="image-wrapper">
                  <img src={idIcon} alt="" />
                </div>
                <p>{dataUser.id}</p>
              </div>
              <div className="bonust-to-user item-block-inform">
                <div className="image-wrapper">
                  <img src={hzIcon} alt="" />
                </div>
                <p>Винагорода за попередній період: 0 Lt</p>
              </div>
            </div>
            <div className="second-block-information">
              <div className="invite-link-wrapper">
                <div className="top-line-wrapper">
                  <p>Реферальне посилання для запрошення:</p>
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    disabled={true}
                    value={`http://91.228.155.147/register/${dataUser.myInviteLink}`}
                  />
                  <div
                    className="btn-wrapper-copy"
                    onClick={() =>
                      testFunct(
                        `http://91.228.155.147/register/${dataUser.myInviteLink}`
                      )
                    }
                  >
                    <img src={copy} alt="" />
                  </div>
                </div>
              </div>
              <div className="invite-user-wrapper">
                <div className="top-line-wrapper">
                  <p>Вас запросив:</p>
                </div>
                <div className="inform-invite-user">
                  <div className="inform-user wrapper-inform-section">
                    <div className="image-wrapper">
                      <img src={nameImage} alt="" />
                    </div>
                    {dataInvite ? (
                      <p>{`${dataInvite.surname} ${dataInvite.firstName} ${dataInvite.lastName}`}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="inform-class-user wrapper-inform-section">
                    <div className="image-wrapper">
                      <img src={classIco} alt="" />
                    </div>

                    <p>S4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
