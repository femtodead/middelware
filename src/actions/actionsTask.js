import { createAsyncThunk } from "@reduxjs/toolkit";
import { tasks } from "../data/tasks";


// export const LOAD_TASKS =  "LOAD_TASKS";

// export const loadTasks =  () => async dispatch =>{
//     dispatch({type: "Начало"});
//     try {
//         let bd = []

//         dispatch({type: 'LOAD_TASKS', payload: bd})
//     } catch (error) {
//         dispatch({type: 'Error', payload: error.message})
//     }
// };


// export const loadTasks = createAsyncThunk(
//     '/task', setTimeout(tasks, 10000)
// )
// let bd = []
//         const name = () => {
//             bd = tasks;
//             console.log(bd)
//         }
// const timeAut = createAsyncThunk('param', setTimeout(name));
// [timeAut.pending]
// [timeAut.fulfilled]
// [timeAut.rejected]