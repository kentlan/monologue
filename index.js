const textArea = document.getElementById('src')
const split = document.getElementById('split')
const swap = document.getElementById('swap')
const output = document.getElementById('output')

console.log('hehehe');

const getValue = () => textArea.value

const filterWords = number => {
  const parsedText = getValue().split(' ')
  const newArr = parsedText.map((value, index, Arr) => {
    return (index + number) % 2 == 0 ? value : '?'.repeat(value.length)
  })
  return newArr.join(' ')
}

split.addEventListener('click', () => output.innerHTML = filterWords(0))
swap.addEventListener('click', () => output.innerHTML = filterWords(1))
