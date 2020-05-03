mainFunction();

async function mainFunction(){
    let domObject = document.getElementsByTagName("P");
    var topic = document.getElementsByClassName("_eYtD2XCVieq6emjKBH3m");
    myFunction(0, topic[0].innerHTML);
    for(var i=0; i<domObject.length; i++){
        let message = domObject[i].innerHTML;
        if(i != 0){
            document.getElementsByTagName("P")[i-1].style.color = 'white';
        }
        if(!message.includes("more replies") && !message.includes("more reply")){
            await myFunction(i, message);
        }
    }
}

async function myFunction(index, message) {
    let audio = new SpeechSynthesisUtterance(message);
    synth = window.speechSynthesis;
    synth.speak(audio);
    document.getElementsByTagName("P")[index].style.color = 'red';
    return new Promise(resolve => {
        audio.onend = resolve;
    });
}
