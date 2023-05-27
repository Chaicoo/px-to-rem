import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlogalStyles from "./styles/GlobalStyles";
import { Header, Footer } from "./components";
import { Home, About } from "./pages";
import { ThemeName, themes } from "./styles/themes";

function App() {
    const [themeName, setThemeName] = useState<ThemeName>("light");
    const currentTheme = themes[themeName];

    return (
        <ThemeProvider theme={currentTheme}>
            <BrowserRouter>
                <Header themeName={themeName} setThemeName={setThemeName} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
                <Footer />
                <GlogalStyles />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
