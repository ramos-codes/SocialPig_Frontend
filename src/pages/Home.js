import React, { useEffect, useState } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Scream from "../components/Scream";

const Home = () => {
  const [screams, setScreams] = useState(null);

  const fetchScreams = () => {
    axios
      .get("/screams")
      .then(res => {
        setScreams(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchScreams();
  }, []);

  let recentScreamsMarkup = screams ? (
    screams.map(scream => <Scream scream={scream} key={scream.screamId} />)
  ) : (
    <p>Loading...</p>
  );

  return (
    <Grid container spacing={5}>
      <Grid item sm={8} xs={12}>
        {recentScreamsMarkup}
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>Profile...</p>
      </Grid>
    </Grid>
  );
};

export default Home;
