import { ThemeProvider } from "@mui/styles";
import { Box } from "@mui/system";
import ViaHome from "./components/ViaHome";
import { ViaTheme } from "./theme/ViaTheme";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./components/pages/CreatePage";
import useConfig from "./components/pages/CreatePageComponents/UseConfig";
import useViaToken from "./components/UseViaToken";
import RenderPage from "./components/pages/RenderPage";
import { createPage } from "./api";
function ViaURL() {
  const { token } = useViaToken();
  const { config } = useConfig();

  return (
    <Box>
      <Routes>
        <Route path={`/`} element={<ViaHome />} />
        <Route
          path={`/create`}
          element={<CreatePage token={token} edit={true} />}
        />
        {!token ? null : (
          <Route
            path={`/${token.username}`}
            element={<RenderPage config={config} />}
          />
        )}
      </Routes>
    </Box>
  );
}
export default ViaURL;
