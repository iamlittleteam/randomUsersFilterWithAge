import React, { Fragment, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import axios from "axios";
import ProfileBox from "../../Components/ProfileBox";

function Landing() {
  const [users, setUsers] = useState([]);
  const [maxAge, setMaxAge] = useState(100);
  const [minAge, setMinAge] = useState(0);

  const handleChangeMaxAge = (event) => {
    setMaxAge(event.target.value);
  };

  const handleChangeMinAge = (event) => {
    setMinAge(event.target.value);
  };

  const filterUsers = users.filter((user) => {
    let filterPass = true;
    if (minAge) {
      filterPass = filterPass && user.dob.age >= minAge;
    }
    if (maxAge) {
      filterPass = filterPass && user.dob.age <= maxAge;
    }
    return filterPass;
  });

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=100`)
      .then((response) => setUsers(response.data.results));
  }, []);

  return (
    <Fragment>
      <Grid container style={styles.containerStyles}>
        <Typography style={{ margin: 20 }} variant="h5">
          Filter by age
        </Typography>
        <TextField
          id="outlined-basic"
          label="Minimum Age"
          type="number"
          variant="standard"
          style={{ margin: 20 }}
          onChange={handleChangeMinAge}
        />
        <Typography variant="h6">to</Typography>
        <TextField
          id="outlined-basic"
          label="Maximum Age"
          type="number"
          variant="standard"
          style={{ margin: 20 }}
          onChange={handleChangeMaxAge}
        />
      </Grid>
      <ProfileBox users={filterUsers} minAge={minAge} maxAge={maxAge} />
    </Fragment>
  );
}

export default Landing;

const styles = {
  containerStyles: {
    paddingTop: 20,
    marginBottom: 20,
    alignItems: "baseline",
    justifyContent: "center",
  },
};
