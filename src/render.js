const { join, resolve } = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

let pathName = join(__dirname, 'Bulletins');

//Définition de la date pour le nom des fichiers
let day, month, year, previous;
let today = new Date();
previous = today.getDate()-1;
day = today.getDate();
month = today.getMonth()+1;
year = today.getFullYear();

if (previous<10) previous = '0'+previous;
if (day<10) day = '0'+day;
if (month<10) month = '0'+month;

const generateur = document.getElementById('generateur');
generateur.addEventListener('click', function () {
    //Noms des fichiers
    let bicecFileName = "Bulletin Qualité_BICEC_"+previous+month+year+".xlsx";
    let bciFileName = "Bulletin Qualité_BCI_"+previous+month+year+".xlsx";
    let flashFileName = "Bulletin_Flash_Bicec_"+day+month+year+".xlsx";
    
    let node = document.getElementById('debut-sauve-tfj');
    if (node!=null){
        let textnode = document.createTextNode(node.value);
        node.parentElement.replaceChild(textnode, node);
    }

    //console.log("element", node.parentElement, "node", node.parentNode, textnode);
    //Données
    let bicecTab = document.getElementById('bicec_tab');
    console.log(document.getElementById('bicec_form'))
    /*let bicec = [{
        debutSauveTFJ : document.getElementById('debut-sauve-tfj').value,
        debutTFJ : document.getElementById('debut-tfj').value,
        finTFJ : document.getElementById('fin-tfj').value,
        dureeTFJ : document.getElementById('duree-tfj').value,
        finSauveTFJ : document.getElementById('fin-sauve-tfj').value,
        ouvertureSite : document.getElementById('ouverture-site').value,
        infocentre : document.getElementById('infocentre').value,
    }];*/

    //Chemins des fichiers
    let bicecFile = join(pathName, bicecFileName);
    let bciFile = join(pathName, bciFileName);
    let flashFile = join(pathName, flashFileName);

    exportTableToXLSX(bicecTab, bicecFile)
    /*fs.writeFile(bicecFile, JSON.stringify(bicec, null, 4), function (err) {
        if (err){
            return console.log(err)
        }
        console.log(bicecFileName, ' créé.')
    })*/
    console.log(bicecFileName, bciFileName, flashFileName)
});


const electron = require('electron');

    //Fichier excel
function exportXLSX(data, workSheetName, filePath) {
    const workBook = xlsx.utils.book_new();
    const workSheet = xlsx.utils.table_to_sheet(data);
    console.log(workSheet)
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    xlsx.writeFile(workBook, resolve(filePath))
}

function exportTableToXLSX(data, filePath) {
    const workBook = xlsx.utils.table_to_book(data);
    console.log(workBook)
    xlsx.writeFile(workBook, resolve(filePath))
}

/*// Importing dialog module using remote
const dialog = electron.remote.dialog;

var save = document.getElementById('save');

save.addEventListener('click', (event) => {
	// Resolves to a Promise<Object>
	dialog.showSaveDialog({
		title: 'Select the File Path to save',
		defaultPath: path.join(__dirname, '../assets/sample.txt'),
		// defaultPath: path.join(__dirname, '../assets/'),
		buttonLabel: 'Save',
		// Restricting the user to only Text Files.
		filters: [
			{
				name: 'Text Files',
				extensions: ['txt', 'docx']
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
});*/
