import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        url: {},
        carts: {},
        pagination: { offset: 0, limit: 10 }
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getCarts: (state, action) => {
            state.carts = action.payload;
        },

        incPages: (state) => {
            if (state.pagination.offset < 250) {
                state.pagination.offset = state.pagination.offset + 10;
                state.pagination.limit = state.pagination.limit + 10;
            }
        },

        decPages: (state) => {
            if (state.pagination.offset > 0) {
                state.pagination.offset = state.pagination.offset - 10;
                state.pagination.limit = state.pagination.limit - 10;
            }
        }
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getCarts, incPages, decPages } = productSlice.actions;

export default productSlice.reducer;