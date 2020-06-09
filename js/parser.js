const fs = require("fs");
const request = require("request-promise");
const cheerio = require("cheerio");

let data = "(function () { let newBase = {";
let directionToParse = "";
let pointsToParse = "";

async function parseData() {

const result = await request.get("https://priem.pgups.ru/doc_passmark.php");
const $ = cheerio.load(result);


$("body > section.bg-white.history.bakalavriat > div > div > div > table > tbody > tr").each((index, element) => {
  let current = element;
  $(current).children("td:nth-child(1)").each((index2, directionElement) => {
    directionToParse = $(directionElement).text().toString();
    directionToParse = directionToParse.trim();
    data += `direction${index}: {direction: "${directionToParse}",`;
    $(current).children("td:nth-child(4)").each((index, pointsElement) => {
      pointsToParse = $(pointsElement).text().toString();
      pointsToParse = pointsToParse.trim();
      data += `points: ${pointsToParse}},`
      fs.writeFileSync("data/parsedData.js", `${data}};window.newBase={newBase: newBase};})();`);
      // fs.writeFileSync("data/parsedData.js", `};`);
    });
  });
});

}
 
parseData();