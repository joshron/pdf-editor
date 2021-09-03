import {useState} from "react";

function FileInput(props) {
    const [selectedFileInput, setSelectedFileInput] = useState(null);
    const [fileName, setFileName] = useState("");
    const [message, setMessage] = useState("Attach PDF file here");
    const [pdfHasAttached, setPdfHasAttached] = useState(false);

    function checkFileInput(e) {
        const tempFile = e.target.files[0];
        if (tempFile.type === "application/pdf") {
            setPdfHasAttached(true);
            setMessage("PDF has been attached successfully");
            setSelectedFileInput(tempFile);
            setFileName(tempFile.name);
        } else {
            setPdfHasAttached(false);
            setMessage("The file must be in pdf format");
            setFileName("The file must be a .pdf");
        }
    }

    return (
        <div>
            <p>{message}</p>
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