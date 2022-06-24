import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Box } from "@mui/system";
import ViaHome from "./components/ViaHome";
import { ViaTheme } from "./theme/ViaTheme";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./components/pages/CreatePage";
import useConfig from "./components/pages/CreatePageComponents/UseConfig";
import useToken from "./components/UseToken";
import RenderPage from "./components/pages/RenderPage";
function ViaURL() {
  const { token, setToken } = useToken();
  const { config, setConfig } = useConfig();
  return (
    <Box>
      <ThemeProvider theme={ViaTheme}>
        <Routes>
          <Route path={`/`} element={<ViaHome />} />
          <Route path={`/create`} element={<CreatePage edit={true} />} />
          <Route
            path={`/${token.username}`}
            element={<RenderPage config={config} />}
          />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}
export default ViaURL;
