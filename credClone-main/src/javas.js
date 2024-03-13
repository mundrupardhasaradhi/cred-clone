let custButton = document.getElementById("customButton");
let bgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let paddingValue = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");

function applyButton(){
    let bg_Color=bgColor.value;
    let font_Color = fontColor.value;
    let font_size = fontSize.value;
    let font_Weight = fontWeight.value;
    let padding_Value = paddingValue.value;
    let border_radius = borderRadius.value;
    
    custButton.style.backgroundColor = bg_Color;
    custButton.style.color= font_Color;
    custButton.style.fontSize= font_size;
    custButton.style.fontWeight=font_Weight;
    custButton.style.padding= padding_Value;
    custButton.style.borderRadius= border_radius;
    
    
}