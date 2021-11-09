import React from "react";
import "./reviewcollection.sass";
import user from "../../../img/user.png";
export const ReviewCollection: React.FC = () => {
  return (
    <div className="review-collection">
      <div className="top-line">
        <h2 className="h2">Відгуки</h2>
        <div className="btn-review-wrapper">
          <span>Залишити відгук</span>
        </div>
      </div>
      <div className="container-review-wrapper">
        <div className="item-reviw">
          <div className="top-line-review">
            <div className="avatar-wrapepr">
              <div className="image-wrapper">
                <img src={user} alt="" />
              </div>
              <p className="name-wrapper">Николай</p>
            </div>

            <div className="balls-wrapper">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                  fill="#E0E0E0"
                />
              </svg>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                  fill="#E0E0E0"
                />
              </svg>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                  fill="#E0E0E0"
                />
              </svg>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                  fill="#E0E0E0"
                />
              </svg>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
                  fill="#E0E0E0"
                />
              </svg>
            </div>
          </div>
          <div className="text-review">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, nec
              morbi sed est accumsan justo. Egestas donec pulvinar elit faucibus
              nisl sollicitudin velit quam turpis. At urna duis adipiscing
              aenean sit velit condimentum fames. Diam euismod neque habitasse
              egestas eget morbi. Fermentum tempus dignissim vitae nunc blandit
              sed cras amet. Dui amet quis dictum porttitor fermentum,
              tincidunt. Amet, id massa augue at. Dignissim tellus vel magnis
              elementum posuere. Ac tristique iaculis quis accumsan augue
              aliquam, cursus at leo. Nulla pharetra in amet lacus ut purus
              feugiat sed elit. Fermentum, vitae, id integer vulputate. Sed
              orci, nisl nulla quisque id at vitae. Quam at amet vitae
              consequat, non et eget sit tellus.
            </p>
          </div>
          <div className="date-wrapper">
            <p>20 октября 2021 г.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
