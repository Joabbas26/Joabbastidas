import { createSlice } from "@reduxjs/toolkit";

const EditRowSlice = createSlice({
    name: 'editRow',
    initialState : [],
    reducers: {
        saveRow: (state, action) => {
            const updatedRow = {
                rowNum: action.payload.rowNum,
                fName: action.payload.fName, 
                lName: action.payload.lName,
                compTime: action.payload.compTime,
                fTime: action.payload.fTime,
                oTime: action.payload.oTime,
                recomm: action.payload.recomm,
                total: action.payload.total,
            };
            // const index = state.findIndex((row) =>
            //     row.id === action.payload.id);
                // state.splice(index, 1, updatedRow);
            state.splice(state.indexOf(updatedRow), 1, updatedRow)
        },
    },
});

export default EditRowSlice.reducer;
export const { saveRow } = EditRowSlice.actions;
