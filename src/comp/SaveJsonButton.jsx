import CardPresenter from "./CardPresenter";
import JsonReader from "./JsonReader";


function SaveJsonButton() {
    function SaveProject(){
        let text = document.getElementById("SaveTextDiv").textContent;
        alert(text)
        console.log(text)
    }


  return (
    <>
    <button onClick={() => SaveProject()}>Save Project</button>
    </>
  );
}

export default SaveJsonButton


