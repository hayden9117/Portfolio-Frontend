import { Box, Avatar, Stack, Container } from "@mui/material";
import AddAvatar from "./CreatePageComponents/AddAvatar";
import LinkList from "./CreatePageComponents/LinkList";
import RenderAvatar from "./RenderPageComponents/RenderAvatar";
import RenderLinkList from "./RenderPageComponents/RenderLinkList";

export default function RenderPage(props) {
  const { config } = props;
  return (
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
        {config.avatars === 1 ? <RenderAvatar config={config} /> : null}
        {config.links.num > 0 ? <RenderLinkList config={config} /> : null}
      </Stack>
    </Box>
  );
}
