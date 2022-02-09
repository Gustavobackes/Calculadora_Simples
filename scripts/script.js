function calcular(n1, n2) {
  n1 = parseFloat(document.getElementById('n1').value)
  n2 = parseFloat(document.getElementById('n2').value)

  selector = document.getElementById('selector').value
  switch (selector) {
    case '+':
      calculo = n1 + n2
      document.getElementById('result').innerHTML = `${n1} + ${n2} = ${calculo}`
      break
    case '-':
      calculo = n1 - n2
      document.getElementById('result').innerHTML = `${n1} - ${n2} = ${calculo}`
      break
    case '/':
      calculo = n1 / n2
      if (Number.isNaN(calculo) || (n2 = '0')) {
        document.getElementById('result').innerHTML =
          'insira um divisor valido!'
        break
      } else {
        document.getElementById(
          'result'
        ).innerHTML = `${n1} / ${n2} = ${calculo}`
        break
      }

    case '*':
      calculo = n1 * n2
      document.getElementById('result').innerHTML = `${n1} x ${n2} = ${calculo}`
      break
  }
}
