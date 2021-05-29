const argv = require('yargs')
            .options({
                'b':{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    description:'Es la base la tabla de multiplicar'
                },
                'l':{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe:'Muestra por consola la tabla'
                },
                'h':{
                    alias:'hasta',
                    type:'number',
                    demandOption:false,
                    default:10,
                    describe:'Es hasta donde se multiplica la base'
                },
                'v':{
                    alias:'version',
                }
            })
            .check((argv, options)=>{
                if(isNaN(argv.base)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .argv;

module.exports = argv;