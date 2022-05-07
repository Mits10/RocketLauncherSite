import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
const launchDateOptions = [
    "Last Weak",
    "Last Month",
    "Last Year",
  ];
  const LaunchDateFilter = ({ onSort }) => {
    const [launchDateOption] = useState("");
    return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Launch Date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={launchDateOption}
          label="launchDate"
          onChange={(e) => onSort("launchDate", e.target.value)}
        >
          {launchDateOptions.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };
  
  export default LaunchDateFilter;