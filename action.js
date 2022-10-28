//when i click on my button
document.getElementById('fillForm').addEventListener('click',  async() => {
    //grab the text filed value from my tool
    var Value = document.getElementById('absenties').value;
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        args: [{Value}],
        func: vars => Object.assign(self, vars),
      }, () => {
        chrome.scripting.executeScript({target: {tabId: tab.id}, files: ['injector.js']});
      });
    
});