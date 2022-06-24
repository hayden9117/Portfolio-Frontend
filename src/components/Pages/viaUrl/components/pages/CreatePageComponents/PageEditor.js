import { Box, Avatar, Stack, Container } from "@mui/material";
import AddAvatar from "./AddAvatar";
import { getPosition } from "./helperFunctions/getPosition";
import LinkList from "./LinkList";

export const PageEditor = (props) => {
  const { config, setConfig } = props;
  console.log(config);
  return (
    <Box bgcolor="gray" height={"300vh"} width={"300vw"}>
      <Box
        bgcolor={config.background}
        height={"80vh"}
        width={"50vw"}
        sx={{
          ml: "auto",
          mr: "auto",
          mt: "20%",

          position: "relative",
        }}
      >
        <Stack alignItems={"center"} spacing={5} direction={config.template}>
          {config.avatars === 1 ? (
            <AddAvatar config={config} setConfig={setConfig} />
          ) : null}
          {config.links.num > 0 ? (
            <LinkList config={config} setConfig={setConfig} />
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
};
