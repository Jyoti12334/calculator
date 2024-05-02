let inputBox =document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')
let string =''
buttons.forEach(ele =>{
    ele.addEventListener('click' ,(b) =>{
        if(b.target.innerText == '='){
            string =String(eval(string))
            inputBox.value =string;
        } 
        else if(b.target.innerText == 'AC'){
string =''
inputBox.value =string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value =string;
                    }
                    else if(b.target.id =='plusminus'){
                        string = String(-eval(string))
                        inputBox.value =string;
                                }
                                else if (b.target.id === 'percentage') {
                                    let percentage = eval(string) / 100;
                                    string = String(percentage);
                                    inputBox.value = string;}

        else{
            string += b.target.innerText

inputBox.value =string        }
    })
})