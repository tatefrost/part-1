//program not working

alphabet = ["w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let decoded = []
list = 'EHKRAZNULKCNWLDV'
const decipher = code => {
  code = code.toLowerCase()
  code = code.split('')
  console.log(code)
  for (let i = 0; i < code.length; i++){
    let found = alphabet.find(el => code[i] === el)
    console.log(found)
    decoded.push(found)
  }
    decoded = decoded.join('')
    return decoded
}

console.log(decipher(list));