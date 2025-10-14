<h1 align="center">🌐 Collabrium</h1>

<p align="center">
  <b>Ein kollaboratives Verwaltungstool für Website-Projekte</b><br/>
  Planung. Struktur. Fortschritt. Zusammenarbeit – alles an einem Ort.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Stack-MERN-orange?style=flat-square" />
</p>

---

## 🚀 Über das Projekt

**Collabrium** hilft Teams, Website-Projekte effektiv zu organisieren.  
Ziele, Unterziele, Aufgaben, Rollen und Fortschritte werden in einer klaren Struktur verwaltet.  
Optional kann ein Git-Repository verknüpft werden, um Entwicklungsfortschritte sichtbar zu machen – **ohne direkt im Code zu arbeiten**.

> 🧭 **Kernidee:**  
> Collabrium trennt das *Denken über Projekte* vom *Arbeiten im Code*.  
> Es wird zur zentralen Steuerzentrale, in der strategische Planung, Aufgabenverwaltung und Teamkoordination stattfinden.

---

## ✨ Features

- 🧩 **Projekt- & Zielverwaltung** – Hierarchische Struktur mit Zielen und Unterzielen  
- ✅ **Aufgabenmanagement** – Zuweisung, Status & Fortschrittsanzeige  
- 🧮 **Fortschritts-Tracking** – Visualisierung des Projektstatus in Echtzeit  
- 👥 **Rollenverwaltung** – Admin, Member & Gast mit klaren Berechtigungen  
- 💬 **Kommunikation** – Kommentare & Diskussionen direkt im Tool  
- 🔗 **Git-Integration** – Einblick in Commits, Branches & Pull Requests (read-only)

---

## 🛠️ Tech Stack

| Bereich     | Technologien |
|--------------|--------------|
| **Frontend** | React • Redux • TailwindCSS • Axios • Formik |
| **Backend**  | Node.js • Express • MongoDB • Mongoose |
| **Sicherheit** | Helmet • express-force-https |
| **Tools** | Nodemon • ESLint • Prettier • Concurrently • Morgan |

---

## 📁 Projektstruktur

```bash
collabrium/
├── frontend/          # React-App
├── backend/           # Express-Server
├── shared/            # Gemeinsame Typen & Enums
├── scripts/           # Datenbank-Seeding & Utilities
├── tests/             # Unit- & Integrationstests
└── docs/              # Dokumentation & Architektur
