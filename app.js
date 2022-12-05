const signs = ['+', '-', 'X', '÷']

let screen = document.querySelector('.screen')

// const buttons = document.querySelectorAll('.button')
const keys = document.querySelectorAll('.figure')
const actions = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals')

const a = ''
const b = ''
const sign = ''
const equalsInputed = ''


function calculation(a, sign, b) {

  keys.forEach((key) => {
  
    key.addEventListener('click', (event) => {
      if (sign === '') {
        a += event.target.textContent
        screen.textContent = a
        console.log(a)
      }

      if (sign !== '' && a !== '') {
        b += event.target.textContent
        screen.textContent = b
        console.log(b)
      }

    })
  })


  actions.forEach((action) => {
    action.addEventListener('click', (event) => {

      sign = event.target.textContent
      screen.textContent = sign
      console.log(sign)

    })
  })

  equals.addEventListener('click', (event) => {
    if (event.target.textContent === '=') {
      switch (sign) {
        case '+':
          screen.textContent = +a + +b
          break
        case '-':
          screen.textContent = +a - +b
          sign = ''
          b = ''
          break
        case 'X':
          screen.textContent = +a * +b 
          sign = ''
          break
        // case '÷':
        //   screen.textContent = +a / +b
      }
    }

    function reset() {
      a = ''
      b = ''
      sign = ''
    }

    reset()

})

} //end function

calculation(a, sign, b)













