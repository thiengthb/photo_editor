import * as fabric  from 'fabric';

export const drawCircle = (canvas, colorSelect) => {

    const canvasCenter = canvas.getCenter();

    const circle = new fabric.Circle({
        id: 'circle',
        top: canvasCenter.top,
        left: canvasCenter.left,
        radius: 50,
        originX: 'center',
        originY: 'center',
        fill: colorSelect,
        objectCaching: false,
        padding: 10,
        cornerColor: colorSelect,
        cornerStyle: 'circle',
        cornerStrokeColor: colorSelect,
        borderDashArray: [5, 5],
        borderColor: '#000000',
        transparentCorners: true,
        lockRotation: true, // can not rotate 
        erasable: false, // can not erase it by erase tool-brush...
    });

    // Render Circle on Canvas
    canvas.add(circle);
}

export const drawRectangle = (canvas, colorSelect) => {

    const rect = new fabric.Rect({
        id: 'rectangle',
        top: (canvas.height - 50) * Math.random(),
        left: (canvas.width - 50) * Math.random(),
        width: 50,
        height: 50,
        fill: colorSelect,
        objectCaching: false,
        padding: 10,
        rx: 2, // radius
        ry: 2, // radius
    });

    // Render Rectangle on Canvas
    canvas.add(rect);
}

export const drawTriangle = (canvas, colorSelect) => {

    const triangle = new fabric.Triangle({
        id: 'triangle',
        top: 150,
        left: 150,
        width: 100,
        height: 100,
        fill: colorSelect,
        objectCaching: false,
    });

    // Render Rectangle on Canvas
    canvas.add(triangle);
}