# Savanorystės tinklapis

## Apie projektą
Šis projektas yra skirtas skatinti savanorystę Lietuvoje. Tinklapyje pateikiama informacija apie savanorystės naudą, organizacijos istoriją, vykdomus projektus ir kontaktus.

### Autorius
- **Vardas Pavardė**: Darija Lazebnik
- **El. paštas**: [darija.lazebnik@stud.vilniustech.lt]

## Failų struktūra
1 darbas tinklalapis
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Projects.js
│   │   │   ├── Home.js
│   │   │   └── ...
│   ├── public/
│   └── package.json
├── server.js              # Express backend
├── database.db            # SQLite duomenų bazė
├── .gitignore             # Git ignoravimo failas
└── README.md              # Projekto aprašymas

## Būtini komponentai:

Node.js: https://nodejs.org/ 
Visual Studio Code
VS Code plėtiniai:
SQLite Viewer (SQLite Explorer arba SQLite Viewer by Alex Covizzi)
Thunder Client (API testavimui - neprivaloma)

## Backend (serverio paleidimas):
cd 1 darbas tinklalapis
node server.js (patirkinkite Visual studio code ar tikrai yra, parašykite komandą node -v, turėtu parodyti versiją. Jeigu tikrai buvo idiegtas, tai tiesiog išeikite iš Visual studio code ir iš naujo ijunkite jį.)

Serveris paleidžiama adresu: http://localhost:5000
Jei reikia testuoti API, galima naudoti Thunder Client.

## Frontend (React aplikacija):
cd client
npm install (jeigu neveikia, reikia ijungti powershell kaip administratorius ir parašyti (Set-ExecutionPolicy RemoteSigned), kaip paklaus Do you want to change the execution policy? spauskite Yes ir spauskite enter.
![image](https://github.com/user-attachments/assets/17e6cc1f-38a6-4e12-9639-5f8c65d3bf7e)
npm start

Naršyklėje atsidarys: http://localhost:3000

## Projekto tikslas
Šis projektas skirtas parodyti savanorystės naudą ir skatinti žmones prisijungti prie įvairių projektų, taip pat suteikti galimybę susisiekti su organizacija per kontaktų formą.
