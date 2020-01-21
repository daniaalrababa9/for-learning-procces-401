'use strict ';
const validator ={};
validator.allValuesNumeric=function(input){
    if (!Array.isArray(input)){return false};
    return input.every(value=>typeof value === 'number');
}
validator.noZerosValue=function(input){
    if(!Array.isArray(inout)){return false};
    return input.every(value=>typeof value ==='number' && value!== 0);
}
validator.hasRightMinimumArgumentCount=function(input,expectedCount){
return input.length>= expectedCount;

}
module.exports=validator;