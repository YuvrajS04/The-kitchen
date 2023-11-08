import React from "react";
import { useSelector } from "react-redux";

function MenuItems() {
    const menuItems = useSelector((state: any) => state.menu.items);

    return (
        <div>
            {menuItems.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    )
    
}

export default MenuItems;