/*Função para indentificar se é primo ou não primo*/
function numPrimo(primo){
  if (primo <= 1) return false;
    if (primo <= 3) return true;  

    // Se o número é divisível por 2 ou 3, não é primo
    if (primo % 2 === 0 || primo % 3 === 0) return false;

    // Verifica os números a partir de 5 até a raiz quadrada do número
    for (let i = 5; i * i <= primo; i += 6) {
        if (primo % i === 0 || primo % (i + 2) === 0) return false;
    }

    return true;
}

function numPar(par){
  return par % 2 === 0;
}


module.exports = class controllerNumbers {
  static async postPar(req, res) {
    const { number } = req.body;
    /*Conferir se o número é par ou impar */
    if (typeof number !== "number") {
      res.status(400).json({ message: "Digite um número" });
    }
    else{
      if(numPar(number)){
        res.status(200).json({message: "Número par!!"});
      }
      else{
        res.status(200).json({message: "Número impar!!"});
      }
    } 
  }
  /*Conferir se o número é primo ou não primo*/
  static async postPrimo(req, res) {
    const { number } = req.body;
    if (typeof number !== "number") {
      res.status(400).json({ message: "Digite um número" });
    }
    else{
      if(numPrimo(number)){
        res.status(200).json({message: "Número primo!!"});
      }
      else{
        res.status(200).json({message: "Número não primo!!"});
      }
    } 
  }


 
  static async getNumbers(req, res){
    res.status(200).json({nome:"number"})
  }
};