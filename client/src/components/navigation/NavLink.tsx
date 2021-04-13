import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export interface AppLinkProps {
    to: string;
    text: string;
}

const AppLink = ({to, text}: AppLinkProps) => {
    return (
        <Link to={to}><Button>{text}</Button></Link>
    )
}

export default AppLink;

