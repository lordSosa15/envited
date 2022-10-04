import React from "react";
import UrlBar from "../components/URLbar/Urlbar";
import images from "../constants/images";
// import { GoCalendar, GoLocation } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const Event = () => {
  return (
    <div className="App__event-content">
      <img src={images.event} alt="" />
      <div className="app__wrapper_info">
        <h1>Birthday Bash</h1>
        <p>
          Hosted by <span style={{ fontWeight: "bold" }}> Elysia </span>
          {/* <button className="custom__button"> 🤝 Invite</button> */}
        </p>
        {/* <button className="custom__button"> 🤝 Invite</button> */}
        <div>
          <img
            src={images.calendar}
            alt="calendar icon"
            className="app__event-icon"
          />
        </div>
        <h1 style={{ fontSize: "16px", lineHeight: "18px" }}>
          18 August 6:00PM
        </h1>
        <h2 style={{ fontSize:"14px" }}>
          to <span style={{ fontWeight: "bold" }}>19 August 1:00PM</span> UTC
          +10
        </h2>{" "}
        <IoIosArrowForward />
        <br />
        <div>
          <img src={images.locationIcon} alt="" className="app__event-icon" />
        </div>
        <h1 style={{ fontSize: "16px", lineHeight: "18px", flex: "none" }}>
          Street name
        </h1>
        <h2 style={{ fontSize:"14px" }}>Suburb, State, Postcode</h2> <IoIosArrowForward />
      </div>
      <UrlBar />
    </div>
  );
};

export default Event;
