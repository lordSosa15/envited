import React from "react";
import UrlBar from "../components/URLbar/Urlbar";
import images from "../constants/images";
import { GoCalendar, GoLocation } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const Event = () => {
  return (
    <div className="App__event-content">
      <img src={images.event} alt="" />
      <h3>Birthday Bash</h3>
      <p>Hosted by Elysia</p>
      <GoCalendar />
      <h3>18 August 6:00PM</h3>
      <p>to 19 August 1:00PM UTC +10</p> <IoIosArrowForward />
      <br />
      <GoLocation />
      <h3>Street name</h3>
      <p>Suburb, State, Postcode</p> <IoIosArrowForward />
      <UrlBar />
    </div>
  );
};

export default Event;
