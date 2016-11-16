var random = Math.floor((Math.random() * 100) + 1);
 if(random < 10){
    chrome.runtime.sendMessage({type:'request_password'});
}