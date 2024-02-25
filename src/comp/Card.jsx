
function Card(){

    let characters = ["Character 1", "Character 2"]
    let title = "Title of the Scene"
    let scene_text = "Information for this scene"



    return(
        <div className="card">
            <h1 className="card-title">{title}</h1>
            <p className="card-text">{scene_text}</p>
            <p className="card-characters">{characters}</p>
            <button className="edit-scene-button">Edit</button>
        </div>
    )

}

export default Card