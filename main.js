import morseCode from "./morse.js";
import {
  translateToMorse,
  translateToEnglish
} from "../function.js";



const input = document.querySelector("#main__entry")
const output = document.querySelector("#main__output")
const reset = document.querySelector("#reset")
const swap = document.querySelector("#swap")

const engToMorse = document.querySelector(".engToMorse")
const morseToEng = document.querySelector(".morseToEng")

engToMorse.addEventListener("click", () => {
  const textToTranslate = input.value
  output.value = translateToMorse(textToTranslate, morseCode)

})

morseToEng.addEventListener("click", () => {
  output.value = translateToEnglish(input.value, morseCode)
})

reset.addEventListener("click", () => {
  input.value = ""
  output.value = ""
})

swap.addEventListener("click", () => {
  const E2M = document.querySelector("#EngToMorse")
  const M2E = document.querySelector("#MorseToEng")
  const howto = document.querySelectorAll(".howto")
  const translate = document.querySelectorAll(".main__translate")
  E2M.classList.toggle("invisible")
  M2E.classList.toggle("invisible")
  howto.forEach(element => {
    element.classList.toggle("invisible")
  });
  translate.forEach(element => {
    element.classList.toggle("invisible")
  });
  input.value = ""
  output.value = ""
})