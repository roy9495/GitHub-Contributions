import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "./ContributionCard.css";

const ContributionCard = ({ title, repo, date, url }) => {
  return (
    <Card className="contribution-card">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Repo: {repo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {date}
        </Typography>
        <Button href={url} target="_blank" variant="contained" sx={{ mt: 1 }}>
          View Issue
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContributionCard;
