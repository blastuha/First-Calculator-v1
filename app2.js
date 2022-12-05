let a = ''
let b = ''
let sign = ''
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '÷', '+/-']

// экран
const out = document.querySelector('.screen')

function clearAll() {
  a = ''
  b = ''
  sign = ''
  finish = false
  out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.calc-grid').onclick = (event) => {
  if (!event.target.classList.contains('button')) return
  if (event.target.classList.contains('ac')) return

  if (out.textContent.length >= 9) {
    out.classList.add('screen-small')
  }
  if (out.textContent.length >= 18) {
    return
  }

  out.textContent = ''

  const key = event.target.textContent

  if (digit.includes(key)) {
    if (sign === '') {
      a += key
      out.textContent = a
    } else if (a !== '' && b !== '' && finish) {
      finish = false
      b = ''
      b += key
      out.textContent = b 
    } else {
      b += key
      out.textContent = b
    }
  }

  if (action.includes(key)) {
    if (key === '+/-') {
      if (!sign) {
        a = -a
        out.textContent = a
      } else if (a && b && finish) {
        a = -a
        out.textContent = a
      } else {
        b = -b
        out.textContent = b
      }
    } else {
      sign = key
      out.textContent = sign
    }
  }

  // нажата =
  if (key === '=') {
    if (b === '') {
      b = a
    }
    switch (sign) {
      case '+':
        a = (+a) + (+b)
        out.textContent = a
        break
      case '-':
        a = (+a) - (+b)
        out.textContent = a
        break
      case 'X':
        a = (+a) * (+b)
        out.textContent = a
        break
      case '÷':
        if (b === '0') {
          out.textContent = '0'
          a = ''
          b = ''
          sign = ''
          return
        }
        a = (+a) / (+b)
        out.textContent = a
        break
    }
    finish = true
  }

  console.log({a, sign, b, finish})
}