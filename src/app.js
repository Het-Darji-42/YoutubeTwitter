import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" 

const app = express()

//More Details At Last 

    app.use(cors({                                   
        origin : process.env.CORS_ORIGIN,         
        credentials : true
    }))  

    app.use(express.json( {limit: "16kb"} ))

    app.use(express.urlencoded( {extended: true, limit: "16kb"} ))

    app.use(express.static("public")) 


export {app}







// = // app.use(cors())
// app.use(cors({                                 // cors setting: FRONTEND THI KAI KAI JAGYA AE THI REQUEST ACCESS KARVANI CHHE   
//     origin : process.env.CORS_ORIGIN,         // LINK FRONTEND NI 
//     credentials : true
// }))   


// app.use(express.json(
//     {limit: "16kb"}
// ))


// = //Url se data aye jem ke het+Darji || het%20Darji
// app.use(express.urlencoded({
//     extended: true,       // mOST OF TIME AA USE NAI THAY  [Use: object no object use karva ]
//     limit: "16kb"
// }))

//=  //Koi image ke koi link avi and apde ane apda server ma store karva mangta hoiye to "PUBLIC FOLDER MA THAY "
// app.use(express.static("public"))  

