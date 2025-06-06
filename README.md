# 🎯 Savanorystės tinklapis

## 📌 Apie projektą
Šis projektas skirtas skatinti savanorystę Lietuvoje. Tinklapyje pateikiama informacija apie savanorystės naudą, organizacijos veiklą, vykdomus projektus bei suteikiama galimybė susisiekti per kontaktų formą.

## 👤 Autorius
- **Vardas, pavardė:** Darija Lazebnik  
- **El. paštas:** [darija.lazebnik@stud.vilniustech.lt](mailto:darija.lazebnik@stud.vilniustech.lt)

## 📁 Projekto struktūra

```
1 darbas tinklalapis/
├── client/               # React frontend
│   ├── src/
│   │   └── components/   # Projekto komponentai (Projects.js, Home.js ir kt.)
│   └── public/
│   └── package.json
├── server.js             # Express backend
├── database.db           # SQLite duomenų bazė
├── .gitignore            # Git ignoruojami failai
└── README.md             # Projekto aprašymas
```

## 🛠️ Reikalavimai

- **Node.js:** [https://nodejs.org](https://nodejs.org)  
- **Visual Studio Code**

### 🔌 Rekomenduojami plėtiniai (VS Code):
- `SQLite Viewer` (pvz., SQLite Viewer by Alex Covizzi)
- `Thunder Client` *(API testavimui – neprivaloma)*

---

## 🚀 Projekto paleidimas

### 1. Backend (Node.js + Express)

```bash
cd "1 darbas tinklalapis"
node server.js
```

🔎 Jei komanda `node` neveikia, pasitikrinkite:
```bash
node -v
```
Jeigu versija nerodoma – `Node.js` reikia įdiegti iš naujo. Jei įdiegta, kartais padeda Visual Studio Code **perstartavimas**.

**Serverio adresas:** [http://localhost:5000](http://localhost:5000)

---

### 2. Frontend (React)

```bash
cd client
npm install
npm start
```

🛑 Jei `npm install` neveikia dėl „script disabled“ klaidos, paleiskite PowerShell kaip administratorius ir įvykdykite:

```powershell
Set-ExecutionPolicy RemoteSigned
```

Kai paklaus **Do you want to change the execution policy?**, įveskite `Y` ir spauskite `Enter`.

**Naršyklės adresas:** [http://localhost:3000](http://localhost:3000)

---

## 🎯 Projekto tikslas

- Supažindinti vartotoją su savanorystės idėja.
- Skatinti prisijungti prie savanoriškų veiklų.
- Leisti peržiūrėti aktyvius projektus.
- Suteikti galimybę pateikti atsiliepimą arba norą tapti savanoriu per kontaktų formas.

## Duomenų bazės atidarymas

Norint paleisti `database.db` failą per Visual Studio Code:

1. Įsitikinkite, kad yra įdiegtas plėtinys *SQLite Viewer* (pvz., SQLite Viewer by Alex Covizzi).
2. Raskite projektų kataloge failą `database.db`.
3. Dešiniu pelės klavišu spustelėkite ant `database.db` ir pasirinkite **"Open Database"** (arba "Open in SQLite Viewer").
4. Atsidarys visos lentelės ir jų duomenys.

