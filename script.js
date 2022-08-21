const inputEl = document.getElementById("input_el")
const convertBtn = document.getElementById("convert_btn")
let convertLength =document.getElementById("convert_length")
let convertVolume = document.getElementById("convert_volume")
let convertMass = document.getElementById("convert_mass")

convertBtn.addEventListener("click", function() {
  const converted = inputEl.value;
  convertLength.textContent = `
          ${converted} M = ${Number(converted * 3.281).toFixed(3)} Feet | ${converted} Feet = ${Number(converted / 3.281).toFixed(3) } M
  `
  convertVolume.textContent = `
         ${converted} L = ${Number(converted * 0.264).toFixed(3)} Gallons | ${converted} Gallons = ${Number(converted / 0.264).toFixed(3) } L
  `
  convertMass.textContent = `
         ${converted} Kg = ${Number(converted * 2.204).toFixed(3)} Pounds | ${converted} Pounds = ${Number(converted / 2.204).toFixed(3) } Kg
  `
})