import {
  Box,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [toggle, setToggle] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  console.log({ services });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(event.target.checked);
  };

  const servicesHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const service = services.indexOf(event.target.value);

    if (service === -1) {
      setServices([...services, event.target.value]);
    } else {
      setServices(services.filter((serv) => serv !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch
              checked={toggle}
              size="small"
              color="secondary"
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <FormGroup>
          <FormLabel>Hostel Services</FormLabel>
          <FormControlLabel
            label="Cleaning"
            control={
              <Switch
                value="cleaning"
                checked={services.includes("cleaning")}
                onChange={servicesHandler}
              />
            }
          />
          <FormControlLabel
            label="Laundary"
            value="laundary"
            control={
              <Switch
                checked={services.includes("laundary")}
                onChange={servicesHandler}
              />
            }
          />
          <FormControlLabel
            label="Residence"
            value="residence"
            control={
              <Switch
                checked={services.includes("residence")}
                onChange={servicesHandler}
              />
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default MuiSwitch;
