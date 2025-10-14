
🌐 Collabrium
Collabrium ist ein kollaboratives Verwaltungstool für Website-Projekte.
Es ermöglicht Teams, Ziele, Unterziele und Aufgaben zu planen, Fortschritte zu tracken und Rollen zu verwalten – alles an einem zentralen Ort.
Der Fokus liegt auf Organisation und Struktur, nicht auf Code-Bearbeitung. Optional kann ein Git-Repository verknüpft werden, um den Entwicklungsfortschritt nachzuvollziehen.
🚀 Features
Projekt- und Zielverwaltung: Strukturierte Organisation von Projekten mit Hierarchien aus Zielen und Unterzielen
Aufgabenmanagement: Erstellung, Zuweisung und Statusverfolgung von Aufgaben
Fortschrittsanzeige: Visualisierung des Projektstatus in Echtzeit
Rollenverwaltung: Admin-, Member- und Gastrollen mit klar definierten Rechten
Kommentar- & Kommunikationssystem: Diskutieren, planen und Feedback geben direkt im Tool
Git-Integration: Optionaler Einblick in Commits, Branches und PRs – ohne Code zu bearbeiten
🧠 Kernprinzip
Collabrium trennt das Denken über Projekte vom Arbeiten im Code.
Es wird zur zentralen Steuerzentrale, in der strategische Planung, Aufgabenverwaltung und Teamkoordination stattfinden.
🛠️ Tech Stack
Frontend:
React
Redux (State-Management)
TailwindCSS (Styling)
Axios (HTTP-Requests)
Formik (Formular-Handling)
Backend:
Node.js & Express
MongoDB mit Mongoose (ODM)
Morgan (Request-Logging)
Helmet (Sicherheits-Header)
express-force-https (HTTPS erzwingen)
Tools:
Nodemon (Entwicklungs-Server)
ESLint & Prettier (Code-Qualität)
Concurrently (Paralleles Starten von Frontend & Backend)
📁 Projektstruktur
collabrium/
├── frontend/          # React-App
├── backend/           # Express-Server
├── shared/            # Gemeinsame Typen & Enums
├── scripts/           # Datenbank-Seeding & Utilities
├── tests/             # Unit- & Integrationstests
└── docs/              # Dokumentation & Architektur
⚙️ Installation
Voraussetzungen
Node.js (>= 18)
MongoDB-Datenbank (lokal oder in der Cloud)
npm oder yarn
Setup
# Repository klonen
git clone https://github.com/Code-God-2010/Collabrium.git
cd Collabrium

# Dependencies installieren
cd frontend && npm install
cd ../backend && npm install

# Entwicklungsumgebung starten
npm run dev
🔐 Sicherheit
Collabrium nutzt:
Helmet: Schutz vor XSS, Clickjacking und anderen Angriffen
HTTPS: Automatische Weiterleitung von HTTP zu HTTPS
Umgebungsvariablen: Für API-Keys, DB-Verbindungen etc.
🌱 Vision
Langfristig soll Collabrium zu einem skalierbaren Ökosystem wachsen, das Website-Teams ermöglicht,
Organisation, Code und Ziele intelligent zu verbinden – später auch durch Templates oder unterschiedliche Projektarten (z. B. App, Portal, Docs).
🤝 Mitwirken
Beiträge sind willkommen!
Bitte öffne ein Issue oder sende einen Pull Request mit klarer Beschreibung.
📜 Lizenz
Dieses Projekt steht unter der MIT License.
Weitere Details siehe LICENSE.
💡 Autor
Linus – Entwickler und Visionär hinter Collabrium.
📍 GitHub: Code-God-2010
