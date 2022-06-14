import {
  Box,
  Avatar,
  Stack,
  ButtonBase,
  Typography,
  Container,
} from "@mui/material";
import useContext from "react";

export const PageEditor = () => {
  const linkData = [
    { link: "https://mui.com/material-ui/api/avatar/" },
    { link: "https://mui.com/material-ui/api/avatar/" },
    { link: "https://mui.com/material-ui/api/avatar/" },
    { link: "https://mui.com/material-ui/api/avatar/" },
  ];
  return (
    <Container maxWidth="m" disableGutters={true}>
      <Box
        bgcolor="gray"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={"150vh"}
        width={"150vw"}
      >
        <Box bgcolor="white" height={"80vh"} width={"50%"} sx={{ mt: 15 }}>
          <Box sx={{ mt: 5 }}>
            <Stack spacing={5} alignItems="center">
              <Avatar
                variant="circular"
                sx={{
                  height: 150,
                  width: 150,

                  " @media screen and (min-width: 650px)": {
                    float: "left",
                    padding: "10px 10px 0px 20px",
                  },
                  " @media screen and (max-width: 650px)": {
                    ml: "auto",
                    mr: "auto",
                    padding: "10px 10px 10px 10px",
                  },
                  padding: "0 20px 20px 0",
                }}
              />

              {linkData.map((link) => (
                <Box
                  sx={{
                    padding: 2,
                  }}
                >
                  <ButtonBase>
                    <Typography variant="h6" color="#3F3D3D" key={link.link}>
                      {link.link}
                    </Typography>
                  </ButtonBase>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
