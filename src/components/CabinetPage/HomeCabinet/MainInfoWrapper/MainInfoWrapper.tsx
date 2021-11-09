import React from "react";
import nameImage from "../../../../img/iconCabinet/IconMainHome/name.png";
import classIco from "../../../../img/iconCabinet/IconMainHome/classImage.png";
import hzIcon from "../../../../img/iconCabinet/IconMainHome/hzIcon.png";
import idIcon from "../../../../img/iconCabinet/IconMainHome/idIcon.png";
import copy from "../../../../img/iconCabinet/IconMainHome/copyBtn.png";
export const MainInfoWrapper: React.FC = () => {
  const testFunct = () => {
    navigator.clipboard.writeText("http://www.lotus-namaste.com/");
  };
  return (
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
            <p>Антохіна Антоніна Анатоліївна</p>
          </div>
          <div className="class-wrapper item-block-inform">
            <div className="image-wrapper">
              <img src={classIco} alt="" />
            </div>
            <p>S3</p>
            <div className="inform-ico item-block-inform">
              <img src={""} alt="" />
            </div>
            <div className="information-hidden"></div>
          </div>
          <div className="id-wrapper-user item-block-inform">
            <div className="image-wrapper">
              <img src={idIcon} alt="" />
            </div>
            <p>9912315</p>
          </div>
          <div className="bonust-to-user item-block-inform">
            <div className="image-wrapper">
              <img src={hzIcon} alt="" />
            </div>
            <p>Винагорода за попередній період: 2 000 Lt</p>
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
                value="http://www.lotus-namaste.com/"
              />
              <div className="btn-wrapper-copy" onClick={testFunct}>
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
                <p>Іванов Іван Іванович</p>
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
  );
};
