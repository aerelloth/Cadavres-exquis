/******************************************************************************/
/********************************* VARIABLES **********************************/
/******************************************************************************/

	/******************************[ Liste 1 ]******************************/

	var nomAgent = ['le chat du voisin', 'ma grand-mère', 'Alexandre le Grand', 'Chuck Norris', 'Céline Dion', 'le pape', 'Frodon', 'ma petite soeur', 'le facteur', 'un kangourou', 'mon prof de maths', 'Superman', 'un bonhomme de neige', 'Barbie', 'le père Noël', 'le boss du dernier niveau', 'la mariée', 'le plombier', 'le roi', 'la reine', 'un perroquet déplumé', 'Napoléon', 'le roi Arthur', 'Merlin', 'un loup-garou', 'Dracula', 'un extra-terrestre', 'le prince charmant', 'une licorne', 'la petite souris', 'le lapin de Pâques', 'Madame la Duchesse', 'Astérix', 'Lucky Luke', 'le Grand Schtroumpf'];

	var verbe = ['a mangé', 'a toujours détesté', 'a vendu', 'adore', 'a tué', 'a battu aux échecs', 'a recueilli', 's\'acharne sur', 'apprécie', 'a bu', 'a provoqué en duel', 'a joué un sale tour à', 'a épousé', 'a voyagé avec', 'ne supporte pas', 'a adoubé', 'a embauché', 'a renvoyé', 'encourage', 'se désespère de rencontrer', 'voudrait partir en vacances avec', 'a complètement oublié', 'a téléchargé', 'a voté pour', 'est tout à fait contre', 'a fait un gros câlin à', 's\'est brossé les dents avec'];

	var nom = ['une paire de gants pour rosiers', 'une passoire à nouilles', 'un pingouin en peluche', 'un esquimau', 'Venise', 'mon téléphone portable', 'un script JS', 'une cuillère en bois', 'des salsifis', 'les fruits au sirop', 'l\'Anneau Unique', 'la machine à remonter le temps', 'la Tour Eiffel', 'un crapaud', 'des sushis', 'la glace à la fraise', 'une lampe à huile', 'une tondeuse à gazon', 'du fromage', 'une râpe à fromage'];
	//ajout des noms actifs à la liste des noms passifs
	Array.prototype.push.apply(nom, nomAgent);

	var complement = ['au petit-déjeuner', 'au 12ème siècle', 'le jour de son anniversaire', 'pour s\'amuser', 'parce que c\'était l\'heure', 'par amour', 'avec des frites', 'sur le tabouret de la cuisine', 'à Paris', 'sous la pluie', 'le premier jour des soldes', 'en pleine voie', 'pour 5 euros', 'pour sauver sa peau', 'sans s\'en rendre compte', 'avant de se marier', 'au cinéma', 'sur la banquise', 'dans le jardin', 'avec une brosse à dents', 'à la petite cuillère', 'avec une batte de base-ball', 'sur le pont d\'Avignon', 'à -50%', 'en pleine nuit', 'un soir de pleine lune', 'pendant son cours d\'aqua-poney'];
	//ajout de compléments de type "avec + nom" à la liste de compléments
	for (var i = 0; i < nom.length; i++) {
		complement.push('avec ' + nom[i]);
	};

	var liste1 = [nomAgent, verbe, nom, complement];

	/******************************[ Liste 2 ]******************************/

	var sujet_2 = ['La mise à jour', 'L\'installation', 'L\'initialisation', 'La suppression', 'La désinstallation', 'La création'];

	var complementDuNom_2 = ['du fichier', 'du script', 'de la base de données', 'du site', 'du dossier', 'du répertoire', 'de la base virale'];

	var verbe_2 = ['a échoué', 'a été correctement effectuée', 'a été reportée', 'sera effectuée ultérieurement', 'a rencontré une erreur', 'est annulée'];

	var liste2 = [sujet_2, complementDuNom_2, verbe_2];

/******************************************************************************/
/********************************* FONCTIONS **********************************/
/******************************************************************************/

	/******************************[ Générales ]******************************/

	//génère un nombre entier aléatoire compris entre « min » et « max » inclus
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//retourne un élément aléatoire d'une liste (tableau à 1 dimension)
	function alea(liste) {
		var numMax = liste.length - 1;
		var aleaNbr = getRandomInt(0, numMax);
		return liste[aleaNbr];
	}

	//récupère la valeur des boutons radios indiquant le nombre de phrases sélectionné
	function combien() {
		return document.querySelector('input[name="nbrePhrases"]:checked').value;
	}

	//génère un nombre « nbrePhrases » de phrases aléatoires générées à partir de la liste « liste » 
	function genererPhrase(liste, nbrePhrases)
		{
			//initialisation de la chaîne de texte totale
			var toAdd = '';
			//à répéter pour chaque phrase à générer
			for (var i = 0; i < nbrePhrases; i++) {
				//initialisation de la chaîne de texte de la phrase en cours
				var currentSentence = '';
				//récupération du nombre de fragments de phrase de la liste
				var nbreElements = liste.length;

				//pour chaque fragment de phrase
				for (var j = 0; j < nbreElements; j++) {
					//en début de phrase
					if (j==0) {
						//ajout d'une espace au fragment de phrase
						var text = alea(liste[j])+ ' ';
						//ajout d'une majuscule au fragment de phrase
						text = text.charAt(0).toUpperCase() + text.slice(1);
						//ajout du fragment de phrase à la phrase en cours
						currentSentence +=  text;
					}
					//en fin de phrase
					else if (j==(nbreElements -1)) {
						//ajout du fragment de phrase suivi d'un point et d'un retour à la ligne à la phrase en cours
						currentSentence += alea(liste[j]) + '.<br>';
					}
					//éléments intermédiaires
					else {
						//ajout du fragment de phrase et d'une espace à la phrase en cours
						currentSentence += alea(liste[j]) + ' ';
					}
				};
				//ajout de la phrase en cours à la chaîne de texte totale
				toAdd += currentSentence;
			};
			//insertion de la chaîne de texte totale dans la div #citation
			citation.innerHTML = toAdd;
			//affichage de la chaîne de texte totale dans la console
			console.log(toAdd);
		}

	/******************************************************************************/
	/******************************* CODE PRINCIPAL *******************************/
	/******************************************************************************/

	/* ------ Script à exécuter au chargement du DOM ------ */
	document.addEventListener('DOMContentLoaded', function()
	{
		// récupération des éléments HTML
		var newButton1 = document.querySelector('#new1');	//1er bouton
		var newButton2 = document.querySelector('#new2');	//2ème bouton
		var citation = document.querySelector('#citation');	//espace où insérer la citation


		/* ------ gestionnaires d'événements ------ */

		// au clic sur le 1er bouton
		newButton1.addEventListener('click', function(event)
			{
				//récupération du nombre de phrases sélectionné
				var nbrePhrases = combien();
				//génération aléatoire du nombre de phrases sélectionné
				genererPhrase(liste1, nbrePhrases);
			});

		// au clic sur le 2ème bouton
		newButton2.addEventListener('click', function(event)
		{
			//récupération du nombre de phrases sélectionné
			var nbrePhrases = combien();
			//génération aléatoire du nombre de phrases sélectionné
			genererPhrase(liste2, nbrePhrases);
		});
	});