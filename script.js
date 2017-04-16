//à partir du chargement du DOM
document.addEventListener('DOMContentLoaded', function()
{
	var newButton1 = document.querySelector('#new1');
	var newButton2 = document.querySelector('#new2');
	var citation = document.querySelector('#citation');
	var element1_1 = ['Le chat du voisin', 'Ma grand-mère', 'Alexandre le Grand', 'Chuck Norris', 'Le pape', 'Frodon', 'Ma petite soeur', 'Le facteur'];
	var element1_2 = ['a mangé', 'a toujours détesté', 'a vendu', 'adore', 'a tué', 'a battu aux échecs', 'a recueilli', 's\'est lié d\'amitié avec', 's\'acharne sur', 'apprécie', 'écoute', 'a bu'];
	var element1_3 = ['une paire de gants pour rosiers', 'une passoire à nouilles', 'un pingouin en peluche', 'Céline Dion', 'un esquimau', 'Venise', 'mon téléphone portable', 'un script JS', 'une cuillère en bois', 'des salsifis', 'les fruits au sirop', 'l\'Anneau Unique'];
	var element1_4 = ['au petit-déjeuner', 'au 12ème siècle', 'le jour de son anniversaire', 'pour s\'amuser', 'parce que c\'était l\'heure', 'par amour', 'avec des frites', 'sur le tabouret de la cuisine', 'à Paris', 'sous la pluie', 'le premier jour des soldes', 'en pleine voie', 'pour 5 euros', 'pour sauver sa peau', 'sans s\'en rendre compte'];
	var liste1 = [element1_1, element1_2, element1_3, element1_4];

	var element2_1 = ['La mise à jour', 'L\'installation', 'L\'initialisation', 'La suppression', 'La désinstallation'];
	var element2_2 = ['du fichier', 'du script', 'de la base de données', 'du site'];
	var element2_3 = ['a échoué', 'a été correctement effectuée', 'a été reportée', 'sera effectuée ultérieurement'];
	var liste2 = [element2_1, element2_2, element2_3];

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function alea(liste) {
		var numMax = liste.length - 1;
		var aleaNbr = getRandomInt(0, numMax);
		return liste[aleaNbr];
	}

	newButton1.addEventListener('click', function(event)
	{
		var toAdd = '';
		var nbreElements = liste1.length;
		for (var i = 0; i < nbreElements; i++) {
			if (i==(nbreElements -1)) {
				toAdd += alea(liste1[i]) + '.';
			}
			else {
				toAdd += alea(liste1[i]) + ' ';
			}
		};
		citation.innerHTML = toAdd;
	});

	newButton2.addEventListener('click', function(event)
	{
		var toAdd = '';
		var nbreElements = liste2.length;
		for (var i = 0; i < nbreElements; i++) {
			if (i==(nbreElements -1)) {
				toAdd += alea(liste2[i]) + '.';
			}
			else {
				toAdd += alea(liste2[i]) + ' ';
			}
		};
		citation.innerHTML = toAdd;
	});
});