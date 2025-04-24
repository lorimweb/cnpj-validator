function validaCNPJ(cnpj) {
  var multiplicador1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  var multiplicador2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  var digitosIdenticos = true;
  var ultimoDigito = 0;
  var posicao = 0;
  var totalDigito1 = 0;
  var totalDigito2 = 0;

  const isValidInput = (c) => {
    return /[0-9A-Z]/.test(c);
  };

  for (const c of cnpj.value) {
    if (isValidInput(c)) {
      const digito = c.charCodeAt(0) - "0".charCodeAt(0);

      if (posicao !== 0 && ultimoDigito !== digito) {
        digitosIdenticos = false;
      }

      ultimoDigito = digito;

      if (posicao < 12) {
        totalDigito1 += digito * multiplicador1[posicao];
        totalDigito2 += digito * multiplicador2[posicao];
      } else if (posicao === 12) {
        let dv1 = totalDigito1 % 11;
        dv1 = dv1 < 2 ? 0 : 11 - dv1;

        if (digito !== dv1) {
          return false;
        }

        totalDigito2 += dv1 * multiplicador2[12];
      } else if (posicao === 13) {
        let dv2 = totalDigito2 % 11;
        dv2 = dv2 < 2 ? 0 : 11 - dv2;

        if (digito !== dv2) {
          return false;
        }
      }
      posicao++;
    }
  }

  return posicao === 14 && !digitosIdenticos;
}

module.exports = { validaCNPJ };
