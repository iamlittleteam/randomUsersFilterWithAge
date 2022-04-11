import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ProfileModal({ user, open, handleClose }) {
  if (user == null) {
    return <></>;
  }

  const firstName = user.name.first;
  const lastName = user.name.last;
  const age = user.dob.age;
  const image = user.picture.large;

  return (
    <Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            image={image}
            alt={`${firstName}_${lastName}`}
          />
          <CardContent>
            <Typography variant="subtitle2" sx={{ fontSize: 18 }}>
              {firstName} {lastName}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: 18 }}>
              {age}
            </Typography>
          </CardContent>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default ProfileModal;
