import React from "react";import { useDispatch, useSelector } from "react-redux";
import { createPost, postsSlice, setTimeAcynck } from "../reducers/newRed";
import { useEffect } from "react";
import { fetchTasks } from "../reducers/newRed2";
function TasksList() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.items);
    const taskStatus = useSelector((state) => state.tasks.status);
    useEffect(() => {
        if (taskStatus === 'idle') {
          dispatch(fetchTasks());
        }
      }, [taskStatus, dispatch]);
    return ( 
        <div>
            <h1>Список дел:</h1>
            {tasks.map((el)=> <div style={{display:'flex', gap:'30px'}}>
                    <span>{el.id}</span>
                    <span>{el.title}</span>
                    <span>{el.completed}</span>


            </div>)}
        </div>
     );
}

export default TasksList;