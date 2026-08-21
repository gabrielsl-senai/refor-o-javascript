document.getElementById('red').addEventListener('click', function (){
    document.body.style.backgroundColor = 'red'
});
document.getElementById('blue').addEventListener('click', function (){
    document.body.style.backgroundColor = 'blue'
});
document.getElementById('green').addEventListener('click', function (){
    document.body.style.backgroundColor = 'green'
})

document.getElementById("maisUm").addEventListener("click",function(){
let contador = document.getElementById("contador");
contador.textContent = Number(contador.textContent) + 1;
})
