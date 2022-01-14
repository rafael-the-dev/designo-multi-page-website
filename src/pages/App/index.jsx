import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import loadable from '@loadable/component';

const App = () => {
    const theme = createTheme();

    const Header = loadable(() => import('../../components/Header'));
    const Footer = loadable(() => import('../../components/Footer'));
    const Banner = loadable(() => import('../../components/Banner'));
    const Home = loadable(() => import('../Home'));
    const Services = loadable(() => import('../Services'));

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppContextProvider>
                        <Router>
                            <Header />
                            <Routes>
                                <Route exact path="/services/:id" element={<Services />} />
                                <Route exact path="/" element={<Home />} />
                            </Routes>
                            <Banner />
                            <Footer />
                        </Router>
                    </AppContextProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;