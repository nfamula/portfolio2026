"use client";
export default function ResumeDownloadButton() {
  return (
    <a
      href="/downloads/NatalieFamula_Resume.pdf"
      download="NatalieFamula_Resume.pdf"
      className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
      onClick={() => {
        window.dataLayer?.push({
          event: "resume_download",
          file_name: "NatalieFamula_Resume.pdf",
        });
      }}
    >
      Download resume PDF
    </a>
  );
}
