import React, { lazy, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Footer from '../layouts/footer/Footer';
import Header from '../layouts/header/Header';
import { ReactComponent as ScrollTopIcon } from '../assets/icons/ScrollTopIcon.svg';
import Spinnet from '../components/loadings/Spinnet';
import { APP_ROUTER } from '../constants/constant';

function AppRouter() {
    const bodyRef: any = useRef(null);
    const Home = lazy(() => import('../pages/Home/Home'));
    const MyRecord = lazy(() => import('../pages/MyRecord/MyRecord'));
    const Challenge = lazy(() => import('../pages/Challenge/Challenge'));

    const handleScrollTop = () => {
        console.log({ window });

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 2);
    };

    return (
        <div className="main w-screen h-screen flex flex-col">
            <Router>
                <div className="flex-1 overflow-auto">
                    <Header />
                    <Suspense
                        fallback={
                            <div className="w-screen h-screen flex items-center justify-center">
                                <Spinnet />
                            </div>
                        }
                    >
                        <Switch>
                            <Route exact path={APP_ROUTER.HOME}>
                                <Home />
                            </Route>
                            <Route exact path={APP_ROUTER.MY_RECORD}>
                                <MyRecord />
                            </Route>
                            <Route exact path={APP_ROUTER.MY_CHALLENGE}>
                                <Challenge />
                            </Route>
                        </Switch>

                        <Footer />
                    </Suspense>
                </div>
                <div className="fixed right-[96px] bottom-[20%] cursor-pointer" onClick={handleScrollTop}>
                    <ScrollTopIcon />
                </div>
            </Router>
        </div>
    );
}

export default AppRouter;
