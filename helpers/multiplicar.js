const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5,listar = false,hasta =10) =>{
        try {
        let consola='';
        let salida='';
        for(let i = 1 ; i <= hasta;i++){
            consola += base + 'x'.random+ i+'='.random + base*i +'\n';
            salida += `${base} x ${i} = ${base*i}\n`;
        }
    
        if(listar){
            console.log('============='.bgBlack);
            console.log(' TABLA DEL'.rainbow,base)
            console.log('============='.bgBlack);
            console.log(consola);
        }
        
        nombreArchivo=`tabla-${base}.txt`
        fs.writeFileSync(`./salida/${nombreArchivo}`,salida);
        
        return nombreArchivo

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}