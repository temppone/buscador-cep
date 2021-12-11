import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import useThemeMode from './hooks/useThemeMode';
import routes from './routes';
import { GlobalStyle } from './shared/global';
import { darkTheme, lightTheme } from './shared/theme';
import { ReactComponent as LogoDarkSvg } from './ui/assets/svgs/logoDark.svg';
import { ReactComponent as LogoLightSvg } from './ui/assets/svgs/logoLight.svg';
import Footer from './ui/components/Footer';
import Header from './ui/components/Header';
import Loading from './ui/components/Loading';

const NotFound = lazy(() => import('./pages/NotFound'));

const App = (): JSX.Element => {
    const { themeName, themeToggler } = useThemeMode();
    const themeMode = themeName === 'light' ? lightTheme : darkTheme;
    const logo =
        themeName === 'light' ? (
            <LogoDarkSvg height="50" width="50" />
        ) : (
            <LogoLightSvg height="50" width="50" />
        );

    return (
        <div className="App">
            <ThemeProvider theme={themeMode}>
                <GlobalStyle />
                <Toaster />
                <Router>
                    <Header logo={logo} onClick={themeToggler} />
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            {routes.map((route) => (
                                <Route
                                    element={route.element}
                                    key={route.path}
                                    path={route.path}
                                />
                            ))}
                            <Route element={<NotFound />} path="*" />
                        </Routes>
                    </Suspense>

                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
