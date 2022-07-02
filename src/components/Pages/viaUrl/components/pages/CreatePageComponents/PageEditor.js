import { Box, Avatar, Stack, Container } from "@mui/material";
import AddAvatar from "./AddAvatar";
import { getPosition } from "./helperFunctions/getPosition";
import LinkList from "./LinkList";

export const PageEditor = (props) => {
  const { config, setConfig, pageColor } = props;

  return (
    <Box bgcolor="gray" height={"300vh"} width={"300vw"}>
      <Box
        bgcolor={pageColor.color}
        sx={{
          minHeight: "80vh",
          minWidth: "50vw",
          maxHeight: "80vh",
          maxWidth: "50vw",
          ml: "auto",
          mr: "auto",
          mt: "20%",
          overflow: "auto",
          position: "relative",
          ...(config.template === "row" && { alignItems: "center" }),
        }}
      >
        <Box height={"80vh"} width={"50vw"}>
          <Box sx={{ display: "contents" }}>
            <Stack
              sx={{
                alignItems: "center",
              }}
              spacing={5}
              direction={config.template}
            >
              {config.avatars === 1 ? (
                <AddAvatar config={config} setConfig={setConfig} />
              ) : null}
              {config.links.num > 0 ? (
                <LinkList config={config} setConfig={setConfig} />
              ) : null}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
