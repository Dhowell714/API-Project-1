/*
    ! I kinda struggled here. I was able to fetch the array containing all 43 characters in this particular API, but was unable to make a for loop in order to display the information. The modules make sense, but I couldn't find exactly what I was looking for, as it gave me errors I was unable to resolve or find a solution to. So I looked up stuff on the internet, (hints the fact that I'm not quite using things that we already went over) which I recognize is something I shouldn't do. I utilized the learning gym and talked to Emory Brunner. She was very helpful and nice, but due to me using weird methods, she got confused. She gave me helpful tips about how to do certain things, but overall, I was kinda too overwhelmed to find out how to do everything. I apologise for me being rather sloppy and unproffessional. 
*/


let studioGhibliPeopleList = document.querySelector('ul');
//const array1 = [newMap];
fetch('https://ghibliapi.herokuapp.com/people')
    .then(function (response) {
        //console.log(response)
        return response.json();
        console.log(people);
        //people = json.results;
    })
        .then(function(json) {
        console.log(json)
        displayResults(json)
        })

        function displayResults(json) {
            let people = json
            return people.map(function (movies, index) {
                    let ul = document.querySelector('ul')
                    let div = document.createElement('div')
                    let div2 = document.createElement('div')
                    let div3 = document.createElement('div')
                    let div4 = document.createElement('div')
                    let div5 = document.createElement('div')
                    let div6 = document.createElement('div')
                    let div7 = document.createElement('div')
                    let div8 = document.createElement('div')
                    let div9 = document.createElement('div')
                    //let p = document.createElement('<p>')
                    let listItem = document.createElement('h3')
                    let listItem2 = document.createElement('li')
                    let listItem3 = document.createElement('li')
                    let listItem4 = document.createElement('li')
                    let listItem5 = document.createElement('li')
                    let listItem6 = document.createElement('li')
                    let listItem7 = document.createElement('li')
                    let listItem8 = document.createElement('li')
                    let listItem9 = document.createElement('li')
                    ul.appendChild(div)
                    ul.appendChild(div2)
                    ul.appendChild(div3)
                    ul.appendChild(div4)
                    ul.appendChild(div5)
                    ul.appendChild(div6)
                    ul.appendChild(div7)
                    ul.appendChild(div8)
                    ul.appendChild(div9)
                    div.appendChild(listItem)
                    div2.appendChild(listItem2)
                    div3.appendChild(listItem3)
                    div4.appendChild(listItem4)
                    div5.appendChild(listItem5)
                    div6.appendChild(listItem6)
                    div7.appendChild(listItem7)
                    div8.appendChild(listItem8)
                    div9.appendChild(listItem9)
                    listItem.innerText = movies.id
                    listItem2.innerText = movies.name
                    listItem3.innerText = movies.gender
                    listItem4.innerText = movies.age
                    listItem5.innerText = movies.eye_color
                    listItem6.innerText = movies.hair_color
                    listItem7.innerText = movies.films
                    listItem8.innerText = movies.species
                    listItem9.innerText = movies.url
                }
            )
        } 



        /*
        await Promise.all([people]).then((values) => {
            array = values;
            console.log(values);
        
            var newMap = new Map(array)
*/
//let arrayLength = newMap.length;
//const map1 = item.map(x => x + 1);
// Printing keys and values
//for (var i = 0, len = array.length; i < len; i++) {

/*
for (let item of newMap) {
	output = document.getElementById("list").innerHTML = ('Id: ' +item[0].id+'<br>Name: ' +item[0].name+'<br>Gender: ' +item[0].gender+'<br>Age: '+item[0].age+'<br>Eye color: ' +item[0].eye_color+'<br>Hair color: ' +item[0].hair_color+'<br>Films: ' +item[0].films+'<br>Species: ' +item[0].species+'<br>Url: ' +item[0].url+'<br><br>Id: ' +item[1].id+'<br>Name: ' +item[1].name+'<br>Gender: ' +item[1].gender+'<br>Age: '+item[1].age+'<br>Eye color: ' +item[1].eye_color+'<br>Hair color: ' +item[1].hair_color+'<br>Films: ' +item[1].films+'<br>Species: ' +item[1].species+'<br>Url: ' +item[1].url);
    
}
console.log(typeof newMap)
   // return output;

newMap.forEach((datum) => {
    const { id, gender } = datum;
    console.log(id);
    console.log(gender);
});


})

        
    


    })    
    */