import { Provider, useDispatch} from "react-redux";
import store from "./stores/store";
import ButtonMw from "./components/buttonMw";
import TasksList from "./components/tasksList";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch({type: 'TEST'});
  }, [dispatch]);




  return (
    <>
    {/* <ButtonMw /> */}
    <TasksList />

    </>
    
  );
}

export default App;
