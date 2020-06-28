let titre = document.getElementById("nom_prenom");
let nom_prenom = "TIEN-MI-TIEE Tristan";
let index = 1;

setInterval(writeTexte, 300);

function writeTexte()
{
    titre.innerHTML = nom_prenom.slice(0, index);
    index++;


    /* Boucle Infini
    if(index > nom_prenom.length)
    {
        index = 1;
    }
    */
}