/*
    ! I kinda struggled here. I was able to fetch the array containing all 43 characters in this particular API, but was unable to make a for loop in order to display the information. The modules make sense, but I couldn't find exactly what I was looking for, as it gave me errors I was unable to resolve or find a solution to. So I looked up stuff on the internet, (hints the fact that I'm not quite using things that we already went over) which I recognize is something I shouldn't do. I utilized the learning gym and talked to Emory Brunner. She was very helpful and nice, but due to me using weird methods, she got confused. She gave me helpful tips about how to do certain things, but overall, I was kinda too overwhelmed to find out how to do everything. I apologise for me being rather sloppy and unproffessional. 
*/


let studioGhibliPeopleList = document.querySelector('ul');
//const array1 = [newMap];
fetch('https://ghibliapi.herokuapp.com/people')
    .then(async function (response) {
        //console.log(response)
        people =  response.json();
        //console.log(people);
        //people = json.results;




        
        await Promise.all([people]).then((values) => {
            array = values;
            console.log(values);
        
            var newMap = new Map(array)

let arrayLength = newMap.length;
//const map1 = item.map(x => x + 1);
// Printing keys and values
//for (var i = 0, len = array.length; i < len; i++) {
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