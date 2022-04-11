import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import usePaginationList from "../PaginationList";
import ProfileModal from "../ProfileModal";

function ProfileBox({ users }) {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [modalUser, setModalUser] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const totalUser = 12;

  const count = Math.ceil(users.length / totalUser);
  const pageChange = usePaginationList(users, totalUser);

  const handleChange = (e, p) => {
    setPage(p);
    pageChange.jump(p);
  };

  return (
    <Fragment>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pageChange.currentData().map((user, index) => {
          const firstName = user.name.first;
          const lastName = user.name.last;
          const age = user.dob.age;
          const image = user.picture.large;
          return (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Card
                onClick={() => {
                  setModalUser(user);
                  handleOpen();
                }}
              >
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
              </Card>
            </Grid>
          );
        })}
        <ProfileModal user={modalUser} open={open} handleClose={handleClose} />
      </Grid>
      <Stack
        style={{
          marginTop: 40,
          alignItems: "center",
        }}
        spacing={2}
      >
        <Pagination count={count} page={page} onChange={handleChange} />
      </Stack>
    </Fragment>
  );
}

export default ProfileBox;
