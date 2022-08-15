import Stopwatch from './components/Stopwatch/Stopwatch';
import GlobalFonts from './fonts/fonts';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalFonts />
            <Stopwatch />
        </ThemeProvider>
    );
};

export default App;
