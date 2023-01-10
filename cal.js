
let string = "";

let buttons = document.querySelectorAll('.b1');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'A'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            if(e.target.innerHTML == '÷'){
                string += '/';
            }
            else if(e.target.innerHTML == '^'){
                string += '**';
            }
            else if(e.target.innerHTML == 'X'){
                string += '*';
            }
            else{
                string = string + e.target.innerHTML;
            }
            document.querySelector('input').value = string;
        }
    })

});


// prompt("What !")

