module.exports = class controllerNumbers {
    static async postNumbers(req, res) {
        const {numero} = req.body;
        if(typeof numero == 'string'){
            res.status(400).json({massege: "INSIRA UM NÚMERO!"})
        }
        if(numero % 2 == 0){
            res.status(200).json({message: 'Número par!!!'})
        }
        else {
            res.status(400).json({massage:'Número impar'})
        }
        for(i = 2, i > numero, i++){
            if(numeros % i === 0){
                res.status(400).json({massage:'Não é primo'})
            }
            else{
                res.status(400).json({massage:'Primo'})
            }
        }
    }
}