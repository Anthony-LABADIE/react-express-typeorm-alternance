// const express = require('express') //ES5
import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"; //ES6
import datasource from "./lib/datasource";
import wilderRoutes from "./routes/wilder.routes";
import languageRoutes from "./routes/language.routes";
import noteRoutes from "./routes/note.routes";
import cors from "cors";
const app = express();

app.use(cors());
const port = parseInt(process.env.APP_PORT || "8000");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/wilder", wilderRoutes);
app.use("/language", languageRoutes);
app.use("/note", noteRoutes);

const start = async () => {
  await datasource.initialize();
  app.listen(port, () => console.log("Serveur démarré sur le port 4000"));
};

start();
