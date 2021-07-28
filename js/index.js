document.addEventListener("DOMContentLoaded", function() {

    let score = document.getElementById('score');
    score.innerHTML = 99;

    let papper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let rock = document.getElementById('rock');
    let house = document.getElementById('house');
    let again = document.getElementById('again');


    papper.addEventListener('click',function(){
        scissors.style.display = "none";
        rock.style.display = "none";
        house.style.display = "flex";
    });

    scissors.addEventListener('click',function(){
        papper.style.display = "none";
        rock.style.display = "none";
        house.style.display = "flex";
    });

    rock.addEventListener('click',function(){
        papper.style.display = "none";
        scissors.style.display = "none";
        house.style.display = "flex";
    });
    
    // reseteamos los valores del valor final
    again.addEventListener('click',function(){
        scissors.style.display = "flex";
        rock.style.display = "flex";
        papper.style.display = "flex";
        house.style.display = "none";
    });

// -------- ahora programamos la eleccion de casa -----------------
    
    let num = Math.random(1)
    num = num * 10
    //num = Math.ceil(num)  //me retorna el valor mas cernano superior
    //num = Math.floor(num) //me retorna el valor mas cercano a inferior
    num = Math.round(num) //me retorna el valor redondeado
    num = parseInt(num)
    console.log(num)

    let eleccion_house;

    if(num < 2){
        house.innerHTML = `<img src="images/icon-paper.svg" alt=""></img>`
        house.style.border = "40px solid dodgerblue"
    }else{
        if(num == 2){
            house.innerHTML = `<img src="images/icon-scissors.svg" alt=""></img>`
            house.style.border = "40px solid orange"
        }else{
            house.innerHTML = `<img src="images/icon-rock.svg" alt=""></img>`
            house.style.border = "40px solid crimson"
        }
    }

// ahora guardamos el progreso


});