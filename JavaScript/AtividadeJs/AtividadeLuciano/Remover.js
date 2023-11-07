let inputString = "Exemplo";
let posicaoParaRemover = 2;

if (posicaoParaRemover >= 0 && posicaoParaRemover < inputString.length) {
    let caractereRemovido = inputString.charAt(posicaoParaRemover);
    let stringModificada = "";

    for (let i = 0; i < inputString.length; i++) {
        if (i !== posicaoParaRemover) {
            stringModificada += inputString[i];
        }
    }

    console.log("Caractere removido: " + caractereRemovido);
    console.log("String modificada: " + stringModificada);
} else {
    console.log("Posição inválida.");
}
