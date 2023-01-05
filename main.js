let array = []

for(i = 0; i < Infinity; i++){
    let command = prompt('Выберите действие: add/del?')
    if(command == 'add'){
        let add = prompt('Добавить элемент')
        array.unshift(add);
        console.log(array);
    }else if(command == 'del'){
        let key = prompt('Удалить элемент')
        array.splice(key,1)
        console.log(array);
    }else if(command == 'stop'){
        break;
    }
}
console.log(array);
