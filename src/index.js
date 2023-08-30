module.exports = function reverse (n) {
  let result = ''
  const processedN = n.toString()
  const nLenght = processedN.length
  for (let i = 0; i < nLenght; i++) {
    if (processedN[i] == '-') {
      i++
    }
    result = `${processedN[i]}${result}`
  }
  return result
}
