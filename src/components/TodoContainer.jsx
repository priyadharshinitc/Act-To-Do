import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import {useState} from 'react';

const TodoContainer = () => {

    const [activities, setActivities] = useState([
        // {
        //     id: 1,
        //     activity: "Wake up at 6"
        // }, 
        // {
        //     id: 2,
        //     activity: "Have Breakfast"
        // }
    ]);

    return (
        <>
            <div className="flex gap-5 flex-wrap">
                {/* Task added in input field (AddTodoForm), should be added to array in TodoList. So we are trying to pass value from one sibling to another but we can only send value from Parent to Child. So we should have the common things in Parent Component, so moving the "activities" array from TodoList to TodoContainer. */}
                <AddTodoForm activities={activities} setActivities={setActivities} />
                <TodoList activities={activities} setActivities={setActivities} />
            </div>    
        </>    
    )
}

export default TodoContainer