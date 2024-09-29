import * as fabric from 'fabric';

export default function drawTriangle(canvas, colorSelect) {

    const triangle = new fabric.Triangle({
        id: 'triangle',
        top: (canvas.height - 50) * Math.random(),
        left: (canvas.width - 50) * Math.random(),
        width: 100,
        height: 100,
        fill: colorSelect,
        objectCaching: false,
        padding: 10,
        cornerColor: "black",
        cornerStyle: 'circle',
        cornerStrokeColor: "black",
        borderDashArray: [5, 5],
        borderColor: '#000000',
    });

    canvas.add(triangle);
}