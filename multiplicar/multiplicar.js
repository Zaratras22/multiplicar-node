const { rejects } = require('assert');
// requireds
const fs = require('fs');

const colors = require('colors');

const { resolve } = require('path');


let listarTabla = (base, limite) => {

    console.log('====================='.green);
    console.log(`== TABLA DE ${base}==`.green);
    console.log('====================='.green);

    for(let i = 1; i<=limite;i++){
        console.log(`${base} * ${i} = ${base*i}`);
        }

}

let crearArchivo = (base, limite) =>{
    return new Promise ((resolve, rejects)=>{

        if(!Number(base)){
            rejects(`El valor introdduccido ${base} no es un numero`);
            return;
        }

        let data = '';

        // 2*1 =2
        // 2*2=4
        //2*3*=6
        
        for(let i = 1; i<=limite;i++){
        data += `${base} * ${i} = ${base*i}\n`;
        }
        
        
        fs.writeFile(`tablas/tabla-0${base}.txt`, data, (err) => {
          if (err)
           rejects (err)
          else
            resolve(`tabla-0${base}.txt`);
          
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}

