var userInn = '10810200300758';
var firstNum = Number(userInn[0])
if (userInn.length === 14 && (firstNum === 0 || firstNum === 1 || firstNum === 2)){
    console.log('ИНН найден')
}else{
    alert ('ИНН не найден')
}
//swith..case
switch (4-2){
    case 1:
        console.log('результат 1')
        break
    case 2:
        console.log('результат 2')
        break
    case 3 :
        console.log('результат 3')
        break
    default:
        console.log('error')
}

switch (new Date().getDay()){
    case 1:
        console.log('понедельник')
        break
    case 2:
        console.log('вторник')
        break
    case 3:
        console.log('среда')
        break
    case 4:
        console.log('четверг')
        break
    case 5:
        console.log('пятница')
        break
    case 6:
        console.log('суббота')
        break
    case 7:
        console.log('воскресенье')
        break
}
//4) undefined
let address2
console.log(address2)
//5) null
var address = null
console.log(address)
console.log(typeof address)

//6)object
var user = {
    name : 'Nadiya',
    phoneNumber: 996555555555,
    secondNumber: null,
    address: undefined ,
    isMarried:false,
    profession : {
        d:{
            f:{
                g:{
                    s: 's'
                }
            }
        }
    }
}
console.log(user)
console.log(user.name)
console.log(user.profession.d.f.g.s)

// добавление
user.Laptop = true
console.log(user)
// удаление
delete user.phoneNumber
console.log(user)
// изменение
user['name'] = 'kama'
console.log(user)
// методы
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('name'))


