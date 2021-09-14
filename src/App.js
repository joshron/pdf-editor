import './App.css';
import './components/FileInput'
import FileInput from "./components/FileInput";
import PageCanvasContainer from "./components/PageCanvasContainer";
import {useState, useEffect} from "react";
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

function App() {
    //Stores file from file input
    const [pdfFile, setPdfFile] = useState(null);
    //True if file is of mime type application/pdf
    const [pdfHasAttached, setPdfHasAttached] = useState(false);

    return (
        <div className="App">
            <header>
                <h1>PDF</h1>
            </header>
            {pdfFile !== null && pdfHasAttached ? <p>{pdfFile.name}</p> : <p>Attach a file</p>}
            <FileInput setPdfFile={setPdfFile} setPdfHasAttached={setPdfHasAttached}/>
        </div>
    );
}

export default App;
