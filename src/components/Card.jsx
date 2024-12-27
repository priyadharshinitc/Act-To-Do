const Card = (props) => {
    return (
        <div style={{backgroundColor: props.bgcolor}} className="px-5 lg:px-10 py-5 border rounded-md flex-grow text-center">
            <h1 className="text-xl md:text-2xl font-medium">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Card