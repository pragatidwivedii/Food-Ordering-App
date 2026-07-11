import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
        restaurantID: null, 
    },

    reducers: {
        addItem: (state , action) => {
            const existing = state.items.find(
                item => item.card.info.id === action.payload.card.info.id
            );
            if (existing) {
                existing.qty += 1; 
            } else {
                state.items.push({ ...action.payload, qty: 1 }); 
                state.restaurantID = action.payload.card.info.restaurantId;
            }
        },
        removeItem: (state ,action) => {
            const existing = state.items.find( 
                item => item.card.info.id === action.payload.card.info.id
            );
            if (existing) {
                if (existing.qty > 1) {
                    existing.qty -= 1;
                } else {
                    state.items = state.items.filter(
                        item => item.card.info.id !== action.payload.card.info.id
                    );
                }
            }
        },
        cleanCart: (state , action) =>{
            state.items.length = 0;
        }
    }
})

export const {addItem , removeItem , cleanCart} = cartSlice.actions;

export default cartSlice.reducer;