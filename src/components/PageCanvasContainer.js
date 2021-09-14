import {useState} from "react";
import PageCanvas from "./PageCanvas";

function PageCanvasContainer({count}) {

    const canvasElements = [];
    for (let i=0; i<count; i++) {
        canvasElements.push(<PageCanvas />);
    }

    return (
        <div>
            <p>Canvas Pages: {count}</p>
            {canvasElements}
        </div>
    )

}

export default PageCanvasContainer;