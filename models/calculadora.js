function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os parâmetros devem ser números");
  }
  return a + b;
}

exports.somar = somar;
//module.exports = { somar }; No momento não será utilizado devido a versão do jest atual não suportar
