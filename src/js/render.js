const { join, resolve } = require('path');
const fs = require('fs');
const xlsx = require('xlsx');
const {dateOfToday, dateOfTodayWithMark, dateOfPreviousDay, dateOfPreviousDayWithMark} = require(join(__dirname, 'js/calendar'));
const {generateExcel} = require(join(__dirname, 'js/generator'));

//Noms des fichiers
let bicecFileName = "Bulletin Qualité_BICEC_"+dateOfPreviousDay+".xlsx";
let bciFileName = "Bulletin Qualité_BCI_"+dateOfPreviousDay+".xlsx";
let flashFileName = "Bulletin_Flash_Bicec_"+dateOfToday+".xlsx";

let pathName = join(__dirname, 'Bulletins');

//Chemins des fichiers
let bicecFile = join(pathName, bicecFileName);
let bciFile = join(pathName, bciFileName);
let flashFile = join(pathName, flashFileName);

// Importing dialog module using remote
const { dialog } = require("@electron/remote");

/*let bci = [
    {categorie: "Travaux du TFJO", heure : "", norme: ""},
    {categorie: "Début sauvegarde avant TFJ", heure : document.getElementById('debut-sauve-tfj').value, norme: "22:30"},
    {categorie: "Début TFJ", heure : document.getElementById('debut-tfj').value, norme: "23:00"},
    {categorie: "Fin TFJ", heure : document.getElementById('fin-tfj').value, norme: ""},
    {categorie: "Durée TFJ", heure : document.getElementById('duree-tfj').value, norme: "00:30"},
    {categorie: "Fin sauvegarde après TFJ", heure : document.getElementById('fin-sauve-tfj').value, norme: ""},
    {categorie: "Ouverture du site et portail", heure : document.getElementById('ouverture-site').value, norme: "06:30"},
    {categorie: "Création de la table des soldes fusionnés", heure : document.getElementById('soldes-fusionnes').value, norme: "06:30"},
    {categorie: "Disponibilité Infocentre", heure : document.getElementById('infocentre').value, norme: "06:30"},
    {categorie: "Transfert des fichiers aux agences (SDA, états TFJO)", heure : document.getElementById('transfert-sda').value, norme: "06:30"},
    {categorie: "Contrôle disponibilité AMPLITUDE", heure : document.getElementById('control-amplitude').value, norme: "06:30"},
    {categorie: "Monétique", heure : "", norme: ""},
    {categorie: "Services à valeur ajouté", heure : "", norme: ""},
    {categorie: "Disponibilité du SI", heure : "", norme: ""},
    {categorie: "Volumétrie", heure : "", norme: ""},
];*/

let flash = [];

const generateur = document.getElementById('generateur');
generateur.addEventListener('click', function () {
    //Données
    let bicec = [
        {categorie: "Travaux du TFJO", heure : "", norme: ""},
        {categorie: "Début sauvegarde avant TFJ", heure : document.getElementById('debut-sauve-tfj').value, norme: "19:30"},
        {categorie: "Début TFJ", heure : document.getElementById('debut-tfj').value, norme: "20:00"},
        {categorie: "Fin TFJ", heure : document.getElementById('fin-tfj').value, norme: ""},
        {categorie: "Durée TFJ", heure : document.getElementById('duree-tfj').value, norme: "03:30"},
        {categorie: "Fin sauvegarde après TFJ", heure : document.getElementById('fin-sauve-tfj').value, norme: ""},
        {categorie: "Ouverture du site et portail", heure : document.getElementById('ouverture-site').value, norme: "07:30"},
        {categorie: "Disponibilité Infocentre", heure : document.getElementById('infocentre').value, norme: "07:30"},
        {categorie: "Transfert des fichiers aux agences (SDA, états TFJO)", heure : document.getElementById('transfert-sda').value, norme: "07:30"},
        {categorie: "Contrôle disponibilité AMPLITUDE", heure : document.getElementById('control-amplitude').value, norme: "06:30"},
        {categorie: "Monétique", heure : "", norme: ""},
        {categorie: "Services à valeur ajouté", heure : "", norme: ""},
        {categorie: "Disponibilité du SI", heure : "", norme: ""},
        {categorie: "Volumétrie", heure : "", norme: ""},
    ];
    
    console.log(bicecFileName, bciFileName, flashFileName);
    
    save(bicecFile)
});

function save(filePath) {
    // Resolves to a Promise<Object>
	dialog.showSaveDialog({
		title: 'Enregistrer sous',
		defaultPath: filePath,
		// defaultPath: path.join(__dirname, '../assets/'),
		buttonLabel: 'Enregister',
		// Restricting the user to only Text Files.
		filters: [
			{
				name: 'Fichier Excel',
				extensions: ['xlsx', 'csv']
			}, ],
		properties: []
	}).then(file => {
		// Stating whether dialog operation was cancelled or not.
		console.log(file.canceled);
		if (!file.canceled) {
			console.log(file.filePath.toString());
			
			// Creating and Writing to the sample.txt file
			fs.writeFile(file.filePath.toString(),
						'This is a Sample File', function (err) {
				if (err) throw err;
				console.log('Saved!');
			});
		}
	}).catch(err => {
		console.log(err)
	});
}
