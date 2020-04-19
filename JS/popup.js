document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('start').addEventListener('click', ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
            chrome.tabs.reload(arrayOfTabs[0].id);
        });
    })
});
