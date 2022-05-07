import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
const launchStatusOptions = [
    "True",
    "False",
  ];
  const LaunchStatusFilter = ({ onSort }) => {
    const [launchStatusOption] = useState("");
    return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Launch Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={launchStatusOption}
          label="launchStatus"
          onChange={(e) => onSort("launchStatus", e.target.value)}
        >
          {launchStatusOptions.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };
  
  export default LaunchStatusFilter;