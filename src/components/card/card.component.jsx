import React from "react";
import { Link } from "react-router-dom";
import { IconMapMarker } from "../icon.component";

const CardComponent = ({ data }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={data.image} alt="" />
      </div>

      <Link to="/quick-view">
        <div className="details">
          <h4 className="name">{data.name}</h4>

          <div className="item-footer">
            <div className="location">
              <IconMapMarker />
              {data.location}
            </div>

            <div className="price">Rs {data.price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardComponent;
