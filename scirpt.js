let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-IN"
    
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
   if (hours >= 4 && hours < 12) {
    speak("Good Morning, have a good day");
}
else if (hours >= 12 && hours < 16) {
    speak("Very Good Afternoon");
}
else if (hours >= 16 && hours < 20) {
    speak("Good Evening");
}
else {
    speak("Good Night, sweet dreams");
}
    
}
  window.addEventListener('load',()=>{
            wishMe();
    });
    

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript 
    console.log(event)
    takeCommand(transcript.toLowerCase());

}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if (
    message.toLowerCase().includes("hi") ||
    message.toLowerCase().includes("hello") ||
    message.toLowerCase().includes("hey")
) {
    speak("Hello, what can I help you with?");
}
else if (message.toLowerCase().includes("who are you")) {
    speak("I am a virtual assistant, created by Ankita ma'am");
}
else if (message.toLowerCase().includes("open youtube")) {
    speak("Opening YouTube for you");
    window.open("https://www.youtube.com");
}
else if (message.toLowerCase().includes("open google")) {
    speak("Opening Google for you");
    window.open("https://www.google.com");
}
else if (message.toLowerCase().includes("time")) {
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
}
else if (message.toLowerCase().includes("date")) {
    let date = new Date().toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
    speak(date);
}

else if (message.toLowerCase().includes("open calculator")) {
    speak("Opening calculator for you");
    window.open("https://www.desmos.com/scientific","_blank");
}
else if (message.toLowerCase().includes("open whatsapp")) {
    speak("Opening WhatsApp for you");
    window.open("https://web.whatsapp.com", "_blank"); 
}
else if (message.toLowerCase().includes("open instagram")) {
    speak("Opening Instagram for you");
    window.open("https://www.instagram.com", "_blank"); 
}
else if (message.toLowerCase().includes("open facebook")) {
    speak("Opening Facebook for you");
    window.open("https://www.facebook.com", "_blank"); 
}
else {
    let query = message.replace("momo", "");
    let finalText = "This is what I found on the internet regarding " + query;
    speak(finalText);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
}

}




