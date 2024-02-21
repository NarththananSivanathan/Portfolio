//Fonction pour calculer l'âge.
function calculerAge(dateDeNaissance) {
    const dateNaissance = new Date(dateDeNaissance);
    const dateActuelle = new Date();
    let age = dateActuelle.getFullYear() - dateNaissance.getFullYear();
    const mois = dateActuelle.getMonth() - dateNaissance.getMonth();

    if (mois < 0 || (mois === 0 && dateActuelle.getDate() < dateNaissance.getDate())) {
        age--;
    }

    return age;
}

// Appel à la fonction calculAge pour l'afficher dans index.html.
document.getElementById('ageText').innerText = calculerAge('1998-10-24') + ' ans';