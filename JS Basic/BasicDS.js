/*
We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.
*/

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

tekkenCharacter.origin = 'South Korea';
tekkenCharacter['hair Color'] = 'dyed Orange';
const eyes = "eye color"
tekkenCharacter[eyes] = 'brown';
console.log(tekkenCharacter);