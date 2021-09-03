import {useState} from "react";

function FileInput() {
    const [selectedFileInput, setSelectedFileInput] = useState(null);
    const [fileName, setFileName] = useState("No file selected");

    function checkFileInput(e) {
        const tempFile = e.target.files[0];
        if (tempFile.type === "application/pdf") {
            setSelectedFileInput(tempFile);
            setFileName(tempFile.name);
        } else {
            setFileName("The file must be a .pdf");
        }
    }

    return (
        <div>
            <p>{fileName}</p>
            <label htmlFor={"pdf-file-input"} id={"file-input-label"}>

                Attach PDF
                <input type={"file"}
                       accept={"application/pdf"}
                       onChange={(e) => checkFileInput(e)}
                       id={"pdf-file-input"}/>
            </label>
        </div>
    )
}

export default FileInput;