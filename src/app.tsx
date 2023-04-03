import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/globalStyle";
import { Routes } from "./routes";
import { CookiesProvider } from "react-cookie";
import { AuthUserProvider } from "./services/authUserContext";
import { Toaster } from "react-hot-toast";

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
