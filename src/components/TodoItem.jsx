const TodoItem = (props) => {

    const activities = props.activities;
    const setActivities = props.setActivities;

    function handleDelete(removeId) {
        let tempArr = activities.filter(function(item) {
            if(item.id === removeId) {
                return false;
            } else {
                return true;
            }
        });
        setActivities(tempArr);
    }

    return (
        <>
            <div className="flex justify-between">
                <p>{props.index}. {props.activity}</p>
                <button className="text-red-500 font-medium" onClick={() => handleDelete(props.id)}>Delete</button>
            </div>
        </>
    )
}

export default TodoItem