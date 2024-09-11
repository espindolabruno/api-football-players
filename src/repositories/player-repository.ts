import { PlayerModel } from "../models/player-model"


const database: PlayerModel[] = [
    { id: 1, name: "Messi", position: "forward", team: "Al Hilal" },
    { id: 2, name: "Ronaldo", position: "midfielder", team: "Barcelona" },
    { id: 3, name: "Neymar", position: "defender", team: "Paris Saint-Germain" },
    { id: 4, name: "Mbappé", position: "forward", team: "Paris Saint-Germain" },
    { id: 5, name: "Lewandowski", position: "forward", team: "Barcelona" },
    { id: 6, name: "Modric", position: "midfielder", team: "Real Madrid" },
    { id: 7, name: "Benzema", position: "forward", team: "Al-Ittihad" },
    { id: 8, name: "Kroos", position: "midfielder", team: "Real Madrid" },
    { id: 9, name: "Casemiro", position: "midfielder", team: "Manchester United" },
    { id: 10, name: "Haaland", position: "forward", team: "Manchester City" },
    { id: 11, name: "Kane", position: "forward", team: "Bayern Munich" },
    { id: 12, name: "Vini Jr.", position: "forward", team: "Real Madrid" },
    { id: 13, name: "Salah", position: "forward", team: "Liverpool" },
    { id: 14, name: "De Bruyne", position: "midfielder", team: "Manchester City" },
    { id: 15, name: "Bruno Fernandes", position: "midfielder", team: "Manchester United" },
    { id: 16, name: "Pogba", position: "midfielder", team: "Juventus" },
    { id: 17, name: "Gündogan", position: "midfielder", team: "Barcelona" },
    { id: 18, name: "Van Dijk", position: "defender", team: "Liverpool" },
    { id: 19, name: "Alisson", position: "goalkeeper", team: "Liverpool" },
    { id: 20, name: "Oblak", position: "goalkeeper", team: "Atletico Madrid" },
    { id: 21, name: "Rúben Dias", position: "defender", team: "Manchester City" },
    { id: 22, name: "Hakimi", position: "defender", team: "Paris Saint-Germain" },
    { id: 23, name: "Alexander-Arnold", position: "defender", team: "Liverpool" },
    { id: 24, name: "Rodri", position: "midfielder", team: "Manchester City" },
    { id: 25, name: "Griezmann", position: "forward", team: "Atletico Madrid" },
    { id: 26, name: "Müller", position: "forward", team: "Bayern Munich" },
    { id: 27, name: "Lautaro Martínez", position: "forward", team: "Inter Milan" },
    { id: 28, name: "Pedri", position: "midfielder", team: "Barcelona" },
    { id: 29, name: "João Cancelo", position: "defender", team: "Barcelona" },
    { id: 30, name: "Foden", position: "midfielder", team: "Manchester City" }
]


export const findAllPlayers = async (): Promise<PlayerModel[]> =>{
return database
}

export const findPlayeriId = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
}

export const createPlayer = async (player:PlayerModel) => {
    const id = database[database.length - 1].id +1
    
    const newPlayer : PlayerModel={
        id,
        name: player.name,
        position: player.position,
        team: player.team,
    }

      database.push(newPlayer)
      return newPlayer
}

export const DeletePlayerById = async (playerId:number) => {
    const index = database.findIndex((player) => player.id === playerId)
    const playerSelected = database[index]

    if(index!== -1){
        database.splice(index, 1)
    }
    return playerSelected
}

export const updatePlayerById = async (playerId:number, player:PlayerModel) => {
    const index = database.findIndex((player) => player.id === playerId)
    let updatedPlayer

    if(index !== -1){
      updatedPlayer = Object.assign(database[index], player)
    }


    return updatedPlayer
}