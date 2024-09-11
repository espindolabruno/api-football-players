import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerbyId, newPlayer, updatePlayer } from "./controllers/controller-player";


export const router = Router();



console.log("Aqui só roda se eu chamar o /api/players")
router.get('/players', getPlayer)

router.get('/players/:id', getPlayerbyId)

router.post('/players', newPlayer)

router.delete('/players/:id', deletePlayer)

router.patch('/players/:id', updatePlayer)

