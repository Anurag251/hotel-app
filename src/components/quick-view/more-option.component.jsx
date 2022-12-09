import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { IconArrow, IconMapMarker } from "../icon.component";
import { Link, useNavigate } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const MoreOptionComponent = ({ url, datas }) => {
  const navigator = useNavigate();
  console.log(datas);
  return (
    <div className="more-option">
      <div className="all-item">
        <Swiper slidesPerView={4} spaceBetween={10} className="mySwiper">
          {datas !== undefined
            ? datas.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <div className="item">
                    <div className="image">
                      <img src={data.image} alt="" />
                    </div>

                    <div className="details">
                      <div className="item-body">
                        <div className="name">{data.name}</div>

                        <div className="location">
                          <IconMapMarker />
                          {data.location}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          navigator(`/details-page/${data.id}`, {
                            state: {
                              data: data,
                            },
                          });
                        }}
                        className="view-btn"
                      >
                        View Details <IconArrow />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : "Loading..."}

          <SwiperSlide></SwiperSlide>

          <SwiperSlide></SwiperSlide>

          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>

      <Link to={`${url}`} className="explore-all">
        Explore All <IconArrow />
      </Link>
    </div>
  );
};

export default MoreOptionComponent;
