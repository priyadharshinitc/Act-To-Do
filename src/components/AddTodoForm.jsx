import { useState } from "react";

const AddTodoForm = (props) => {

    const activities = props.activities;
    const setActivities = props.setActivities;
    const [myInput, setMyInput] = useState("");

    const handleChange = (evt) => {
        setMyInput(evt.target.value);
    }

    function handleClick() {
        let tempActivity = {
            id: activities.length + 1,
            activity: myInput
        }

        setActivities([...activities, tempActivity]);
        setMyInput("");
    }

    return (
        <>
            <div className="flex flex-col gap-3 mx-auto">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div className="flex flex-col gap-3 md:flex-row">
                    <input type="text" placeholder="Next Activity?" className="border border-black bg-transparent p-1 rounded-md mr-1" value={myInput} onChange={handleChange}></input>
                    <button className="bg-black text-white border border-black p-1 rounded-md w-1/2 mx-auto" onClick={handleClick}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddTodoForm