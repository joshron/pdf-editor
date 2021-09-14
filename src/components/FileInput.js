import {useState} from "react";

function FileInput({setPdfFile, setPdfHasAttached}) {

    //Check if file is of mime type application/pdf
    function checkFileInput(e) {
        const tempFile = e.target.files[0];
        if (tempFile.type === "application/pdf") {
            setPdfHasAttached(true);
            setPdfFile(tempFile);
        } else {
            setPdfHasAttached(false);
            setPdfFile("The file must be a .pdf");
        }
    }

    return (
        <div>
            <label htmlFor={"pdf-file-input"} id={"file-input-label"}>
                Attach PDF
                <input id={"pdf-file-input"}
                       type={"file"}
                       accept={"application/pdf"}
                       onChange={(e) => checkFileInput(e)}/>
            </label>
        </div>
    )
}

export default FileInput;