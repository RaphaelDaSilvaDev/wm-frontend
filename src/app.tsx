import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Routes } from "./routes";
import { CookiesProvider } from "react-cookie";
import { AuthUserProvider } from "./services/authUserContext";
import { Toaster } from "react-hot-toast";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CookiesProvider>
        <AuthUserProvider>
          <Routes />
          <Toaster />
        </AuthUserProvider>
      </CookiesProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
