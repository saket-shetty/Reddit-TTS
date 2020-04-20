setInterval(mainFun, 500);

function mainFun() {
    var data = document.getElementsByTagName("P");
    var topic = document.getElementsByClassName("_eYtD2XCVieq6emjKBH3m");
    myFunction(topic[0].innerHTML);
    for (var x = 0; x < data.length; x++) {
        document.getElementsByClassName('Nb7NCPTlQuxN_WDPUg5Q2')[0].click();
        var comments = data[x].innerHTML;
        if(!comments.includes("more reply") && !comments.includes("more replies")){
            myFunction(data[x].innerHTML);
        }
    }
}

function myFunction(element) {
    var msg = new SpeechSynthesisUtterance(element);
    window.speechSynthesis.speak(msg);
}
