// import { PayloadAction,createAsyncThunk, createSlice , Action} from "@reduxjs/toolkit";
// import { tasks } from "../data/tasks";




//     export const setTimeAcynck = createAsyncThunk('posts/setTimeAcynck', setTimeout(()=>{
//             const bd = tasks
//             return bd;
//         },10000))


// export const postsSlice = createSlice({
//     name: 'posts',
//     initialState: {
//         tasksRed: [{id: 0, title: "Описание 1 задачи", completed: 'выполнена'}],
//         status: null,
//         error: null,
//     }
//     ,
//     reducers: {
//       createPost(state, action) {
//         if(action.type == 'posts/createPost'){
//             return tasks
//         }
//       },
//       updatePost(state, action) {},
//       deletePost(state, action) {},
//     },
    // extraReducers: {
    //     [setTimeAcynck.pending]: (state)=>{
    //         state.status = 'loading';
    //         state.error = null
    //     },
    //     [setTimeAcynck.fulfilled]: (state, action)=>{
    //         state.status = 'res';
    //         state.tasksRed = action.payload;
    //     },
    //     [setTimeAcynck.rejected]: (state, action)=>{},
    // },
    // extraReducers: (builder) =>{
    //     builder
            // .addCase(setTimeAcynck.pending, (state, action)=>{
            //                 console.log('зашли в 1 кейс');
            //                state.status = 'loading';
            //                console.log(state.tasksRed);
            // state.error = null
            // })
//             .addCase(setTimeAcynck.fulfilled, (state, action) => {
//                 console.log('зашли во 2 кейс');
//                 console.log(action.payload);
//                             state.status = 'res';
//                             state.tasksRed = action.payload;
//             })
//     }
//   });
  
//   console.log(postsSlice);
  // Извлекаем объект с создателями и редуктор
// const { actions, reducer } = postsSlice;
// Извлекаем и экспортируем каждого создателя по названию
// export const {
//   createPost,
//   updatePost,
//   deletePost,
// } = actions;
// Экпортируем редуктор по умолчанию или по названию
// export default reducer;
  /*
  {
    name: 'posts',
    actions : {
        createPost,
        updatePost,
        deletePost,
    },
    reducer
  }
  */
  
//   const { createPost } = postsSlice.actions;
  
//   console.log(
//     createPost({ id: 123, title: 'Привет, народ!' })
//   );
  // { type : 'posts/createPost', payload : { id : 123, title : 'Привет, народ!' } }