import MenuList from "../components/MenuList/MenuList";
import {Link} from "react-router-dom"

function LandingPage() {

    return (
        <>
            <MenuList />
            <Link to="/checkout"> Checkout</Link>
        </>
    )
}

export default LandingPage;