import TodoItem from "./TodoItem"

const TodoList = (props) => {

    const activities = props.activities;
    const setActivities = props.setActivities;

    return (
        <>
            <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {
                    activities.length === 0 ? <p>You haven't added any activity yet.</p> : ""
                }

                {
                    activities.map(function(item, index) {
                        return <TodoItem key={index} index={index + 1} id={item.id} activity={item.activity} activities = {activities} setActivities = {setActivities} />
                    })
                }
            </div>
        </>
    )
}

export default TodoList