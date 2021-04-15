import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout";
import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import NumbersPage from "../pages/NumbersPage";
import UsersPage from "../pages/UsersPage";


const routes = [
    {
      path: '/app',
      element: <AuthenticatedLayout />,
      children: [
          { path: '/', element: <NumbersPage/>},
          { path: '/users', element: <UsersPage/>},
      ]
    },
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