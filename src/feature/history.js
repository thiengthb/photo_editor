let undoStack = [];
let redoStack = [];
const historyLimit = 50; 

export const saveHistory = (canvas) => {
  if (undoStack.length >= historyLimit) {
    undoStack.shift(); 
  }

  const currentState = canvas.toJSON(); 
  undoStack.push(currentState);
  redoStack = []; 
};

export const undo = (canvas) => {
  if (undoStack.length > 0) {
    redoStack.push(canvas.toJSON());
    const previousState = undoStack.pop(); 
    canvas.loadFromJSON(previousState, () => {
      canvas.renderAll();
    });
  }
};

export const redo = (canvas) => {
  if (redoStack.length > 0) {
    undoStack.push(canvas.toJSON()); 
    const nextState = redoStack.pop(); 
    canvas.loadFromJSON(nextState, () => {
      canvas.renderAll();
    });
  }
};

