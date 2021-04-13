import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";


const routes = [
    {
        path: '/',
        element: <UnauthenticatedLayout/>,
        children: [
            { path: '/', element: <LandingPage/>},
            { path: '/signup', element: <SignupPage/>},
            { path: '/login', element: <LoginPage/>},
        ]
    }

];


export default routes;