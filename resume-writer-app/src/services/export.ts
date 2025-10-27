import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';

export const exportToPDF = (resumeContent: string) => {
    const doc = new jsPDF();
    doc.text(resumeContent, 10, 10);
    doc.save('resume.pdf');
};

export const exportToDOC = (resumeContent: string) => {
    const doc = new Document();
    const paragraph = new Paragraph({
        children: [
            new TextRun(resumeContent),
        ],
    });
    doc.addSection({
        children: [paragraph],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, 'resume.docx');
    });
};