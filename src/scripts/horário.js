const diasSemana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"];

var data = new Date();

var diaSemana= diasSemana[data.getDay()];
var hora = data.getHours();
var minutos = data.getMinutes();
var fullHora= hora+":"+minutos;

console.log(data.toLocaleDateString(), fullHora);


let dataDisplay = document.getElementById("data").innerHTML += `${data.toLocaleDateString()}`;

let dataSemanaDisplay= document.getElementById("dia-semana").innerHTML += `${diaSemana}`

let horarios = document.querySelectorAll('.b').forEach((horario) => {
    horario.addEventListener('click', () => {
        console.log("Clicou")
       
    })
});
console.log(horarios);
