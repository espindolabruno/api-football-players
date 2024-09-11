import { Request,Response } from "express"
import { returnPlayer, servicePlayerById } from "../services/get-players"
import { createNewPlayer } from "../services/create-player"
import { deletePlayerService } from "../services/delete-player"
import { updatePlayerService } from "../services/update-player"

export const getPlayer = async (req:Request, res:Response) => {
    const httpResponse = await returnPlayer()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerbyId = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await servicePlayerById(id)
    
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const newPlayer = async (req:Request, res:Response) => {
    const httpResponse = await createNewPlayer(req.body) 
    console.log(req.body.id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deletePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const playerBody = req.body
    const httpResponse = await updatePlayerService(id, playerBody)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}