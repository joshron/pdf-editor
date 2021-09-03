import './App.css';
import './components/FileInput'
import FileInput from "./components/FileInput";
import {useState} from "react";

function App() {
    const [inputVisible, setInputVisible] = useState(true);

    function toggleInputVisibility(){
        inputVisible ? setInputVisible(false) : setInputVisible(true);
    }
    return (
        <div className="App">
            <button onClick={() => toggleInputVisibility()}>Show/Hide</button>
            <header>
                <h1>PDF</h1>
            </header>
            {inputVisible ? <FileInput /> : null}
        </div>
    );
}

export default App;
