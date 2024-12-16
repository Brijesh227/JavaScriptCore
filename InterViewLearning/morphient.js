const sampleInput = `Age,Name,Height\n46,John,165\n35,Mary,160\n25,Paul,175\n46,Peter,165\n25,Cathy,170`;

function extractCsvInput(input) {
    const NEWLINE = "\n";
    const DELIMITER = ",";

    const lines = input.split(NEWLINE);
    return lines.map((line) => line.split(DELIMITER));
}

const lines = extractCsvInput(sampleInput);
console.log("lines :", lines);

function extractColumnarData(rows) {
    const headers = rows[0];
    const columnarData = headers.map((header) => [header]);

    for (let i = 1; i < rows.length; i++) { 
        const row = rows[i];
        for (let j = 0; j < row.length; j++) {
            columnarData[j].push(row[j].trim());
        }
    }

    return columnarData;
}

const columnarData = extractColumnarData(lines);
console.log("columnarData :", columnarData);

function generateDistinctValues(columnarData) {
    // return columnarData.map((column) => {
    //     const uniqueValues = [];
    //     const seen = {};
    //     for (const value of column) {
    //         if (!seen[value]) {
    //             uniqueValues.push(value);
    //             seen[value] = true;
    //         }
    //     }
    //     return uniqueValues;
    // });

    return columnarData.map((column) => {
        const uniqueValues = removeduplicates(column)
        return uniqueValues;
    });
}

function removeduplicates(arr) {
    arr.sort();

    let i = 1;
    for (let j = 2; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
  
    arr.length = i + 1;
  
    return arr;
}

const distinct  = generateDistinctValues(columnarData);
console.log("distinct :", distinct);