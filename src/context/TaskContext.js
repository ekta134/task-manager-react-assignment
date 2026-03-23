import { createContext, useContext, useReducer } from "react";
import taskReducer from "../reducer/TaskReducer";

// 1. creating the context 
const TaskContext = createContext();

// 2. Initial state 
const initialState = {
  tasks: [
    { id: 1, title: "Learn React", completed: false }
  ]
};

export const TaskProvider = ({children}) =>{
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return(
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () =>{
    return useContext(TaskContext);
}