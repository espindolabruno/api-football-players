import { PlayerModel } from "../models/player-model"
import { createPlayer } from "../repositories/player-repository"
import { badRequest, created } from "../utils/http-helper"


export const createNewPlayer = async (requestBody:PlayerModel) => {
    const players = await createPlayer(requestBody)
    let response

    if(Object.keys(players).length != 0)
        response = created(players)
    else
        response = badRequest(players)

    return response
} 