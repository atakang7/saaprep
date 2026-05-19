document$.subscribe(() => {
  const palette = JSON.parse(localStorage.getItem(".__palette") || "{}");
  const isDark = palette && palette.color && palette.color.scheme === "slate";
  mermaid.initialize({
    startOnLoad: false,
    theme: isDark ? "dark" : "default",
    securityLevel: "loose",
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" }
  });
  mermaid.run({ querySelector: ".mermaid" });
});
