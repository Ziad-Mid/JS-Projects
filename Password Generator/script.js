const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea')
    const pass = resultEl.innerText

    if(!pass){return}

    textarea.value = pass
    document.body.appendChild(textarea)
    textarea.select()
    navigator.clipboard.writeText(textarea.value);
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', ()=>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
   
    resultEl.innerText = generatePass(hasLower,hasUpper,hasNumber,hasSymbol,length)
})

function generatePass(lower,upper,number,symbol,length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0){
        return ''
    }

    for(let i=0 ; i<length ; i+=typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPass = generatedPassword.slice(0, length)

    return finalPass
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
