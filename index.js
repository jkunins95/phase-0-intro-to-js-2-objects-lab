var employee = new Object();

function updateEmployeeWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromEmployeeByKey(object, key) {
    var newEmployee = Object.assign({}, object)
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete employee[key]
    return employee
}