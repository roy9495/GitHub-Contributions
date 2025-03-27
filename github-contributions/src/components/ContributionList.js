import React, { useEffect, useState } from "react";
import { fetchContributions } from "../api/githubService";
import ContributionCard from "./ContributionCard";
import { Container, CircularProgress, Typography, Grid } from "@mui/material";

const ContributionList = () => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContributions().then((data) => {
      console.log("Fetched Contributions:", data); // Log the fetched contributions
      setContributions(data);
      setLoading(false);
    });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My GitHub Contributions
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : contributions.length > 0 ? (
        <Grid container spacing={3}>
          {contributions.map((contribution) => (
            <Grid item xs={12} sm={6} key={contribution.id}>
              <ContributionCard {...contribution} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No contributions found or an error occurred.
        </Typography>
      )}
    </Container>
  );
};

export default ContributionList;
