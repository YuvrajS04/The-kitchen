import { RootState } from "../redux/store";
import MenuList from "../components/MenuList/MenuList";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

function LandingPage() {
    const menuItems = useSelector((state : RootState) => state.items)
    const hasItemsToCheckout = menuItems.some((item) => item.quantity > 0);
    return (
        <>
            <MenuList />
            {hasItemsToCheckout && <Link to="/checkout"> Checkout</Link>
            }
        </>
    )
}

export default LandingPage;