import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        filters: {
            name: ""
        }
    },
    reducers: {
        changeFilter(state, action) {
            state.filters.name = action.payload;
        }
    }

})

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filter.filters.name;