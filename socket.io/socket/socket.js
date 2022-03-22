let io;
module.exports={
    init:(server)=>{
         io=require('socket.io')(server,
          {
               cors: {
                 origin: "*",
                 methods: ["GET", "POST"],
                 allowedHeaders: ["my-custom-header"],
                 credentials: true
               }
             })
         return io;


    },
    getIO:()=>{
        if(!io)
        {
             throw new Error('Socket.io is not initialized ')

        }


     //    console.log("We are  not getting error  ",io);
                return io
        
    }
}