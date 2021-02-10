// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
    const newDriver = { ...obj };
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key){
    const newDriver = { ...obj };
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
}