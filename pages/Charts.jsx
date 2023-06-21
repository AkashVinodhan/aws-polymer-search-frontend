import React, { useEffect, useState } from "react";
import { PieChart } from "../components/PieChart";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Charts = () => {
  const nav = useNavigate();

  const [chartData, setChartData] = useState([]);

  const fetchChartData = async () => {
    const res = await axios.get("https://polymer-search.onrender.com/charts");
    setChartData(res.data);
  };
  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          height: "70px",
          backgroundColor: "white",
          borderBottom: "1px solid grey",
        }}
      >
        <Stack
          height={"100%"}
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={5}
        >
          <img src="../public/aws logo.png" alt="aws" />
          <Button
            variant="contained"
            onClick={() => {
              nav("/repos");
            }}
          >
            Repositories
          </Button>
        </Stack>
      </Box>
      <Box sx={{ height: "100%", display: "grid", placeItems: "center" }}>
        <Box sx={{ height: "300px", display: "grid", placeItems: "center" }}>
          <Typography m={5}>
            Number of Repositories in each languages
          </Typography>
          <PieChart chartData={chartData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Charts;
