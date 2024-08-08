const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";
const Textinput = document.querySelector(".search-box input");
const SearchBtn = document.querySelector(".btn");
const searchHeading = document.querySelector(".searchhead");
const audioBtn = document.querySelector(".speak");
const meaningOfWord = document.querySelector(".meaning");
const exampleOfWord = document.querySelector(".example");
const audioClip = document.querySelector("#sound");
const dparaOne = document.querySelector(".dpara");
const dparaTwo = document.querySelector(".samlepara");



SearchBtn.addEventListener("click", async ()=>{
    const word = Textinput.value;
    searchHeading.innerHTML = `${word}`
    console.log(word);
    const response = await fetch(`${baseUrl}/${word}`);
    const data = await response.json();
    console.log(data);
    dparaOne.innerHTML = `${data[0].meanings[0].partOfSpeech}`;
    dparaTwo.innerHTML = `${data[0].phonetic}`;
    meaningOfWord.innerHTML = `${data[0].meanings[0].definitions[0].definition}`
    exampleOfWord.innerHTML = `${data[0].meanings[0].definitions[0].example || " "}`
   audioClip.setAttribute("src", `${data[0].phonetic[0].audio}`)
   
   
    
})
function playsound(){
    audioClip.play();
}
