import * as fabric from "fabric"

export default function drawLine(canvas, colorSelect) {
    if (canvas instanceof fabric.Canvas) {
        const line = new fabric.Line([50, 100, 200, 100], {
            id:"line",
            top: (canvas.height - 50) * Math.random(),
            left: (canvas.width - 50) * Math.random(),
            stroke: colorSelect,
            strokeWidth: 3,
            padding: 10,
            cornerColor: "black",
            cornerStyle: 'circle',
            cornerStrokeColor: "black",
            borderDashArray: [5, 5],
            borderColor: '#000000',
        });
        canvas.add(line);
    }
}
