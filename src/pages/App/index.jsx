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
    const HomePage = loadable(() => import('../Home'));
    const LocationsPage = loadable(() => import('../Locations'));
    const AboutPage = loadable(() => import('../About'));
    const ContactPage = loadable(() => import('../Contact'));
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
                                <Route exact path="/locations" element={<LocationsPage />} />
                                <Route exact path="/about-us" element={<AboutPage />} />
                                <Route exact path="/contact" element={<ContactPage />} />
                                <Route exact path="/" element={<HomePage />} />
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