import React from "react";
import { Input, InputLabel } from "@mui/material";
import { Link } from "react-router-dom";

const CreateForm = () => {
  return (
    <div>
    <br />
    <h1>Enter event info here</h1>
    <br />
      <form>
        <InputLabel>
          Event name:
          <br />
          <Input type="text" />
        </InputLabel>

        <br />
        <InputLabel>
          Start <br />
          <Input type="date" />
        </InputLabel>
        <br />
        <InputLabel>
        End: <br />
          <Input type="date"/>
        </InputLabel>
        <br />
        <InputLabel>
          Host name:
          <br />
          <Input type="text" />
        </InputLabel>
        <br />
        <InputLabel>
          Location <br />
          <Input type="text"> </Input>
        </InputLabel>
        <br />
        <InputLabel htmlFor="fileInput" >
          Event photo <br />
          <Input type="file" ></Input>
        </InputLabel>
        <Link to="/Event">
          <button className="custom__button">NEXT</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateForm;
