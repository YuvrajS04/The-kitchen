import { RootState } from "../redux/store";
import { addItem, removeItem } from "../redux/menuSlice"
import { useSelector, useDispatch } from "react-redux"

function Checkout(){
    const menuItems = useSelector((state: RootState) => state.items);
    let filterMenuItems = menuItems.filter((item) => item.quantity > 0)
    const calculateTotalPrice = () => { 
        const totalPrice = filterMenuItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        return totalPrice.toLocaleString('en-CA', {style: 'currency', currency: 'CAD'});
    };
    const dispatch = useDispatch();
    const handleAddItem = (id: number ) => {dispatch(addItem({ id, quantity: 1 }))};
    const handleRemoveItem = (id: number) => {dispatch(removeItem(id))};
    return (
        <>
        <div>
            <p>
                Checkout Page
            </p>
            <div>{filterMenuItems.map((item) =>
            <div key={item.id} >
                <h3>{item.name}</h3>
                <p>{item.quantity}</p>
                <button onClick={()=> handleAddItem(item.id)} >AddItem</button>
                <button onClick={()=> handleRemoveItem(item.id)} >RemoveItem</button>
                <p>{item.price}</p>
            </div>)}
            <h4>Total Price: {calculateTotalPrice()}</h4>
            </div>
        </div>
        </>
    );
}

export default Checkout;