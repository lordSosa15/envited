import React from "react";
import { Input, InputLabel } from "@mui/material";
import { Link } from "react-router-dom";

const CreateForm = () => {
  return (
    <div>
      <form>
        <InputLabel>
          {" "}
          Event name:
          <Input type="text" />
        </InputLabel>

        <br />
        <InputLabel>
          {" "}
          Start and End
          <Input type="date" />
        </InputLabel>
        <br />
        <InputLabel>
          {" "}
          Host name:
          <Input type="text" />
        </InputLabel>
        <br />
        <InputLabel>
          Location
          <Input> </Input>
        </InputLabel>
        <br />
        <InputLabel>
          Event photo
          <Input type="file"></Input>
        </InputLabel>
        <Link to="/Event">
          <button className="custom__button">NEXT</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateForm;
