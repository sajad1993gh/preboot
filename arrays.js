var chocolateBars = [ "snickers","hundred grand","kitkat","skittles"]
var element = "sajad"
function addElementToBeginningOfArray(chocolateBars,element){
 var array= [element, ...chocolateBars]
 return array
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element)
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars,element){
  var array=[...chocolateBars, element]
  return array
}
function distructivelyAddElementToEndOfArray(chocolateBars,element){
  chocolateBars.push(element)
  return chocolateBars
}
var index = 0
function accessElementInArray(chocolateBars,index){
  return chocolateBars[index]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  var x = chocolateBars.slice(1)
  return x
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  var y = chocolateBars.slice(0,chocolateBars.length-1)
  return y
}
