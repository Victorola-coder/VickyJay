import toast, { Toaster } from "react-hot-toast";

const Resume = ({ pdfUrl, fileName, buttonText }) => {
  const downloadPDF = async () => {
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName || "download.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      toast.success("Résumé on its way");
    } catch (error) {
      toast.error("Couldn't download the résumé");
      console.error("Error downloading PDF:", error.message);
    }
  };

  return (
    <>
      <button type="button" onClick={downloadPDF} className="btn-ghost group">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M4 19h16" />
        </svg>
        {buttonText || "Download PDF"}
      </button>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#0A1C20",
            color: "#F0FEFF",
            border: "1px solid rgba(207,250,255,0.1)",
          },
        }}
      />
    </>
  );
};

export default Resume;
