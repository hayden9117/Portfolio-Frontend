import { Box, Button } from "@mui/material";
import ViaLogin from "../login/ViaLogIn";
import useToken from "../UseToken";
import CreatePageNav from "./CreatePageComponents/CreatePageNav";
import { PageEditor } from "./CreatePageComponents/PageEditor";
import UseConfig from "./CreatePageComponents/pageConfig";
function CreatePage() {
  const { token, setToken } = useToken();

  console.log(token.token);

  return (
    <Box>
      <CreatePageNav />
      <PageEditor />
    </Box>
  );
}

export default CreatePage;
