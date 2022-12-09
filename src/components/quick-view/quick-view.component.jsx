import React from "react";

import { IconHeart, IconMapMarker } from "../icon.component";

const pImage1 =
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const QuickViewComponent = ({ data }) => {
  return (
    <div className="quick-view">
      <div className="quick-view-area">
        <div
          className="image"
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>

        <div className="details">
          <div className="wrapper">
            <div className="head">
              <div className="name">{data.name}</div>
              <button className="wishlist">
                <IconHeart />
              </button>
            </div>

            <div className="rating"></div>

            <div className="location">
              <IconMapMarker /> {data.location}
            </div>

            <div className="price">
              from: <span>Rs {data.price}</span> to:{" "}
              <span>Rs {data.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewComponent;
