import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../../assets/Banner.svg";
import { CgArrowLongRight } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";

const Home = () => {
  const [show, setShow] = useState([]);
  const [fileIds, setFileIds] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      )
      .then((response) => {
        setShow(response.data.events);
        const ids = response.data.events.map((item) =>
          extractFileId(item.imgUrl)
        );
        setFileIds(ids);
      })
      .catch((err) => console.log(err));
  }, []);

  const extractFileId = (imgUrl) => {
    const startIndex = imgUrl.indexOf("/d/") + 3;
    const endIndex = imgUrl.indexOf("/view", startIndex);
    if (startIndex !== -1 && endIndex !== -1) {
      return imgUrl.substring(startIndex, endIndex);
    } else {
      console.error("Invalid image URL format");
      return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let monthIndex = new Date().getMonth();
    let monthName = monthNames[monthIndex];
    return `${monthName} ${day}, ${month}`;
  };

  const convertToKilometers = (distanceInMeters) => {
    return (distanceInMeters / 1000).toFixed(2);
  };

  const reduceEventName = (eventName) => {
    const parts = eventName.split(" ");
    if (parts.length >= 3) {
      return parts.slice(0, 2).join(" ");
    } else {
      return eventName;
    }
  };
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div>
          <img src={banner} alt="Banner" className="" />
        </div>
        <div className="absolute top-4 sm:top-48 text-white text-sm">
          <div className="text-lg flex justify-center text-white sm:text-4xl text-center">
            Discover Exciting Events Happening <br /> Near You - Stay Tuned for
            Updates!
          </div>
          <div className="flex flex-wrap justify-center text-center mt-1 sm:mt-3 sm:ml-5 text-[14px] font-bold text-[#989090] sm:text-lg sm:px-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            odio vitae aperiam adipisci lorem fogi lorem for lorem for lor
          </div>
        </div>
      </div>
      <div className="flex justify-between my-3 lg:text-[17px] text-[0.7em] font-bold">
        <div>
          <span className="flex gap-2 cursor-pointer ml-10">
            Recommended events <CgArrowLongRight className="m-1" />
          </span>
          <span></span>
        </div>
        <div className="underline cursor-pointer">See all</div>
      </div>
      <Slider {...settings} className="ml-10">
        {show.map((item, index) => (
          <div key={index}>
            <div className="relative max-w-[480px] mx-auto">
              <img
                src={`https://drive.google.com/thumbnail?id=${fileIds[index]}&sz=w1000`}
                alt={`event${index}`}
                className="w-full"
              />
              <div className="w-full absolute z-30 text-white bottom-7 text-sm px-6 ">
                <div className="flex justify-between lg:text-[11px] text-[0.5rem]">
                  <div className="">{reduceEventName(item.eventName)}</div>
                  <div className="text-[#989090] ">{formatDate(item.date)}</div>
                </div>
                <div className="flex justify-between lg:mt-2 lg:text-[11px] text-[0.3rem]">
                  <div className="flex items-center">
                    <div>
                      <TiLocation className="m-1 h-4 w-3" />
                    </div>
                    <div className="text-[#989090]">{item.cityName}</div>
                  </div>
                  <div className="flex items-center gap-1  text-[#989090]">
                    <div className="text-[#989090]">{item.weather}</div>|
                    <div className="text-[#989090]">
                      {convertToKilometers(item.distanceKm)}Km
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
