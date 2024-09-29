import jsPDF from 'jspdf';

export const exportToSVG = (canvas) => {
    if (!canvas) return;
    const svgData = canvas.toSVG();
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'canvas.svg';
    link.click();
  };
  
export const exportToPDF = (canvas) => {
    if (!canvas) return;
    const pdf = new jsPDF();

    canvas.toDataURL({ format: 'png', multiplier: 2 }, (dataURL) => {
        pdf.addImage(dataURL, 'PNG', 10, 10, canvas.width / 10, canvas.height / 10); 
        pdf.save('canvas.pdf');
    });
};