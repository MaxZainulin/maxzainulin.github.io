"use strict"

window.onload = ()=>
{

const name = prompt("Пожалуйста, представьтесь?", "Имя");
   alert("Добро пожаловать, " + name);


const age = prompt("Подтвердите, что вы совершеннолетний! Укажите ваш возраст!", "Возраст");
if(age >= 18) {
    alert("Вам есть 18 :)");
}else {
    alert("Приходите позже, вам нет 18 :( ");
}  


/*
Выбор
Тип сайта (Портал, Визитка, Промо, Каталог, Магазин, другое...)
дизайн (Простой, сложный, интернет-магазин)
адаптивность (Да/Нет)
*/


/*
var userChoice
var typeSite = 'Какой тип сайта? (Портал, Визитка, Промо, Каталог, Магазин, другое...)';
var choises = ["Портал", "Визитка" , "Каталог", "Магазин", "Другое"];
while ((userChoice = prompt(typeSite)) && choises.indexOf(userChoice) === -1); 
*/

/* 
if (choises == "Портал"){
    alert("Стоимость = " + 100 + " RUB")
} else {
alert ("Стоимость = " + 1111 + " RUB")
};
*/


/* 
function typeSite (){
    name0 = "Портал", price = 1000,
    name1 = "Визитка", price1 = 500,
    name2 = "Промо", price2 = 500,
    name3 = "Каталог", price3 = 800,
    name4 = "Магазин", price4 = 2000,
    name5 = "Другое", price5 = 100, 
}; 
*/

/*
 function calculator (){
    let card = "Визитка";
    let portal = "Портал";
    let catalog = "Каталог";
    let onlineShop = "Интернет-Магазин";
    let otherType = "Другое";
    let sum;
    let some = prompt("Какой тип сайта? (Портал, Визитка, Каталог, Магазин, Другое)")
    /*
    if (some == card) {
        alert(sum = 1000 + " RUB");
    }
}*/


let costBuild = 0;
//let deadlineBuild = 0;

function typeSite() {
    let userChoice1 = prompt("Какой тип сайта? (Портал, Визитка, Каталог, Магазин, Другое)");
    if (userChoice1 == "Портал"){
        costBuild = 500;
        //deadlineBuild = 1;
    } else if (userChoice1 == "Визитка"){
        costBuild = 200;
        //deadlineBuild = 2;
    } else if (userChoice1 == "Каталог"){
        costBuild = 600;
        //deadlineBuild = 1;
    } else if (userChoice1 == "Магазин"){
        costBuild = 1000;
        //deadlineBuild = 3;
    } else if (userChoice1 == "Другое"){
        costBuild = 100;
        //deadlineBuild = 1;
    }
    return costBuild;
}

    let costDesign = 0;
    //let deadlineDesign = 0;

    function designSite(){
        let userChoice2 = prompt("Какой дизайн сайта? (Минимализм, Стандарт, Средний, Балдежный)");
        if (userChoice2 == "Минимализм"){
            costDesign = 250;
            //deadlineDesign = 1;
        } else if (userChoice2 == "Стандарт"){
            costDesign = 400;
            //deadlineDesign = 1;
        } else if (userChoice2 == "Средний"){
            costDesign = 800;
            //deadlineDesign = 2;
        } else if (userChoice2 == "Балдежный"){
            costDesign = 1200;
            //deadlineDesign = 3;
        }
        return costDesign;
    }

    let costAdaptive = 0;
    //let deadlineAdaptive = 0;

    function adaptiveSite(){
        let userChoice3 = prompt("Нужна адаптивность? (Да, Нет)");
        if (userChoice3 == "Да"){
            costAdaptive = 800;
            //deadlineAdaptive = 2;
        } else if (userChoice3 == "Нет"){
            costAdaptive = 0;
            //deadlineAdaptive = 0;
        }
        return costAdaptive;
    }

    let costSum = typeSite(costBuild) + designSite(costDesign) + adaptiveSite(costAdaptive);
    // let adaptiveSum = typeSite(deadlineBuild) + designSite(deadlineDesign) + adaptiveSite(deadlineAdaptive);

    alert(name + " Ваш сайт будет стоить: " + costSum);

};