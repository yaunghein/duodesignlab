function checkWords(a, b) {
  a = a.toLowerCase()
  b = b.toLowerCase()
  for (let c of a) {
    if (!b.includes(c)) return false
    a = a.replace(c, '')
    b = b.replace(c, '')
  }

  return a === b
}

// console.log(checkWords('java', 'jawa'))
// console.log(checkWords('csharp', 'csharpp'))
console.log(checkWords('cshaRp', 'csharp'))
