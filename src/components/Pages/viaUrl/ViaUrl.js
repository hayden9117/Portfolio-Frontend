import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Box } from "@mui/system";
import ViaHome from "./components/ViaHome";
import { ViaTheme } from "./theme/ViaTheme";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./components/pages/CreatePage";

function ViaURL() {
  return (
    <Box>
      <ThemeProvider theme={ViaTheme}>
        <Routes>
          <Route path={`/`} element={<ViaHome />} />
          <Route path={`/create`} element={<CreatePage />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}
export default ViaURL;
