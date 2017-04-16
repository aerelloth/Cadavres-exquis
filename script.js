function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alea(liste) {
	var numMax = liste.length - 1;
	var aleaNbr = getRandomInt(0, numMax);
	return liste[aleaNbr];
}

function combien() {
	return document.querySelector('input[name="nbrePhrases"]:checked').value;
}

function genererPhrase(liste, nbrePhrases)
	{
		var toAdd = '';
		for (var i = 0; i < nbrePhrases; i++) {
			var currentSentence = '';
			var nbreElements = liste.length;

			for (var j = 0; j < nbreElements; j++) {
				if (j==0) {
					var text = alea(liste[j])+ ' ';
					text = text.charAt(0).toUpperCase() + text.slice(1);
					currentSentence +=  text;
				}
				else if (j==(nbreElements -1)) {

					currentSentence += alea(liste[j]) + '.<br>';
				}
				else {
					currentSentence += alea(liste[j]) + ' ';
				}
			};
			toAdd += currentSentence;
		};
		citation.innerHTML = toAdd;
		console.log(toAdd);
		
	}

//à partir du chargement du DOM
document.addEventListener('DOMContentLoaded', function()
{
	var newButton1 = document.querySelector('#new1');
	var newButton2 = document.querySelector('#new2');
	var citation = document.querySelector('#citation');

	var element1_1 = ['le chat du voisin', 'ma grand-mère', 'Alexandre le Grand', 'Chuck Norris', 'Céline Dion', 'le pape', 'Frodon', 'ma petite soeur', 'le facteur', 'un kangourou', 'mon prof de maths', 'Superman', 'un bonhomme de neige', 'Barbie', 'le père Noël', 'le boss du dernier niveau', 'la mariée', 'le plombier', 'le roi', 'la reine', 'un perroquet déplumé', 'Napoléon', 'le roi Arthur', 'Merlin', 'un loup-garou', 'Dracula', 'un extra-terrestre', 'le prince charmant', 'une licorne', 'la petite souris', 'le lapin de Pâques', 'Madame la Duchesse', 'Astérix', 'Lucky Luke', 'le Grand Schtroumpf'];
	var element1_2 = ['a mangé', 'a toujours détesté', 'a vendu', 'adore', 'a tué', 'a battu aux échecs', 'a recueilli', 's\'acharne sur', 'apprécie', 'a bu', 'a provoqué en duel', 'a joué un sale tour à', 'a épousé', 'a voyagé avec', 'ne supporte pas', 'a adoubé', 'a embauché', 'a renvoyé', 'encourage', 'se désespère de rencontrer', 'voudrait partir en vacances avec', 'a complètement oublié', 'a téléchargé', 'a voté pour', 'est tout à fait contre', 'a fait un gros câlin à', 's\'est brossé les dents avec'];
	var element1_3 = ['une paire de gants pour rosiers', 'une passoire à nouilles', 'un pingouin en peluche', 'un esquimau', 'Venise', 'mon téléphone portable', 'un script JS', 'une cuillère en bois', 'des salsifis', 'les fruits au sirop', 'l\'Anneau Unique', 'la machine à remonter le temps', 'la Tour Eiffel', 'un crapaud', 'des sushis', 'la mare aux canards', 'la glace à la fraise', 'une lampe à huile', 'une tondeuse à gazon', 'du fromage'];
	Array.prototype.push.apply(element1_3, element1_1);
	var element1_4 = ['au petit-déjeuner', 'au 12ème siècle', 'le jour de son anniversaire', 'pour s\'amuser', 'parce que c\'était l\'heure', 'par amour', 'avec des frites', 'sur le tabouret de la cuisine', 'à Paris', 'sous la pluie', 'le premier jour des soldes', 'en pleine voie', 'pour 5 euros', 'pour sauver sa peau', 'sans s\'en rendre compte', 'avant de se marier', 'au cinéma', 'sur la banquise', 'dans le jardin', 'avec une brosse à dents', 'à la petite cuillère', 'avec une batte de base-ball', 'sur le pont d\'Avignon', 'à -50%', 'en pleine nuit', 'un soir de pleine lune', 'pendant son cours d\'aqua-poney'];
	var liste1 = [element1_1, element1_2, element1_3, element1_4];

	var element2_1 = ['La mise à jour', 'L\'installation', 'L\'initialisation', 'La suppression', 'La désinstallation', 'La création'];
	var element2_2 = ['du fichier', 'du script', 'de la base de données', 'du site', 'du dossier', 'du répertoire', 'de la base virale'];
	var element2_3 = ['a échoué', 'a été correctement effectuée', 'a été reportée', 'sera effectuée ultérieurement', 'a rencontré une erreur', 'est annulée'];
	var liste2 = [element2_1, element2_2, element2_3];

	newButton1.addEventListener('click', function(event)
		{
			var nbrePhrases = combien();
			genererPhrase(liste1, nbrePhrases);
		});

	newButton2.addEventListener('click', function(event)
	{
		var nbrePhrases = combien();
		genererPhrase(liste2, nbrePhrases);
	});
});