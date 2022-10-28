function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function MarkAbsent(reg){
    var found = getElementByXpath(`//tr[contains(@data-id, "one2many_v_id_")]//td[@data-field="student_id" and text()="${reg}"]`);
    if(found){
        found.click();
        
        setTimeout(function() {
            var attStatus = getElementByXpath(`//select[@name="status"]`);
            
            attStatus.value = '"Absent"';
            var saveBtn = getElementByXpath('//div[@class="modal-footer"]//button[@type="button" and text()="Save"]')
            
            saveBtn.click();
        }, 4000);
    }
}

var time = 1000;
function main(){
    var absentList = regNumbers.split(/(?:,| |\n)+/)
    absentList = absentList.filter(Boolean);
    
    for(var reg of absentList){
        setTimeout(MarkAbsent(reg),time);
        time=time+4000;
        // console.log(reg);
    }
    alert(`Successfully! Marked Absent of ${absentList.length} Students`);
}
main();