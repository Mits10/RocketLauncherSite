import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";

const upComingOptions = ["True", "False"];

const UpcomingFilter = ({ onSort }) => {
  const [upComingOption] = useState("");
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">UpComing Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={upComingOption}
        label="upcoming"
        onChange={(e) => onSort("upcomingStatus", e.target.value)}
      >
        {upComingOptions.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UpcomingFilter;
