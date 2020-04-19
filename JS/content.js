setInterval(mainFun, 500);

function mainFun() {
    var data = document.getElementsByTagName("P");
    for (var x = 0; x < data.length; x++) {
        document.getElementsByClassName('Nb7NCPTlQuxN_WDPUg5Q2')[0].click();
        myFunction(data[x].innerHTML);
    }
}

function myFunction(element) {
    var msg = new SpeechSynthesisUtterance(element);
    window.speechSynthesis.speak(msg);
}
