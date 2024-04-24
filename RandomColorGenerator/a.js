let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];
 let list_length=bgColorsArray.length;
 let random_color;
function buttonOn(){
     let random_index=Math.floor(Math.random() * list_length);
     random_color=bgColorsArray[random_index];
     
     document.getElementById('bgContainer').style.backgroundColor=random_color;
}
