import {
  Box,
  IconButton,
  Link,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";

const RepoModal = ({ open, modalData, handleClose }) => {
  const created = new Date(modalData.created_at);
  const updated = new Date(modalData.updated_at);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiBackdrop-root": { backgroundColor: "white" },
      }}
    >
      <Box
        sx={{
          border: "2px solid grey",
          margin: 5,
          height: "75%",
          backgroundColor: "lightgray",
        }}
      >
        <Typography
          variant="h5"
          id="modal-modal-description"
          sx={{
            m: 2,
            position: "relative",
            textAlign: "center",
          }}
        >
          {modalData.name}
        </Typography>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: "5px", top: "5px" }}
        >
          <CloseIcon
            sx={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "5px",
            }}
          />
        </IconButton>
        <Stack direction={"column"} height={"100%"} m={3} gap={2}>
          <Paper sx={{ padding: "10px" }}>
            <Typography variant="h6">Popularity</Typography>
            <Stack direction={"row"} justifyContent={"space-evenly"}>
              <Typography variant="body2" color={"GrayText"}>
                Stars: {modalData.stargazers_count}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Forks: {modalData.forks}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Watchers: {modalData.watchers}
              </Typography>
            </Stack>
          </Paper>
          <Paper sx={{ padding: "10px" }}>
            <Typography variant="h6">Stats</Typography>
            <Stack direction={"row"} justifyContent={"space-evenly"}>
              <Typography variant="body2" color={"GrayText"}>
                Open Issues: {modalData.open_issues_count}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Created At: {created.toISOString().substring(0, 10)}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Updated At: {updated.toISOString().substring(0, 10)}
              </Typography>
            </Stack>
          </Paper>
          <Paper sx={{ padding: "10px" }}>
            <Typography variant="h6">Advanced Details</Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-evenly"}
              flexWrap={"wrap"}
              gap={2}
            >
              <Typography variant="body2" color={"GrayText"}>
                Owner Type: {modalData.owner.type}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Is Fork: {modalData.fork.toString()}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Language: {modalData.language}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Owner Id: {modalData.owner.id}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Node Id: {modalData.node_id}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Owner: {modalData.owner.login}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Contributors Url:{" "}
                <a href={modalData.contributors_url}>
                  {modalData.contributors_url}
                </a>
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Languages Url:{" "}
                <a href={modalData.languages_url}>{modalData.languages_url}</a>
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                Description: {modalData.description}
              </Typography>
              <Typography variant="body2" color={"GrayText"}>
                License: {modalData.license?.name}
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Modal>
  );
};

export default RepoModal;
