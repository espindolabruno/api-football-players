import { DeletePlayerById } from "../repositories/player-repository"
import { ok } from "../utils/http-helper"


export const deletePlayerService = async (id:number) =>{
    const deletedPlayer = await DeletePlayerById(id)
    
    const response = ok(deletedPlayer)

    return response 
 
}