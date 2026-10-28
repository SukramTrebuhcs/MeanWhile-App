const exportFormats = {
  csv: {
    title: "CSV-Export",
    copy: "Ideal für Tabellen, Berichte und schnelle Auswertung in anderen Tools."
  },
  json: {
    title: "JSON-Export",
    copy: "Strukturierte Daten für Automatisierung, Integrationen und eigene Pipelines."
  },
  pdf: {
    title: "PDF-Export",
    copy: "Teilbares Übersichtsformat für Doku, Freigaben oder Kundentermine."
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
