import { createSlice } from "@reduxjs/toolkit";

const initialMovies = [
    {title: 'WALL·E', year: 2008, poster: 'https://cdn.sanity.io/images/7hso24qo/production/69ad5d60ff19c456954513e8c67e9563c780d5e1-780x1170.jpg'},
    {title: 'Guardians of the Galaxy', year: 2017, poster: 'https://cdn.sanity.io/images/7hso24qo/production/236a8e4d456db62a04f85c39abcfd74c50e0c37b-780x1170.jpg'},
    {title: 'Alien: Covenant', year: 2017, poster: 'https://cdn.sanity.io/images/7hso24qo/production/e22a88d23751a84df81f03ef287ae85fc992fe12-780x1170.jpg'},
    {title: 'Interstellar', year: 2014, poster: 'https://cdn.sanity.io/images/7hso24qo/production/7aa06723bb01a7a79055b6d6f5be80329a0e5b58-780x1170.jpg'},
];

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        items: initialMovies
    },
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload)      
            console.log(state.items);
                  
        },
        edit: (state, action) => {
            const {id, data} = action.payload;
            state.items[id] = data;

        }
    }
})

export const {add, edit} = movieSlice.actions;
export default movieSlice.reducer;