import { PlayerModel } from "../models/player-model";
import { updatePlayerById } from "../repositories/player-repository";
import { badRequest, ok } from "../utils/http-helper";


export const updatePlayerService = async (playerId: number, player:PlayerModel ) => {
    const updatePlayer = await updatePlayerById(playerId, player)
    let response

    if (updatePlayer)
        response = ok(updatePlayer)
    else
        response = badRequest(updatePlayer)


    return response

}