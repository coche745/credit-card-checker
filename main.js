// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// More valid card numbers as strings
let validString1 = '4929913913793687'
let validString2 = '4556461495038097'
let validString3 = '4485132499775270147'
let validString4 = '6011746138166345'
let validString5 = '6011121303311516'
let validString6 = '6011525134526836287'
let validString7 = '5182193373992751'
let validString8 = '5269849759358075'
let validString9 = '2720991124770921'
let validString10 = '379169196749606'
let validString11 = '370606425416183'
let validString12 = '341837331325004'

// list of valid strings

const stringBatch = [validString1, validString2, validString3, validString4, validString5, validString6, validString7, validString8, validString9, validString10, validString11, validString12];

// Checks if credit card number is valid.
const validateCred = (arr) => {
    let check = (arr.length - 1) % 2;
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== check) {
            let double = arr[i] * 2;
            if (double > 9) {
                double -= 9;
            }
        newArr.unshift(double);
        } else {
            newArr.unshift(arr[i]);
        }
    }
    let total = newArr.reduce((a, b) => a + b);
    if (total % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

// Finds invalid numbers out of list of credit card numbers.
const findInvalidCards = (arr) => {
    let invalidArr = [];
    for (i = 0; i < arr.length; i++) {
        let trueOrFalse = validateCred(arr[i]);
        if (trueOrFalse === false) {
            invalidArr.push(arr[i]);
        }
    }
    return invalidArr;
}

// Finds out which credit card companies issued the invalid numbers.
const idInvalidCardCompanies = (arr) => {
    let companiesArr = [];
    for (i = 0; i < arr.length; i++) {
        let firstNum = arr[i][0];
        if (firstNum === 3 && companiesArr.includes('Amex') === false) {
            companiesArr.push('Amex');
        } else if (firstNum === 4 && companiesArr.includes('Visa') === false) {
            companiesArr.push('Visa');
        } else if (firstNum === 5 && companiesArr.includes('Mastercard') === false) {
            companiesArr.push('Mastercard');
        } else if (firstNum === 6 && companiesArr.includes('Discover') === false) {
            companiesArr.push('Discover');
        } else if (firstNum < 3 || firstNum > 6) {
            companiesArr.push('Company not found');
        }
    }
    return companiesArr;
}

// Turns a credit card number string into an array.
const stringToArr = (str) => {
    let arr = str.split('');
    for (i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

// Turns invalid card numbers into valid ones.
const invalidToValid = (arr) => {
    let check = (arr.length - 1) % 2;
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== check) {
            let double = arr[i] * 2;
            if (double > 9) {
                double -= 9;
            }
        newArr.unshift(double);
        } else {
            newArr.unshift(arr[i]);
        }
        
    }
    let total = newArr.reduce((a, b) => a + b);
    let numToAdd = 10 - (total % 10);
    if ((arr[arr.length - 1] + numToAdd) < 10) {
        arr[arr.length - 1] += numToAdd;
    } else {
        arr[arr.length - 1] += numToAdd - 10;
    }
    return arr;
}

console.log('\nCredit card numbers are valid if they pass a test done with the Luhn algorithm, which is implemented in our code.');
console.log('\nCheck if credit card number is valid.');
console.log(valid1);
console.log(validateCred(valid1));
console.log(invalid1);
console.log(validateCred(invalid1));


const invalidArr = findInvalidCards(batch);

console.log('\nFind invalid numbers out of list of 15 credit card numbers.');
console.log('Here are the invalid numbers below.')
console.log(invalidArr);

console.log('\nOut of the invalid numbers above, these are the credit card companies they were issued from');
console.log(idInvalidCardCompanies(invalidArr));

console.log('\nUsing invalidToValid function, turn two invalid card numbers into valid ones');
console.log('Test to make sure they are now valid');
const nowValid1 = invalidToValid(invalid1);
const nowValid2 = invalidToValid(invalid2);
console.log(validateCred(nowValid1));
console.log(validateCred(nowValid2));

console.log('\nUsing an online credit card generator, I have taken 12 card numbers as strings');
console.log('I will turn these strings into arrays in order to more easily check if they are valid');
console.log('Here is the result below.');
const validBatch = stringBatch.map(stringToArr);
console.log(validBatch);

console.log('\nNow I will see if there are any invalid numbers in this list. None should be returned.');
const invalidArr2 = findInvalidCards(validBatch);
console.log(invalidArr2);






