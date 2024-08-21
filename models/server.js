
import express from 'express';
import 'dotenv/config.js';
import dbConnection from '../database/config.js';
import { getMascotas, postMascota, putMascota, deleteMascota, getMascotaById, getMascotaByDocumento } from '../controllers/mascotaController.js';

export default class Server {
  constructor() {
    this.app = express();
    this.listen();
    this.dbConnect();
    this.pathMascota = '/api/mascota';
    this.route();
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }

  async dbConnect() {
    await dbConnection();
  }

  route() {
    this.app.use(express.json());
    

    this.app.get(this.pathMascota, getMascotas);                              
    this.app.post(this.pathMascota, postMascota);                             
    this.app.put(`${this.pathMascota}/:id`, putMascota);                      
    this.app.get(`${this.pathMascota}/:id`, getMascotaById);                  
    this.app.get(`${this.pathMascota}/documento/:documento`, getMascotaByDocumento);  
    this.app.delete(`${this.pathMascota}/:id`, deleteMascota);                
  }
}
