
function applyButton(){
    let bgcolor=document.getElementById('bgColorInput').value;
let fontcolor=document.getElementById('fontColorInput').value;
let fontSize=document.getElementById('fontSizeInput').value;
let fontWeight=document.getElementById('fontWeightInput').value;
let padding=document.getElementById('paddingInput').value;
let borderRadius=document.getElementById('borderRadiusInput').value;

    
    document.getElementById('customButton').style.backgroundColor=bgcolor;
    document.getElementById('customButton').style.color=fontcolor;
    document.getElementById('customButton').style.fontSize=fontSize;
    document.getElementById('customButton').style.fontWeight=fontWeight;
    document.getElementById('customButton').style.padding=padding;
    document.getElementById('customButton').style.borderRadius=borderRadius;
}
