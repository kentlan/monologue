const textArea = document.getElementById('src')
const split = document.getElementById('split')
const swap = document.getElementById('swap')
const original = document.getElementById('original')
const output = document.getElementById('output')

const getValue = () => textArea.value

const filterWords = number => {
  output.innerHTML = ''
  const parsedText = getValue().split(' ')
  const newArr = parsedText.map((value, index, Arr) => {
    return (index + number) % 2 == 0
      ? value
      // : '_'.repeat(value.length)
      : `<span class="hidden">${value}</span>`
  })
  return `<p>${newArr.join(' ')}</p>`
}

split.addEventListener('click', () => output.insertAdjacentHTML('beforeend', filterWords(0)))
swap.addEventListener('click', () => output.insertAdjacentHTML('beforeend', filterWords(1)))

original.addEventListener('click', () => output.innerHTML = getValue())
