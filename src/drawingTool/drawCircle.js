import * as fabric  from 'fabric';

export default function drawCircle(canvas, colorSelect) {
    if (canvas instanceof fabric.Canvas) {  
        const circle = new fabric.Circle({
            id: 'circle',
            top: (canvas.height - 50) * Math.random(),
            left: (canvas.width - 50) * Math.random(),
            radius: 50,
            originX: 'center',
            originY: 'center',
            fill: colorSelect,
            objectCaching: false,
            padding: 10,
            cornerColor: "black",
            cornerStyle: 'circle',
            cornerStrokeColor: "black",
            borderDashArray: [5, 5],
            borderColor: '#000000',
            transparentCorners: true,
        });

        canvas.add(circle);
    } 
}