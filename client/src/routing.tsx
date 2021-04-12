import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import LandingPage from "./pages/LandingPage";


const routes = [
    {
        path: '/',
        element: <UnauthenticatedLayout/>,
        children: [
            { path: '/', element: <LandingPage/>}
        ]
    }

];


export default routes;