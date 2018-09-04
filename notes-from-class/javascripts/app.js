
// ========================================
// Definition of Rover Object 
var row = 10; // Size of the y axile
var column = 10; // Size of the x axile
var grid = []; // Grid matrix
var travelLog = []; // Documenting all Rover prier positions
// ======================

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*=========================================
                 forEach                     =================*/

var originalArray = [1,2,3,4,5,6,7,8,9];
var newArray = []
originalArray.forEach((oneNum)=>{
  newArray.push(oneNum + 1);
})
console.log(newArray); // [2,3,4,5,6,7,8,9,10]

/*=========================================
                 map                     =================*/

var originalArray = [1,2,3,4,5,6,7,8,9];
var newArray = []
originalArray.forEach((oneNum)=>{
  newArray.push(oneNum + 1);
})
console.log(newArray); // [2,3,4,5,6,7,8,9,10]

 var originalArray = [1,2,3,4,5,6,7,8,9];
 var newArray = originalArray.map((num)=>{
   return num + 1
 })
 console.log(newArray); // [2,3,4,5,6,7,8,9,10]


 const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

 const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

//--------------------------------

var arrayOfPeople = [
  {name: 'lola', age: 24},
  {name: 'randy', age: 33},
  {name: 'paola', age: 19},
  {name: 'will', age: 29}
];

var arrayOfNames = arrayOfPeople.map((onePerson)=>{
  return onePerson.name
});

console.log(arrayOfNames);

//-----------------------------
var arrayOfLowerCaseCities = ['miami', 'barcelona', 'atlanta', 'minneapolis', 'amsterdam', 'moscow'];


var capCities = arrayOfLowerCaseCities.map((oneCity)=>{
  return oneCity[0].toUpperCase() + oneCity.substr(1);
})

console.log(capCities);



/*=========================================
                 reduce                     =================*/

var nums = [24,16,33,17,5,15,9,11];
var total = 0;
nums.forEach((eachNum)=>{
  total += eachNum
})
console.log(total);

var nums = [24,16,33,17,5,15,9,11];

var totalSum = nums.reduce((total, eachNum)=>{

  return total + eachNum;

},0)

console.log(totalSum);

const ageSum = ages.reduce((total, age) => total + age, 0);

//---------------------------


function findAvgWordLength(arrayOfWords){

  var x = arrayOfWords.reduce((runningTotal, eachWord)=>{
    return runningTotal + eachWord.length;
  },0)

  return (x / arrayOfWords.length);
}

//-------------------------




/*=========================================
                 filter                    =================*/

  var words = ['tractor', 'skyscrapers', 'chicken', 'mango', 'cvs'];

  findAvgWordLength(words);
  
  
  var arrayOfNumerals = [2,4,7,5,4,9,8,7,6,5,1,2,4,6,5];
  
  var newArray = [];
  arrayOfNumerals.forEach((num)=>{
    if(num >=5){
      newArray.push(num);
    }
  })
  console.log(newArray)
  
  arrayOfNumerals = [2,4,7,5,4,9,8,7,6,5,1,2,4,6,5];
  var fiveAndUp = arrayOfNumerals.filter((eachNum)=>{
      return eachNum >= 5;
  })
  console.log(fiveAndUp);


  const canDrink = ages.filter(age => age >= 21);

  //------------------

  var words = ['car', 'hotel', 'river', 'car', 'bush', 'tree', 'river', 'hotel'];

  var noDupes = words.filter((eachWord, yindex)=>{
    return words.indexOf(eachWord, yindex+1) === -1;
  })

// or better!
  var noDupes = words.filter((item, i, allItems)=>{
      return i == allItems.indexOf(item);
  })

  console.log(noDupes)

  words.indexOf('bush', 5);



 /*=========================================
                 sort                     =================*/




  const sortedArrOfWords = arrOfWords.sort((a, b) => (a.start > b.start ? 1 : -1));

  const sortAges = ages.sort((a, b) => a - b);

  //-----------------

  var arrOfNums = [4,5,3,2,10,11,15,6,9,6,4,5,9,1,4,3,2];

  var arrOfWords = ['animals', 'radio', 'electricity', 'precarious', 'bylateral', 'diamond', 'glass']
  
  arrOfWords.sort((a,b)=>{
    if(a.length < b.length){return -1}
    if(b.length < a.length){return 1}
    if(b.length == a.length){return 0}
  })
  
  console.log(arrOfWords);


  //--------------


  var products = [
  {name: 'electric guitar', price: 280},
  {name: 'speakers', price: 85},
  {name: 'rip off sunglasses', price: 7},
  {name: 'electric scooter', price: 225},
  {name: 'polo shirt with a prestigious emblem', price: 150}
];


products.sort((a,b)=>{
  if(b.price > a.price){return -1}
  if(a.price > b.price){return 1}
  if(b.price == a.price){return 0}
});


/*=========================================
                 reverse                     =================*/

var a = ['one', 'two', 'three'];
var reversed = a.reverse();

console.log(a);        // ['three', 'two', 'one']
console.log(reversed); // ['three', 'two', 'one']


/*=========================================
                 splice                     =================*/


var bootcamps = ["Miami", "Paris", "Barcelona", "Madrid", "México"];

bootcamps.splice(2, 0, "Berlin");
bootcamps = ["Miami", "Paris", "Berlin", "Barcelona", "Madrid", "México"]


//Using splice we add “Berlin” to the third position of the array (index of 2). Now let’s see how we can use splice to remove an element.

var bootcamps = ["Miami", "Paris", "Berlin", "Barcelona", "Madrid", "México"];

bootcamps.splice(3, 2);
bootcamps = ["Miami", "Paris", "Berlin", "México"]

 /*=========================================
                     split                 =================*/

function myFunction() {
  var str = "How are you doing today?";
  var res = str.split(" ");

  console.log(res); //[How, are, you, doing, today?]
}

myFunction(); //[How, are, you, doing, today?]

myFunction(); //How,are,you,doing,today?


 /*=========================================
                     join                 =================*/

  function myFunction() {
  var str = ['How', 'are', 'you', 'doing', 'today?'];
  var res = str.join(" ");

  console.log(res); // "How are you doing today?"
  }

myFunction(); // "How are you doing today?"


 /*=========================================
                     Combine!!                =================*/

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)  //.sort((a, b) => (a > b ? 1 : -1));
  .reduce((a, b) => a + b, 0);

console.log(combined);



/*=========================================
                    element = document.getElementById();  =================*/



/*=========================================
                    element.innerHTML = "fgrgag";  =================*/


/*=========================================
                    element.style.backroundColor = 'red';  =================*/



/*=========================================
                    element = document.getElementById()  =================*/


/*=========================================
                    element.className = " new class";  =================*/


/*=========================================
                    element = document.getElementsByClassName()[i];  =================*/


/*=========================================
                    element = document.querySelector();  =================*/


/*=========================================
                    button.onclick = () => {  consol.log('button clicked') ; }  =================*/


/*=========================================
                    element.onchange = () => {  consol.log('button clicked') ; }  =================*/



/*=========================================
                    element.currentTarget;  =================*/



/*=========================================
                    document.creatElement("");  =================*/




/*=========================================
                    document.body.appendChild(newThing);  =================*/



/*=========================================
                    element.value ;  =================*/




/*=========================================
                    element.remove ;  =================*/




/*===============================================================================================*/

/*=========================================
                    object oriented =================*/


                    class Car{
                      constructor(whichBrand, whichModel, whichColor, howManyDoors){
                      this.brand =  whichBrand;
                      this.model = whichModel;
                      this.color = whichColor;
                      this.doors = howManyDoors;
                      this.currentPassengers = [];
                      this.currentDriver = null;
                      this.isEngineRunning = false;
                      this.healthPoints = 100;
                      };
                  
                      turnTheCarOn() {
                          this.isEngineRunning = true;
                      };
                    
                      getInTheCar(who) {
                          this.currentDriver = who;
                      };
                    
                      getCrashedInto(){
                        this.healthPoints -= 25;
                      }
                    
                      crashInto(whom){
                        whom.getCrashedInto();
                      }
                    
                    }
                    
                    
                      class LuxurySedan extends Car{
                        constructor(brand, model, color) {
                          super(brand, model, color)
                          this.doors = 4;
                          this.interior = 'leather';
                        }

                      }
                    
                    
                      var blah = new LuxurySedan('lexus', 'es', 'black', 4);
                    
                      blah.turnTheCarOn();
                    
                      console.log(blah);    
                      
                      /////////////////////////////
                    
                    var nicksCar = {
                      brand: 'honda',
                      model: 'civic',
                      color: 'black',
                      doors: 2,
                      currentPassengers: [],
                      currentDriver: null,
                      isEngineRunning: false,
                    
                      turnTheCarOn: function () {
                        this.isEngineRunning = true;
                      },
                    
                      getInTheCar: function (who) {
                        this.currentDriver = who;
                      }
                    
                    }
                    
                    console.log(
                    nicksCar
                    )
                    
                    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
                    
                    nicksCar.turnTheCarOn();
                    
                    nicksCar.getInTheCar('some criminal')
                    
                    
                    console.log(
                    nicksCar
                    )


/*=========================================
                    jQuery             =================*/


  //                   <script
  // src="http://code.jquery.com/jquery-3.3.1.min.js"
  // integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  // crossorigin="anonymous"> </script>


  $("idTag") = document.querySelectorAll("idTag") ;  // jQuery is allways qurySelectorAll [All!!!] which is an Array


   

 




/*=========================================
                    Onload   for having the scrip link on top in meta   ====================*/


$(documnet).ready(()=> {     // ===  // window.onload = function(){ //All script code goes here }

// All script code goes here

})     


/*=========================================
                    jQuery             =================*/

                    //    .eq(3) === [3] // to get the element of index n in jQuery array
                    // .val() === .value

                    // .html() === .inerHTML
                    // .append(text) === .appanedChiled(text) 

                    //append  adds ! and innerText replaces

                    
                    // *= means contains
                    // ~= means contains and then a word
                    // != dosent contain 
 
                    //attr("Id") === src id  // (better to avoid if can use prop)
                    //prop("Id", replaced src) === src id AND replaces the src in the second argument

                    // $(".selector").addClass(classname)
                    // $(".selector").addClass(classname)
                    // $(".selector").toggleClass(classname)
                    //.hide()
                    //.show()
                    //.toggle() = .hide() + .show()


myButton.click(function(e){

  console.log($(this)); // will console.log the click event
  console.log(e);  //  

})


/*=========================================
                    jQuery             =================*/


                    setTimeout(() => {

                      console.log("good bye");

                    },2000)

/*=========================================
                    Canvis             =================*/

        //////////Drow line
        // Reset the current path
        hangCanvas.ctx.beginPath();
         // Staring point ( x , y)
        hangCanvas.ctx.moveTo(this.x * (0.25), this.y * 0.46);
        // End point to( x, y )
        hangCanvas.ctx.lineTo(this.x * (0.25), this.y * (0.46 + 0.1));
        // can close the path
        hangCanvas.ctx.closePath();
        // Make the line visible
        hangCanvas.ctx.stroke();



    //------- lines 

    for (let i=0, j=50; i < this.secretWord.length; i++, j+=50) {
      hangCanvas.ctx.beginPath();
      hangCanvas.ctx.moveTo(450+j, 450);
      hangCanvas.ctx.lineTo(470+j, 450);
      hangCanvas.ctx.closePath();
      hangCanvas.ctx.stroke();
    }

    //------- letters 
    
    function drawWorngLetter(letter,i) {
      let location = 400+(50*(i-1));
      hangCanvas.ctx.font = "30px Arial";
      hangCanvas.ctx.fillText(letter,location,200);
    }

    //------- circle

    // ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
    function drawCircle() {
      hangCanvas.ctx.beginPath();
      hangCanvas.ctx.arc(this.x * (0.25), this.y * (0.30 + 0.096), 30, 0, 2 * Math.PI);
      hangCanvas.ctx.stroke();
    }

     //------- Animation 


     //------ instead of set interval or timpout functions, use 'window.requestAnimationFrame()'

     function animate () {

      // ------ code here 

       window.requestAnimationFrame(animate);

     }



//------- use for desableing other keys

 //  -->>        event.preventDefault()



 //--------------------- Promises

 promise3.then((result)=>{

  console.log(result);

 }).catch((error)=>{

  console.log(error);

 })


 // ---------------------  mongoDB 

 // { field : value }

 // { $or: [{<expression1>},{<expression2>},{<expression3>}] }



// 1. All the companies that it's name match 'Babelgum'. Retrieve only their name field.
// FILTER()-> {name: "Babelgum"} . PROJECT()-> {_id: 0, name: 1}

// 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by number of employees.
// FILTER()-> {number_of_employees: {$gt: 5000}} .  SORT()-> {number_of_employees: 1 }

// 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the name and founded_year fileds.
//FILTER()-> { $and: [ {founded_year: {$gt: 1999}}, {founded_year: {$lt: 2006}} ] } . PROJECT()-> {_id: 0, name: 1, founded_year: 1}

// 4. All the companies that had an IPO of more than 100.000.000 and have been founded before 2010. Retrieve only the name and ipo fields.
//FILTER()-> { $and: [ {"ipo.valuation_amount": {$gt: 100000000}}, {founded_year: {$lt: 2010}} ] } . PROJECT()-> {_id: 0, name: 1, "ipo.valuation_amount": 1}

// 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
//FILTER()-> { $and: [ {number_of_employees: {$lt: 1000}}, {founded_year: {$lt: 2005}} ] } . PROJECT()-> {_id: 0, name: 1, number_of_employees: 1 } . SORT()-> {number_of_employees: -1 }

// 6. All the companies that don't include the partners field.
//FILTER()-> { partners : { $exists : false } }


// 7. All the companies that have a null type of value on the category_code field.
//FILTER()->  {category_code: null}

// 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the name and number of employees fields.


// 9. Order all the companies by their IPO price descendently.
// 10. Retrieve the 10 companies with more employees, order by the number of employees
// 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.
// 12. All the companies that have been 'deadpooled' after the third year.
// 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000
// 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their name and acquisiton field.
// 15. Order the companies by their founded year, retrieving only their name and founded year.
// 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their aquisition price descendently. Limit the search to 10 documents.
// 17. All the companies on the 'web' category that have more than 4000 employees. Sort them by the amount of employees in ascendant order.
// 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.
// 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their name and acquisition fields.
// 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.


 // ------------------- Mongo Shell
 // db.movies.find().pretty()







              


















                 



































