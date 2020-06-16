const mainElement = document.querySelector("main")
// Mike Counts & Brandon Andreis helped with the code for this assignment//


//KATA 1 
const kata1heading = document.createElement('h1')
kata1heading.append('Kata 1');
mainElement.append(kata1heading)

const kata1List = document.createElement('ul')
for (let counter = 1; counter <= 20; counter += 1) {
    kata1List.innerHTML += ("<li>" + counter)
    mainElement.append(kata1List)
}


//KATA 2 
const kata2heading = document.createElement('h1')
const kata2list = document.createElement('ul')
kata2heading.append('kata 2')
mainElement.append(kata2heading)
for (let counter = 2; counter <= 20; counter += 2) {
    kata2list.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata2list)
}


//KATA 3
const kata3heading = document.createElement('h1')
const kata3list = document.createElement('ul')
kata3heading.append('kata 3')
mainElement.append(kata3heading)
for (let counter = 1; counter <= 20; counter += 2) {
    kata3list.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata3list)
}


//KATA 4 
const kata4heading = document.createElement('h1')
const kata4list = document.createElement('ul')
kata4heading.append('kata 4')
mainElement.append(kata4heading)
for (let counter = 5; counter <=20; counter += 5) {
    kata4list.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata4list)
}


//KATA 5
const kata5heading = document.createElement('h1')
const kata5list = document.createElement('ul')
kata5heading.append('kata 5')
mainElement.append(kata5heading)
for (let counter = 1; counter <= 10; counter +=1) {
    result = counter * counter
    kata5list.innerHTML += ('<li>' + result + '</li>')
    mainElement.append(kata5list)
}


//KATA 6
const kata6heading = document.createElement('h1')
const kata6list = document.createElement('ul')
kata6heading.append('kata 6')
mainElement.append(kata6heading)
for (let counter = 20; counter > 0; counter -= 1){
    kata6list.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata6list)
}


//KATA 7
const kata7heading = document.createElement('h1')
const kata7list = document.createElement('ul')
kata7heading.append('kata 7')
mainElement.append(kata7heading)
for (let counter = 20; counter > 0; counter -= 2) {
    kata7list.innerHTML += ('<li>' + counter + '</lil>')
    mainElement.append(kata7list)
}


//KATA 8
const kata8heading = document.createElement('h1')
const kata8list = document.createElement('ul')
kata8heading.append('kata 8')
mainElement.append(kata8heading)
for (let counter = 19; counter > 0; counter -= 2) {
    kata8list.innerHTML += ('<li>' + counter + '</lil>')
    mainElement.append(kata8list)
}


//KATA 9
const kata9heading = document.createElement('h1')
const kata9list = document.createElement('ul')
kata9heading.append('kata 9')
mainElement.append(kata9heading)
for (let counter = 100; counter > 0; counter -= 5) {
    kata9list.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata9list)
}


//KATA 10
const kata10heading = document.createElement('h1')
const kata10list = document.createElement('ul')
kata10heading.append('kata 10')
mainElement.append(kata10heading)
for (let counter = 10; counter > 1; counter -=1) {
    result = counter * counter
    kata10list.innerHTML += ('<li>' + result + '</li>')
    mainElement.append(kata10list)
}


//KATA 11
const kata11heading = document.createElement('h1')
const kata11list = document.createElement('ul')
kata11heading.append('kata 11')
mainElement.append(kata11heading)
const sampleArray = [
   469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
   456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]
for(let counter = 0; counter < sampleArray.length; counter += 1){
    kata11list.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
    mainElement.append(kata11list)
}


//KATA 12 
const kata12heading = document.createElement('h1')
const kata12list = document.createElement('ul')
kata12heading.append('kata 12')
mainElement.append(kata12heading)
for (let counter = 0; counter < sampleArray.length; counter += 1){
    if ((sampleArray[counter] % 2) === 0) {
    kata12list.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
    mainElement.append(kata12list)
    }
}


//KATA 13
const kata13heading = document.createElement('h1')
const kata13list = document.createElement('ul')
kata13heading.append('kata 13')
mainElement.append(kata13heading)
for (let counter = 0; counter < sampleArray.length; counter += 2){
    if ((sampleArray[counter] % 1) === 0) {
    kata13list.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
    mainElement.append(kata13list)
    }
}


//KATA 14 
const kata14heading = document.createElement("h1")
const kata14list = document.createElement('ul')
kata14heading.append('kata 14')
mainElement.append(kata14heading)
for(let counter = 0; counter < sampleArray.length; counter += 1){
    kata14list.innerHTML += ('<li>' + sampleArray[counter] * sampleArray[counter] + '</li>')
    mainElement.append(kata14list)
}


//KATA 15 
const kata15heading = document.createElement("h1")
const kata15list = document.createElement('ul')
kata15heading.append('kata 15')
mainElement.append(kata15heading)
let kata15Result = 0
for (let counter = 0; counter <= 20; counter += 1) {
     kata15Result += counter 
}
 kata15list.innerHTML = kata15Result
    mainElement.append(kata15list)

    
//KATA 16
const kata16heading = document.createElement("h1")
const kata16list = document.createElement('ul')
kata16heading.append('kata 16')
mainElement.append(kata16heading)
let kata16Result = 0
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    kata16Result += sampleArray[counter]
}
kata16list.innerHTML = kata16Result
mainElement.append(kata16list)
 

//KATA 17 
const kata17heading = document.createElement("h1")
const kata17list = document.createElement('ul')
kata17heading.append('kata 17')
mainElement.append(kata17heading)
let kata17Result = sampleArray[0]
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (kata17Result > sampleArray[counter]){
        kata17Result = sampleArray[counter]
    }
}
kata17list.innerHTML = kata17Result
mainElement.append(kata17list)


//KATA 18
const kata18heading = document.createElement("h1")
const kata18list = document.createElement('ul')
kata18heading.append('kata 18')
mainElement.append(kata18heading)
let kata18Result = sampleArray[0]
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (kata18Result < sampleArray[counter]){
        kata18Result = sampleArray[counter]
    }
}
kata18list.innerHTML = kata18Result
mainElement.append(kata18list)