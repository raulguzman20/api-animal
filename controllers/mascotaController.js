
import Mascota from '../models/mascota.js';


export async function getMascotas(req, res) {
  try {
    const mascotas = await Mascota.find();
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ error });
  }
}


export async function postMascota(req, res) {
  const body = req.body;
  try {
    const nuevaMascota = new Mascota(body);
    await nuevaMascota.save();
    res.status(201).json('Mascota creada exitosamente');
  } catch (error) {
    res.status(500).json({ error });
  }
}


export async function putMascota(req, res) {
  const { id } = req.params;
  const { nombre, especie, color, price } = req.body;
  try {
    const mascotaActualizada = await Mascota.findByIdAndUpdate(id, { nombre, especie, color, price }, { new: true });
    if (!mascotaActualizada) {
      return res.status(404).json('Mascota no encontrada');
    }
    res.json('Mascota actualizada exitosamente');
  } catch (error) {
    res.status(500).json({ error });
  }
}


export async function getMascotaById(req, res) {
  const { id } = req.params;
  try {
    const mascota = await Mascota.findById(id);
    if (!mascota) return res.status(404).json('Mascota no encontrada');
    res.json(mascota);
  } catch (error) {
    res.status(500).json({ error });
  }
}


export async function getMascotaByDocumento(req, res) {
  const { documento } = req.params;
  try {
    const mascota = await Mascota.findOne({ documento });
    if (!mascota) return res.status(404).json('Mascota no encontrada');
    res.json(mascota);
  } catch (error) {
    res.status(500).json({ error });
  }
}


export async function deleteMascota(req, res) {
  const { id } = req.params;
  try {
    const mascotaEliminada = await Mascota.findByIdAndDelete(id);
    if (!mascotaEliminada) {
      return res.status(404).json('Mascota no encontrada');
    }
    res.json('Mascota eliminada exitosamente');
  } catch (error) {
    res.status(500).json({ error });
  }
}
