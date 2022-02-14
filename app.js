const addSqaureButton = document.createElement("button");
addSqaureButton.textContent = "Sing!";
document.body.appendChild(addSqaureButton);

let friends = ['Matt', 'Julie', 'Kelsey', 'Robert', 'Zac'];

document.addEventListener('click', function() {
    //console.textContent(friends.length)



    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        const name = friends[i]

        const newDiv = document.createElement('div');
        newDiv.classname = "friend";


        const heading = document.createElement('h3')
        heading.textContent = name;

        newDiv.appendChild(heading)
        document.body.appendChild(newDiv);

        for (let j = 99; j > 0; j--) {
            // console.log(j, "lines of code on the wall " + j + " lines of code, " + friends[i] + " take's one down, pass it around " + (j - 1) + " rounds of code on the wall");
            let log = document.createElement('p')
            if (j === 1) {
                log.textContent = (j, "line of code on the wall " + j + " line of code, " + friends[i] + " take's one down, passes it around " + " no more rounds of code on the wall")
            } else if (j === 2) {
                log.textContent = (j, "lines of code on the wall " + j + " lines of code, " + friends[i] + " take's one down, pass it around " + (j - 1) + " round of code on the wall")


            } else {
                log.textContent = (j, "lines of code on the wall " + j + " lines of code, " + friends[i] + " take's one down, pass it around " + (j - 1) + " rounds of code on the wall")

            }
            newDiv.appendChild(log)
        }
    }
})