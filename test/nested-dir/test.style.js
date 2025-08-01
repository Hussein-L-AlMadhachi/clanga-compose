import { Style , Flex } from "../../clanga.js"


Style( "flex-box" , {
    xs : Flex().use({ gap:"2px" , mode:"row" })
        .align({ xcenter:true ,  ycenter:true })
        .shape({ w:"100%" , h:"50px" }),
    xl : Flex().use({ gap:"2px" , mode:"row" })
        .align({ xcenter:true ,  ycenter:true })
        .shape({ w:"300px" , h:"50px" }),
})

