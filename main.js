let array = []

for(i = 0; i < Infinity; i++){
    let action = prompt('Выберите действие: add/del?');
    let divide = action.split(', ')
    let command = divide[0]
    let word = divide[1]
    if(command == 'add'){
        array.push(word)
    }
    else if(command == 'del'){
        for(let key in array){
            word == array[key] ? array.splice(key,1) : '';
        }
    }
    if(command == 'stop'){
    break;
    }
    console.log(array);
}

