import myJson from '../../test.json' assert {type : 'json'};
import myArrayJson from '../../arrays.json' assert {type : 'json'};


let input = "what is the criteria for mysy scholarship";

input = input.toLowerCase();
let questArr = input.split(" ");
let theArray = myArrayJson.main.tags;
let theObjArray = myArrayJson.main;
let theAns = myJson;
let ansArr = questArr.filter(x => theArray.includes(x));

let temp;
const searchKey = (matchKey) => {

    if(typeof(theAns[matchKey]) != 'object'){
        // console.log(theAns[matchKey]);
        temp = theAns[matchKey];
        return;
    }
    // console.log(matchKey);
    // console.log(theObjArray[matchKey]);
    // console.log(theAns[matchKey]);
    // console.log(theArray)
    theArray = theObjArray[matchKey].tags;
    theObjArray = theObjArray[matchKey];
    theAns = theAns[matchKey];
    let ansArr = questArr.filter(x => theArray.includes(x));
    searchKey(ansArr[0]);

}
searchKey(ansArr[0]);
console.log(temp);
