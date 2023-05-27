import { Container, SunIcon, MoonIcon } from "./styles";
import { ThemeName } from "../../styles/themes";
import { Link } from "react-router-dom";

interface Props {
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

export const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
    function toggleTheme() {
        setThemeName(themeName === "dark" ? "light" : "dark");
    }

    return (
        <Container>
            <Link to="https://github.com/Chaicoo/px-to-rem">Px to REM</Link>
            {themeName === "light" ? (
                <MoonIcon onClick={toggleTheme} />
            ) : (
                <SunIcon onClick={toggleTheme} />
            )}
        </Container>
    );
};
