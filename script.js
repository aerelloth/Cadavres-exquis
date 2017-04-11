//à partir du chargement du DOM
document.addEventListener('DOMContentLoaded', function()
{
	var newButton = document.querySelector('#new');
	var citation = document.querySelector('#citation');
	var element1 = ['Le chat du voisin', 'Ma grand-mère', 'Alexandre le Grand', 'Chuck Norris', 'Le pape', 'Frodon', 'Ma petite soeur', 'Le facteur'];
	var element2 = ['a mangé', 'a toujours détesté', 'a vendu', 'adore', 'a tué', 'a battu aux échecs', 'a recueilli', 's\'est lié d\'amitié avec', 's\'acharne sur', 'apprécie', 'écoute', 'a bu'];
	var element3 = ['une paire de gants pour rosiers', 'une passoire à nouilles', 'un pingouin en peluche', 'Céline Dion', 'un esquimau', 'Venise', 'mon téléphone portable', 'un script JS', 'une cuillère en bois', 'des salsifis', 'les fruits au sirop', 'l\'Anneau Unique'];
	var element4 = ['au petit-déjeuner', 'au 12ème siècle', 'le jour de son anniversaire', 'pour s\'amuser', 'parce que c\'était l\'heure', 'par amour', 'avec des frites', 'sur le tabouret de la cuisine', 'à Paris', 'sous la pluie', 'le premier jour des soldes', 'en pleine voie', 'pour 5 euros', 'pour sauver sa peau', 'sans s\'en rendre compte'];
	var listes = [element1, element2, element3, element4];

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function alea(liste) {
		var numMax = liste.length - 1;
		var aleaNbr = getRandomInt(0, numMax);
		return liste[aleaNbr];
	}

	newButton.addEventListener('click', function(event)
	{
		//alert('Vous avez cliqué !');
		//citation.innerHTML = alea(element1)+' '+alea(element2)+' '+alea(element3)+' '+alea(element4)+'.';
		var toAdd = '';
		var nbreElements = listes.length;
		for (var i = 0; i < nbreElements; i++) {
			if (i==(nbreElements -1)) {
				toAdd += alea(listes[i]) + '.';
			}
			else {
				toAdd += alea(listes[i]) + ' ';
			}
		};
		citation.innerHTML = toAdd;
	});
});