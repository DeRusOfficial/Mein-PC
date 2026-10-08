# Mein PC

Eine kleine Webseite um gelerntes zu praktizieren.

## Verwendete Technologien

- **HTML5**
- **SCSS** – Für das Styling wurde SCSS verwendet, um den CSS-Code einfacher, übersichtlicher und wartbarer zu schreiben (z. B. durch Variablen, Verschachtelung und Partials).
- **Gulp** – Als Build-Tool für die Automatisierung des Entwicklungsprozesses.

## Build-Prozess mit Gulp

Mit Gulp werden sämtliche Dateien (SCSS/CSS, JavaScript, HTML, Bilder usw.) verarbeitet, komprimiert und anschließend im Ordner `dist/` abgelegt.

## Projektstruktur

```
projekt/
├── src/            # Quelldateien (SCSS, HTML, JS, Bilder)
├── dist/           # Fertig gebaute und komprimierte Dateien
├── gulpfile.js     # Gulp-Konfiguration
└── package.json
```

## Installation & Nutzung

1. Abhängigkeiten installieren:
```bash
   npm install
```
2. Projekt bauen

3. Die Webseite ist anschließend im Ordner `dist/` verfügbar.

## Wichtiger Hinweis

Die Webseite ist **ausschließlich über den `dist`-Ordner** abrufbar. Die `index.html` sowie alle weiteren Dateien (CSS, JS, Bilder usw.) müssen aus diesem Ordner geladen werden, damit die Seite korrekt dargestellt wird.

Beim Hosting bzw. Deployment muss daher der `dist`-Ordner als Root-Verzeichnis verwendet werden.
