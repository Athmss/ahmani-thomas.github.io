/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 
function search(animalArr, animalStr) {
     for (var i = 0; i < animalArr.length; i++) {
       if (animalArr[i].name === animalStr) {
           return animalArr[i];
       }
       
    }
    return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animalArr, animalStr, animalObj) {
    for (var i = 0; i < animalArr.length; i++) {
        if (animalArr[i].name === animalStr) {
            animalArr[i] = animalObj;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animalArr, animalStr) {
    for (var i = 0; i < animalArr.length; i++) {
        if (animalArr[i].name !== animalStr) {
             return animalArr[i];
        } else {
            delete animalArr[i];
        }
    } 
    
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animalArr, animalObj) {
    if (animalObj.name.length > 0 && animalObj.species.length > 0) {
        for (var i = 0; i > animalArr.length; i++) {
            if (animalArr[i].name !== animalObj.name) {
                animalArr.push(animalObj);
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
