import express from 'express'
import { router } from './routes'


    export function create(){
        console.log("Agora se eu estou certo devo vir para o app.ts")
        const app = express()
        const port = process.env.PORT

        app.use(express.json())
        
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })

        app.use("/api",router)

        return app
    }