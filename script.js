let keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 92, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 47, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];

let div = document.createElement('div');
div.className="keyboard";

let textarea = document.createElement('textarea');
textarea.className = "textarea";

document.body.append(textarea);
document.body.append(div);

function init(){
    let output = "";
    for(let i = 0; i < keyboard.length; i++){
        if(keyboard[i] == 8){
            output += '<div class="key double-btn" >Backspace</div><div class="clearfix"></div>';
        }
        else if(keyboard[i] == 9){
            output += '<div class="key double-btn" >Tab</div>';
        }
        else if(keyboard[i] == 20){
            output += '<div class="key double-btn" >Caps Lock</div>';
        }
        else if(keyboard[i] == 46){
            output += '<div class="key" >Del</div><div class="clearfix"></div>';
        } 
        else if(keyboard[i] == 13){
            output += '<div class="key double-btn" >Enter</div><div class="clearfix"></div>';
        }
        else if(keyboard[i] == 16){
            output += '<div class="key double-btn" >Shift</div>';
        } 
        else if(keyboard[i] == 17){
            output += '<div class="key" >Ctrl</div>';
        } else {
        output += '<div class="key" >' + String.fromCharCode(keyboard[i]) + '</div>';
        }
    }
    document.querySelector('.keyboard').innerHTML = output;
}

document.onkeypress = function(e){
    console.log(e.keyCode + ' ' + e.key + ' ' + e.code);
}

init();