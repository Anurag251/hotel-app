import React from "react";
import CustomTitleComponent from "./custom-title.component";
import {
  IconBar,
  IconCab,
  IconHotel,
  IconMusic,
  IconParking,
  IconRestaurant,
  IconSPA,
  IconTrekking,
} from "./icon.component";

const HotelServicesComponent = () => {
  return (
    <div className="hotel-services">
      <CustomTitleComponent title="Hotel Services" />

      <div className="service-btn-list">
        <div className="item">
          <button>
            <div className="icon">
              <IconHotel />
            </div>
            <div className="name">Hotel</div>
          </button>
        </div>

        <div className="item">
          <button>
            <div className="icon">
              <IconRestaurant />
            </div>
            <div className="name">Restaurant</div>
          </button>
        </div>

        <div className="item">
          <button>
            <div className="icon">
              <IconCab />
            </div>
            <div className="name">Cab</div>
          </button>
        </div>

        <div className="item">
          <button>
            <div className="icon">
              <IconTrekking />
            </div>
            <div className="name">Trekking</div>
          </button>
        </div>

        <div className="item">
          <button>
            <div className="icon">
              <IconSPA />
            </div>
            <div className="name">SPA</div>
          </button>
        </div>

        <div className="item">
          <button>
            <div className="icon">
              <IconParking />
            </div>
            <div className="name">Parking</div>
          </button>
        </div>

        <div className="item">
          <button>
            <div className="icon">
              <IconBar />
            </div>
            <div className="name">Bar</div>
          </button>
        </div>

        <div className="item">
          <button>
            <div className="icon">
              <IconMusic />
            </div>
            <div className="name">Music</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelServicesComponent;
