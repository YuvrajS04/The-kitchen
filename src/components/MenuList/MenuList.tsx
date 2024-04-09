import React from "react";
import { RootState } from "../../redux/store";
import { MenuItem, addItem, removeItem } from '../../redux/menuSlice'
import { useSelector, useDispatch } from "react-redux";

const MenuList: React.FC = () => {
    const menuItems = useSelector((state: RootState) => state.menu.items);
    const dispatch = useDispatch();
    const handleAddItem = (id: number) => {
        dispatch(addItem({ id, quantity: 1 }));
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <div className="MenuList">
            {menuItems.map((item: MenuItem) => (
                <>
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>Price: ${item.price.toFixed(2)}</div>
                    <div>Quantity: {item.quantity}</div>
                    <button onClick={() => handleAddItem(item.id)}>Add</button>
                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
                
                </>
            )) 
            }
        </div>
    )
};

export default MenuList;