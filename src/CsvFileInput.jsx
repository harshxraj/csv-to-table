import React, { useRef } from "react";
import Papa from "papaparse";

const CsvFileInput = ({ onFileLoad }) => {
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          onFileLoad(result.data);
        },
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
      });
    }
  };

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  return (
    <div
      onClick={handleUploadClick}
      className="flex justify-center rounded-lg font-semibold mb-4 m-auto w-[340px] hover:cursor-pointer border-3 bg-slate-200 border-dotted p-2"
    >
      <input ref={inputRef} type="file" onChange={handleFileChange} className="hidden" />
      <button>Upload CSV</button>
    </div>
  );
};

export default CsvFileInput;
