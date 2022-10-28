//when i click on my button
document.getElementById('fillForm').addEventListener('click', function(){
    //grab the text filed value from my tool
    var Value = document.getElementById('absenties').value;

    chrome.tabs.executeScript({
        //send the value to be used by our script
        code: `var regNumbers = ${JSON.stringify(Value)};`
    }, function() {
        //run the script in the file injector.js
        chrome.tabs.executeScript({
            file: 'injector.js'
        });
    });
  });