import React from 'react';
import Windowcontrol from '../Components/Windowcontrol/Windowcontrol';
import WindowWrapper from '../Hoc/Windowrapper';
import { Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const Resume = () => {
  return (
    // 🔑 Give layout context
    <div className="flex flex-col h-full w-full overflow-hidden">

      {/* HEADER (fixed height) */}
      <div
        id="window-header"
        className="flex items-center justify-between h-[50px] px-3 shrink-0"
      >
        <Windowcontrol target="resume" />
        <h2>Resume download</h2>
        <a
          href="/files/resume.pdf"
          download
          title="Download resume"
          className="cursor-pointer"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* SCROLL AREA */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center gap-4 p-4">
          <Document
            file="/files/updated resume.pdf"
            loading="Loading PDF..."
          >
            {Array.from({ length: 2 }, (_, i) => (
              <Page
                key={i}
                pageNumber={i + 1}
                scale={1.1}
                renderTextLayer={false}
                renderAnnotationLayer={true}
              />
            ))}
          </Document>
        </div>
      </div>

    </div>
  );
};

const Resumekwrapper = WindowWrapper(Resume, 'resume');
export default Resumekwrapper;
