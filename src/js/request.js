/*
var requestURL = 'http://localhost/crud-php-simple-master/crud-php-simple-master/27-06-2019.json';
var titre_one_cont =  document.getElementById('titre_one');


var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var article = request.response;
    get_titre_one(article);

}
function get_titre_one(jsonObj) {
    var titre_one = document.createElement('h1');
    titre_one.textContent = jsonObj['titre_one'];
    titre_one_cont.appendChild(titre_one);
}
*/


let url = 'api.json'

fetch(url, {
    method: 'GET'
}).then(response => {
    return response.json();
}).then(response => {
    console.log(response.infos.titre_one);
    let titre_one = document.querySelector("#titre_one");
    titre_one.innerHTML = response.infos.titre_one;

    console.log(response.infos.titre_two);
    let titre_two = document.querySelector("#titre_two");
    titre_two.innerHTML = response.infos.titre_two;

    console.log(response.infos.titre_three);
    let titre_three = document.querySelector("#titre_three");
    titre_three.innerHTML = response.infos.titre_three;

    console.log(response.infos.titre_four);
    let titre_four = document.querySelector("#titre_four");
    titre_four.innerHTML = response.infos.titre_four;

    console.log(response.infos.sous_titre_one);
    let sous_titre_one = document.querySelector("#sous_titre_one");
    sous_titre_one.innerHTML = response.infos.sous_titre_one;

    console.log(response.infos.sous_titre_two);
    let sous_titre_two = document.querySelector("#sous_titre_two");
    sous_titre_two.innerHTML = response.infos.sous_titre_two;

    console.log(response.infos.date_one);
    let date_one = document.querySelector("#date_one");
    date_one.innerHTML = response.infos.date_one;

    console.log(response.infos.date_two);
    let date_two = document.querySelector("#date_two");
    date_two.innerHTML = response.infos.date_two;

    console.log(response.infos.text_info_one);
    let text_info_one = document.querySelector("#text_info_one");
    text_info_one.innerHTML = response.infos.text_info_one;

    console.log(response.infos.text_info_two);
    let text_info_two = document.querySelector("#text_info_two");
    text_info_two.innerHTML = response.infos.text_info_two;

    console.log(response.infos.texte);
    let texte = document.querySelector("#texte");
    texte.innerHTML = response.infos.texte;

    console.log(response.infos.nom);
    let nom = document.querySelector("#nom");
    nom.innerHTML = response.infos.nom;

    console.log(response.infos.nom_pers_one);
    let nom_pers_one = document.querySelector("#nom_pers_one");
    nom_pers_one.innerHTML = response.infos.nom_pers_one;

    console.log(response.infos.nom_pers_two);
    let nom_pers_two = document.querySelector("#nom_pers_two");
    nom_pers_two.innerHTML = response.infos.nom_pers_two;

    console.log(response.infos.nom_pers_three);
    let nom_pers_three = document.querySelector("#nom_pers_three");
    nom_pers_three.innerHTML = response.infos.nom_pers_three;

    console.log(response.infos.nom_boat_one);
    let nom_boat_one = document.querySelector("#nom_boat_one");
    nom_boat_one.innerHTML = response.infos.nom_boat_one;

    console.log(response.infos.nom_boat_two);
    let nom_boat_two = document.querySelector("#nom_boat_two");
    nom_boat_two.innerHTML = response.infos.nom_boat_two;

    console.log(response.infos.nom_boat_three);
    let nom_boat_three = document.querySelector("#nom_boat_three");
    nom_boat_three.innerHTML = response.infos.nom_boat_three;



})

