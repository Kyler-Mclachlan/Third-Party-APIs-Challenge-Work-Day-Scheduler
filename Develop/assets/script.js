// stored Ids per hour of day
var stored_entries = [
  {
  id: "zero",
  input: ""
},
{
  id: "one",
input: ""
},
{
  id: "two",
input: ""
},
{
  id: "three",
  input: ""
},
{
  id: "four",
  input: ""
},
{
  id: "five",
  input: ""
},
{
  id: "six",
  input: ""
},
{
  id: "seven",
input: ""
},
{
  id: "eight",
  input: ""
},
]
// array storing local storage pull 
var loaded_entries = []

// display current date
var display_date = function (){
  var current_date = moment().format('dddd, MMMM Do ');
  $('#currentDay').html(current_date);

}
display_date();
console.log(current_date);

// brings in saved tasks
var loadTasks = function(){
  savedEntries = localStorage.getItem("stored_entries");
  if (!savedEntries){
    savedEntries = [];
    return false;
  }
  savedEntries = JSON.parse(savedEntries);
  for ( var i = 0; i < savedEntries.length; i++ ){
    $(`#${savedEntries[i].id}`).val(savedEntries[i].input)
  }
}

// bring in loaded tasks
loadTasks();

$(".universal").on("click", function(){
  var text ={ 
    input: $(this).value,
    id: document.getElementById("eigth").id
    };
    saveTask(text);
    console.log(text);
   })
   

$(".zero_button").on("click", function(){
   var text ={ 
  input: document.getElementById("zero").value,
  id: document.getElementById("zero").id
  };
  saveTask(text);
  console.log(text);
})
$(".one_button").on("click", function(){
  var text ={ 
 input: document.getElementById("one").value,
 id: document.getElementById("one").id
 };
 saveTask(text);
 console.log(text);
})
$(".two_button").on("click", function(){
  var text ={ 
 input: document.getElementById("two").value,
 id: document.getElementById("two").id
 };
 saveTask(text);
 console.log(text);
})
$(".three_button").on("click", function(){
  var text ={ 
 input: document.getElementById("three").value,
 id: document.getElementById("three").id
 };
 saveTask(text);
 console.log(text);
})
$(".four_button").on("click", function(){
  var text ={ 
 input: document.getElementById("four").value,
 id: document.getElementById("four").id
 };
 saveTask(text);
 console.log(text);
})
$(".five_button").on("click", function(){
  var text ={ 
 input: document.getElementById("five").value,
 id: document.getElementById("five").id
 };
 saveTask(text);
 console.log(text);
})
$(".six_button").on("click", function(){
  var text ={ 
 input: document.getElementById("six").value,
 id: document.getElementById("six").id
 };
 saveTask(text);
 console.log(text);
})
$(".seven_button").on("click", function(){
  var text ={ 
 input: document.getElementById("seven").value,
 id: document.getElementById("seven").id
 };
 saveTask(text);
 console.log(text);
})
$(".eigth_button").on("click", function(){
  var text ={ 
 input: document.getElementById("eigth").value,
 id: document.getElementById("eigth").id
 };
 saveTask(text);
 console.log(text);
})

// saves Tasks
var saveTask = function(entry){
  if (entry.input == "") {
    console.log("emptytask")
    return false
  }
  else if (entry.input !== ""){
    console.log("not_empty")
    for (var i = 0; i < 10; i++){
      if (entry.id == stored_entries[i].id){
        console.log(stored_entries[i].input)
        stored_entries[i].input = entry.input;
        console.log(entry.input)
        console.log(stored_entries[i].input)
        SaveLocal();
      }
    }
  }
  else {
    console.log("null")
  }
} 

var SaveLocal = function(){
  window.localStorage.setItem("stored_entries", JSON.stringify(stored_entries));
}

window.localStorage.setItem("stored_entries", JSON.stringify(stored_entries));

