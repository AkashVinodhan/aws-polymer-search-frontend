import React, { useState } from "react";
import { Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();
  let initial = {
    username: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initial);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    axios
      .post("https://polymer-search.onrender.com/signup", data, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        nav("/repos");
      })
      .catch((err) => alert(err.response.data));
  };

  //styles
  const inputBox = {
    m: 1,
    input: { color: "black" },
    label: { color: "black" },
    width: "250px",
    "& :-webkit-autofill": {
      transitionDelay: "9999s",
    },
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        bgcolor: "white",
        color: "black",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Toolbar />
      <h3 sx={{ m: 1 }}>Signup</h3>
      <form>
        <TextField
          onChange={handleChange}
          sx={inputBox}
          label="Username"
          name="username"
          type="text"
          value={data.username}
          required
        />
        <br />
        <TextField
          onChange={handleChange}
          sx={inputBox}
          label="Email"
          name="email"
          type="text"
          value={data.email}
          required
        />
        <br />
        <TextField
          onChange={handleChange}
          label="Password"
          name="password"
          type="password"
          sx={inputBox}
          value={data.password}
          required
        />
        <br />

        <Button
          type="submit"
          variant="contained"
          sx={{ m: 1 }}
          onClick={(e) => handleSubmit(e, data)}
        >
          Signup
        </Button>
      </form>
      <Typography>
        Already have an account?{" "}
        <Link to="/" style={{ marginLeft: "10px", color: "#000" }}>
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default Signup;
