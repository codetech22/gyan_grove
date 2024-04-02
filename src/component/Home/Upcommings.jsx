import React, { useState, useEffect } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import axios from "axios";
import { TiLocation } from "react-icons/ti";

const Upcommings = () => {
  const [events, setEvents] = useState([]);
  const [fileIds, setFileIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    fetchEvents();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    setLoading(false);
  }, [events]);

  const fetchEvents = () => {
    setLoading(true);
    axios
      .get(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
      )
      .then((response) => {
        if (response.data.events.length === 0) {
          setReachedEnd(true);
        } else {
          setEvents(response.data.events);
          const ids = response.data.events.map((item) =>
            extractFileId(item.imgUrl)
          );
          setFileIds(ids);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading &&
      !reachedEnd
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };
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
      <div>
        <div className="flex justify-between my-5">
          <div>
            <span className="flex gap-2 mx-10 cursor-pointer lg:text-[17px] text-[0.7em] font-bold">
              Upcoming events <CgArrowLongRight className="m-1" />
            </span>
          </div>
          <div className="underline cursor-pointer lg:text-[17px] text-[0.7em] font-bold">
            Sell all
          </div>
        </div>
        <div
          className="overflow-y-scroll scroll scroll-smooth mt-1 h-96 flex flex-wrap gap-12 w-11/12 max-[480px]:mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((item, index) => (
            <div key={index}>
              <div className="border rounded-lg ml-10">
                <div className="relative">
                  <img
                    src={`https://drive.google.com/thumbnail?id=${fileIds[index]}&sz=w1000`}
                    alt={`event${index}`}
                    className="w-72"
                  />
                  <div className="absolute bottom-3 flex  text-center text-white bg-black bg-opacity-70 rounded-b-lg w-11/12 left-3 lg:text-[17px] text-[0.7rem]">
                    <p className="text-white text-opacity-85 ml-4">
                      {formatDate(item.date)}
                    </p>
                  </div>
                </div>
                <div className="ps-3 text-sm">
                  <div className="font-bold lg:text-lg text-[1rem]">
                    {reduceEventName(item.eventName)}
                  </div>
                  <div className="flex justify-between font-semibold text-[#989090] p-3">
                    <div className="flex lg:text-[12px] text-[0.7rem]">
                      <div>
                        <TiLocation className="h-5 w-5" />
                      </div>{" "}
                      <div>{item.cityName}</div>
                    </div>
                    <div className="flex gap-1 lg:text-[12px] text-[0.6rem]">
                      <div>{item.weather}</div>|
                      <div className="pe-2">
                        {convertToKilometers(item.distanceKm)} Km
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {loading && <div>Loading...</div>}
          {reachedEnd && <div>No more events</div>}
        </div>
        <div className="mt-4 flex justify-center max-[480px]:mx-0">
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`mx-1 px-3 py-1 bg-gray-200 rounded ${
                page === pageNumber ? "bg-gray-500" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcommings;
