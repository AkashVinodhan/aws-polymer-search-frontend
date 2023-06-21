import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import IosShareIcon from "@mui/icons-material/IosShare";
import LogoutIcon from "@mui/icons-material/Logout";

import RepoModal from "../components/RepoModal";

const Repos = () => {
  const nav = useNavigate();
  const [repos, setRepos] = useState([]);
  const [filterdRepos, setFilteredRepos] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(repos[0]);
  const handleClose = () => setOpen(false);

  const fetchdata = async () => {
    const res = await axios.get("https://polymer-search.onrender.com/repos");
    setRepos(res.data);
    setFilteredRepos(res.data);
  };

  const handleLogout = () => {
    axios
      .get("https://polymer-search.onrender.com/logout", {
        withCredentials: true,
      })
      .then((res) => {
        nav("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  //handle search
  const handleSearch = (e) => {
    let temp = repos.filter(({ name, description }) =>
      name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRepos(temp);
  };

  return (
    <div>
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
          <img src="../aws logo.png" alt="aws" />
          <Typography variant="h5">Everything AWS</Typography>
          <Box>
            <Button
              sx={{ marginRight: "10px" }}
              variant="contained"
              onClick={() => {
                nav("/charts");
              }}
            >
              Charts
            </Button>
            <Button
              variant="contained"
              onClick={handleLogout}
              endIcon={<LogoutIcon />}
            >
              Logout
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box margin={2}>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          onChange={handleSearch}
          sx={{ marginBottom: "15px", width: "200px" }}
        />
        <Grid container spacing={2}>
          {filterdRepos.map((repo) => (
            <Grid key={repo._id} item xs={6} lg={4}>
              <Paper
                onClick={() => {
                  setOpen(true);
                  setModalData(repo);
                }}
                variant="outlined"
                sx={{ height: "300px", padding: "20px", cursor: "pointer" }}
              >
                <Box>
                  <Typography variant="subtitle1">{repo.name}</Typography>
                  <Typography variant="caption" color={"GrayText"}>
                    {repo.description}
                  </Typography>
                  <Link
                    href={repo.html_url}
                    display={"block"}
                    target="_blank"
                    sx={{ mt: "25px", mb: "10px" }}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      color="inherit"
                      endIcon={<IosShareIcon />}
                      sx={{ color: "black" }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Github
                    </Button>
                  </Link>
                  <hr />
                  <Box mt={3}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="caption" color={"GrayText"}>
                        Contributors Url :
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          width: "50%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Link
                          href={repo.contributors_url}
                          target="_blank"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          {repo.contributors_url}
                        </Link>
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="caption" color={"GrayText"}>
                        Languages Url :
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          width: "50%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Link
                          href={repo.languages_url}
                          target="_blank"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          {repo.languages_url}
                        </Link>
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography variant="caption" color={"GrayText"}>
                        Followers Url :
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          width: "50%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Link
                          href={repo.followers_url}
                          target="_blank"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          {repo.owner.followers_url}
                        </Link>
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}

          {modalData && (
            <RepoModal
              open={open}
              modalData={modalData}
              handleClose={handleClose}
            />
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Repos;
