import { Container, SunIcon, MoonIcon } from "./styles";
import { ThemeName } from "../../styles/themes";

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
            {themeName === "light" ? (
                <SunIcon onClick={toggleTheme} />
            ) : (
                <MoonIcon onClick={toggleTheme} />
            )}
            <span className="tittle">Header</span>
        </Container>
    );
};
