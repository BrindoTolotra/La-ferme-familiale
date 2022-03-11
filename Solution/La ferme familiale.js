/*fonction qui prement en paramètre deux chaînes à arrange
 exemple : chaine1 = 'jri' et chaine2 = 'adn'
 la fonction retourne le mot 'jardin'
*/
let lettre = (chaine1,chaine2) =>{
    let reponse = "";
    // i pour parcourir la chaine 1 et j pour la chaine 2
    for(let i = 0; i<chaine1.length;i++){
        for(let j = i; j<i+1; j++){
            reponse = reponse + chaine1[i]+chaine2[j];
        }
    }
    return reponse;
};
