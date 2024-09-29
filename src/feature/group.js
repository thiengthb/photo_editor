import * as fabric from 'fabric';

export const groupObjects = (canvas, setGroup) => {
  if (!canvas) return;

  const activeObjects = canvas.getActiveObjects();

  if (activeObjects.length > 1) {
    const group = new fabric.Group(activeObjects);

    setGroup(group);

    canvas.add(group);
    activeObjects.forEach((obj) => {
      canvas.remove(obj);
    });

    canvas.setActiveObject(group);
  }
};

export const ungroupObjects = (canvas, group) => {
  if (!canvas || !group) return;

  if (group.type === 'group') {

    const items = group.getObjects();
    canvas.remove(group);

    items.forEach((item) => {
      canvas.add(item);
    });

    group = null;
  }
};
