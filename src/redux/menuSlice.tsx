import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

const initialState: { items: MenuItem[] } = {
    items: [{
        "id": 1,
        "name": "Classic Cheeseburger",
        "description": "A mouthwatering classic cheeseburger featuring a juicy beef patty, melted cheddar cheese, crisp lettuce, ripe tomatoes, onions, and our secret special sauce, all served on a toasted sesame seed bun.",
        "price": 10.99,
        "quantity": 0
    },
    {
        "id": 2,
        "name": "Spaghetti Carbonara",
        "description": "Authentic Italian spaghetti carbonara made with al dente pasta, creamy egg-based sauce, crispy bacon, freshly ground black pepper, and grated Parmesan cheese.",
        "price": 12.99,
        "quantity": 0
    },
    {
        "id": 3,
        "name": "Caesar Salad",
        "description": "A classic Caesar salad with crisp romaine lettuce, croutons, and Caesar dressing.",
        "price": 8.99,
        "quantity": 0
    },
    {
        "id": 4,
        "name": "Margherita Pizza",
        "description": "A traditional Margherita pizza with tomato sauce, mozzarella cheese, and fresh basil leaves.",
        "price": 11.99,
        "quantity": 0
    },
    {
        "id": 5,
        "name": "Chicken Alfredo",
        "description": "Creamy chicken Alfredo pasta with tender pieces of chicken and fettuccine noodles.",
        "price": 14.99,
        "quantity": 0
    },
    {
        "id": 6,
        "name": "Vegetable Stir-Fry",
        "description": "A flavorful vegetable stir-fry with broccoli, bell peppers, carrots, and tofu in a savory sauce.",
        "price": 9.99,
        "quantity": 0
    },
    {
        "id": 7,
        "name": "Sushi Platter",
        "description": "A delightful sushi platter featuring an assortment of nigiri and maki rolls.",
        "price": 18.99,
        "quantity": 0
    },
    {
        "id": 8,
        "name": "BBQ Pulled Pork Sandwich",
        "description": "A smoky BBQ pulled pork sandwich with coleslaw on a brioche bun.",
        "price": 10.99,
        "quantity": 0
    },
    {
        "id": 9,
        "name": "Greek Salad",
        "description": "A fresh Greek salad with cucumbers, tomatoes, olives, feta cheese, and Greek dressing.",
        "price": 7.99,
        "quantity": 0
    },
    {
        "id": 10,
        "name": "Chocolate Fondue",
        "description": "Decadent chocolate fondue served with a variety of dipping treats.",
        "price": 9.99,
        "quantity": 0
    },
    {
        "id": 11,
        "name": "Oreo Cheesecake",
        "description": "Indulge in our heavenly Oreo Cheesecake, a fusion of creamy richness and crunchy delight, perfect for satisfying your sweet cravings.",
        "price": 9.99,
        "quantity": 0
    }],
   
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction <{id: number, quantity: number }>){
            const {id, quantity} = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity += quantity;
            }
        },
        removeItem(state, action: PayloadAction<number>) {
            const itemId = action.payload;
            const item = state.items.find(item => item.id === itemId);
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
    }
});
export const { addItem, removeItem } = menuSlice.actions;
export default menuSlice.reducer;