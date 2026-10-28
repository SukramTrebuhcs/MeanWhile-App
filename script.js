const exportFormats = {
  csv: {
    title: "CSV export",
    copy: "Great for spreadsheets, reports, and quick review in external tools."
  },
  json: {
    title: "JSON export",
    copy: "Structured payload for automation, integrations, and custom data pipelines."
  },
  pdf: {
    title: "PDF export",
    copy: "Shareable summary format for records, approvals, or client-facing documentation."
  }
};

const buttons = Array.from(document.querySelectorAll(".format-btn"));
const title = document.getElementById("format-title");
const copy = document.getElementById("format-copy");
const year = document.getElementById("year");

year.textContent = "© 2026 Markus Schubert";

function setActiveFormat(format) {
  const selected = exportFormats[format];
  if (!selected) {
    return;
  }

  buttons.forEach((btn) => {
    const active = btn.dataset.format === format;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  title.textContent = selected.title;
  copy.textContent = selected.copy;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFormat(button.dataset.format);
  });
});
