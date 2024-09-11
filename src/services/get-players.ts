import { findAllPlayers, findPlayeriId } from "../repositories/player-repository"
import { noContent as noContent, ok } from "../utils/http-helper"


export const returnPlayer = async () => {
    const result = await findAllPlayers()
    
    let response 
    if(result)
         response = ok(result)
    else
        response = noContent(result)

    console.log("Dando um JSONada nos arquivos do return-player.ts")
  return response
}

export const servicePlayerById = async (id:number) => {
        const result = await findPlayeriId(id)

        let response 
        if(result)
             response = ok(result)
        else
            response = noContent(result)
    
        console.log("Dando um JSONada nos arquivos do return-player.ts")
      return response
    }