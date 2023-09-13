const chalk=require("chalk");

const http=require("http");
const host="localhost";
const puerto="8000";

const servidor=http.createServer(function(llamado,respuesta){
    respuesta.writeHead(200,{"Content-Type":"application/json"});
    respuesta.end(JSON.stringify({
        "nombre":"Daniel Salinas Jaramillo",
        "mensaje":"Servidor con nodeJs"
    }));
});

servidor.listen(puerto,host,function(){
    console.log(chalk.green("El servidor esta corriendo: "+host+":"+puerto));
});