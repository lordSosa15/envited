import React from "react";
import { Input, InputLabel } from "@mui/material";

const CreateForm = () => {
  return (
    <div>
      <form>
        <InputLabel>
          {" "}
          type of event
          <Input type="text" />
        </InputLabel>
        <br />
        <InputLabel>
          {" "}
          when?
          <Input type="date" />
        </InputLabel>
        <br />
        <InputLabel>
          {" "}
          Hosted by:
          <Input type="text" />
        </InputLabel>
        <br />
        <InputLabel>
          Street name
          <Input> </Input>
        </InputLabel>
        <br />
        <InputLabel>
        Suburb, State and Postcode
            <Input></Input>
        </InputLabel>
        <button type="button" className="custom__button">
          NEXT
        </button>
      </form>
    </div>
  );
};

export default CreateForm;