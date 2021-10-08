const { join, resolve } = require('path');
const fs = require('fs');
const xlsx = require('xlsx');
const ExcelJS = require('exceljs');

//Fichier excel
module.exports = function exportXLSX(data, workSheetName, filePath) {
    const workBook = xlsx.utils.book_new();
    const workSheet = xlsx.utils.table_to_sheet(data);
    console.log(workSheet)
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    xlsx.writeFile(workBook, resolve(filePath))
}

module.exports = function exportTableToXLSX(data, filePath) {
    const workBook = xlsx.utils.table_to_book(data);
    console.log(workBook)
    xlsx.writeFile(workBook, resolve(filePath))
}

module.exports = function generateExcel(data, filePath, workSheetName) {
    // Create Workbook
    let wb = new ExcelJS.Workbook();

    // Add WorkSheet to WorkBook
    let ws = wb.addWorksheet(workSheetName);
    
    // Set Print Area for a sheet
    ws.pageSetup.printArea = 'A1:C37';

    // Merge a range of cells
    ws.mergeCells('A1:C5');
    
    ws.addRows(data);
}