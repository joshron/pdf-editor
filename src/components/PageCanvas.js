import {useRef, useEffect} from "react";

function PageCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.height = 50;
        canvas.width = 50;
        const context = canvas.getContext('2d');
        context.fillStyle = "red";
        context.fillRect(0, 0, 50, 50);
    },[])

    return (
        <canvas ref={canvasRef}></canvas>
    )
}

export default PageCanvas;