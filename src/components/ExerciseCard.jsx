import React from "react";
import { Link } from "react-router-dom";

import { Stack, Button, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            fontSize: "12px",
            background: "#ffa9a9",
            borderRadius: "30px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            fontSize: "12px",
            background: "#fcc757",
            borderRadius: "30px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          mt="11px"
          pb="10px"
          textTransform="capitalize"
          fontSize="20px"
        >
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
