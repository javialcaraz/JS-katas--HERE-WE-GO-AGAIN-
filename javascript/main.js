const mainElement = document.querySelector("main")
// Mike Counts & Brandon Andreis helped with the code for this assignment//


//KATA1 Display the numbers from 1 to 20. (1, 2, 3, …,19, 20) 
const kata1heading = document.createElement('h1')
kata1heading.append('Kata 1');
mainElement.append(kata1heading)

const kata1List = document.createElement('ul')
for (let counter = 1; counter <= 20; counter += 1) {
    kata1List.innerHTML += ("<li>" + counter)
    mainElement.append(kata1List)
}

//KATA2 Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
const kata2Heading = document.createElement('h1')
kata2Heading.append('Kata 2')
const kata2List = document.createElement('ul')
mainElement.append(kata2Heading)

for (let counter2 = 2; counter2 <= 20; counter2 += 2) {
    kata1List.innerHTML += (counter2 + " , ")
    mainElement.append(kata2List)
}

//KATA3 Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
const kata3heading = document.createElement('h1')
kata3heading.append('Kata 3');
mainElement.append(kata3heading)

const kata3List = document.createElement('h2')
for (let counter3 = 1; counter3 <= 20; counter3 += 2) {
    kata1List.innerHTML += (counter3 + " ")
    mainElement.append(kata3List)
}

//KATA4 Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
const kata4heading = document.createElement('h1')
kata4heading.append('Kata 4');
mainElement.append(kata4heading)

const kata4List = document.createElement('ul')
for (let counter4 = 5; counter4 <= 100; counter4 += 5) {
    kata4List.innerHTML += ("<Li>" + counter4)
    mainElement.append(kata4List)
}
