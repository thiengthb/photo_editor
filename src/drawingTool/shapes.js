import * as fabric  from 'fabric';

export const drawCircle = (canvas, colorSelect) => {

    const circle = new fabric.Circle({
        top: window.innerHeight/3,
        left: window.innerWidth/2,
        radius: 50,
        originX: 'center',
        originY: 'center',
        fill: colorSelect,
        objectCaching: false,
        padding: 10,
    });

    canvas.add(circle);
}

export const drawRectangle = (canvas, colorSelect) => {

    const rect = new fabric.Rect({
        top: window.innerHeight/3,
        left: window.innerWidth/2,
        width: 100,
        height: 100,
        fill: colorSelect,
        objectCaching: false,
        padding: 10,
    });

    canvas.add(rect);
}

export const drawTriangle = (canvas, colorSelect) => {

    const triangle = new fabric.Triangle({
        top: window.innerHeight/3,
        left: window.innerWidth/2,
        width: 100,
        height: 100,
        fill: colorSelect,
        objectCaching: false,
    });

    canvas.add(triangle);
}