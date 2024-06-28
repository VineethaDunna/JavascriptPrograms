let arr = [1, 7, 3, 1, 0, 20, 77];

let updatedArray = document.getElementById('updatedArray');
let startIndex = document.getElementById('startIndexInput');
let deleteCount = document.getElementById('deleteCountInput');
let itemAdd = document.getElementById('itemToAddInput');


let spliceBtn = document.getElementById('spliceBtn');
spliceBtn.onclick = function() {
    let startIndexValue = startIndex.value;
    let deleteCountValue = deleteCount.value;
    let itemAddValue = itemAdd.value;

    if (startIndexValue === null) {
        alert("To enter the startIndex");
    } else {
        if (deleteCountValue === null) {
            deleteCountValue = 0;
        }
        arr.splice(startIndexValue, deleteCountValue, itemAddValue);
        let stringifiedArray = JSON.stringify(arr);
        console.log(arr);
        updatedArray.textContent = stringifiedArray;
    }

};
