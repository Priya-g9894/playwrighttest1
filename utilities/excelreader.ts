import * as XLSX from 'xlsx';
export function readExcel (filepath: string){
    const workbook = XLSX.readFile(filepath)
    const sheetname = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetname]
    return XLSX.utils.sheet_to_json(sheet)
}