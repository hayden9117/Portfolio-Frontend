import { Box, Button, Container } from "@mui/material";
import ViaLogin from "../login/ViaLogIn";
import useToken from "../UseToken";
import CreatePageNav from "./CreatePageComponents/CreatePageNav";
import { PageEditor } from "./CreatePageComponents/PageEditor";
import useConfig from "./CreatePageComponents/UseConfig";
function CreatePage() {
  const { token, setToken } = useToken();
  const { config, setConfig } = useConfig();
  console.log(token.token);

  return (
    <Box>
      <CreatePageNav config={config} setConfig={setConfig} />
      <Container
        id="page"
        sx={{
          bgcolor: "gray",
          display: "flex",
        }}
        maxWidth="m"
        disableGutters={true}
      >
        <PageEditor config={config} setConfig={setConfig} />
      </Container>
    </Box>
  );
}

export default CreatePage;
