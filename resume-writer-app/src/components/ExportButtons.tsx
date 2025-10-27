import React from 'react';

const ExportButtons: React.FC<{ onExportPDF: () => void; onExportDOC: () => void; }> = ({ onExportPDF, onExportDOC }) => {
    return (
        <div className="export-buttons">
            <button onClick={onExportPDF}>Export as PDF</button>
            <button onClick={onExportDOC}>Export as DOC</button>
        </div>
    );
};

export default ExportButtons;