import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useThemeMode from './hooks/useThemeMode';
import { GlobalStyle } from './shared/global';
import { darkTheme, lightTheme } from './shared/theme';
import { ReactComponent as LogoDarkSvg } from './ui/assets/svgs/logoDark.svg';
import { ReactComponent as LogoLightSvg } from './ui/assets/svgs/logoLight.svg';
import Footer from './ui/components/Footer';
import Header from './ui/components/Header';
import Loading from './ui/components/Loading';

const SearchAddress = lazy(() => import('./pages/SearchAddress'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Address = lazy(() => import('./pages/Address'));
const Home = lazy(() => import('./pages/Home'));

const App = (): JSX.Element => {
    const { themeName, themeToggler } = useThemeMode();
    const themeMode = themeName === 'light' ? lightTheme : darkTheme;
    const logo =
        themeName === 'light' ? (
            <LogoDarkSvg width="50" height="50" />
        ) : (
            <LogoLightSvg width="50" height="50" />
        );

    return (
        <div className="App">
            <ThemeProvider theme={themeMode}>
                <GlobalStyle />
                <Router>
                    <Header logo={logo} onClick={themeToggler} />
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<NotFound />} />
                            <Route path="/address" element={<Address />} />
                            <Route
                                path="/buscar-endereco"
                                element={<SearchAddress />}
                            />
                        </Routes>
                    </Suspense>

                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
