var stored_entries = []
var zero = document.querySelector("input[name='zero']");

var test = { id: "eigth", input: "test"};

stored_entries.push(test);
console.log(test)
// var test_replacement = function(){
//   for (var i = 0; i < 10; i++){
//     if (entry.id == stored_entries.[i].id){
//       console.log("match")
// }
$(".zero_button").on("click", function(){
   var text ={ 
  input: document.getElementById("zero").value,
  id: document.getElementById("zero").id
  };
  console.log(text);
})
$(".one_button").on("click", function(){
  var text ={ 
 input: document.getElementById("one").value,
 id: document.getElementById("one").id
 };
 console.log(text);
})
$(".two_button").on("click", function(){
  var text ={ 
 input: document.getElementById("two").value,
 id: document.getElementById("two").id
 };
 console.log(text);
})
$(".three_button").on("click", function(){
  var text ={ 
 input: document.getElementById("three").value,
 id: document.getElementById("three").id
 };
 console.log(text);
})
$(".four_button").on("click", function(){
  var text ={ 
 input: document.getElementById("four").value,
 id: document.getElementById("four").id
 };
 console.log(text);
})
$(".five_button").on("click", function(){
  var text ={ 
 input: document.getElementById("five").value,
 id: document.getElementById("five").id
 };
 console.log(text);
})
$(".six_button").on("click", function(){
  var text ={ 
 input: document.getElementById("six").value,
 id: document.getElementById("six").id
 };
 console.log(text);
})
$(".seven_button").on("click", function(){
  var text ={ 
 input: document.getElementById("seven").value,
 id: document.getElementById("seven").id
 };
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

var saveTask = function(entry){
  if (entry.input == "") {
    console.log("emptytask")
    return false
  }
  else if (entry.input !== ""){
    console.log("not_empty")
    for (var i = 0; i < 10; i++){
      if (entry.id == stored_entries[i].id){
        console.log("match")
      }
    }
  }
  else {
    console.log("null")
  }
} 
window.localStorage.setItem("stored_entries", JSON.stringify(stored_entries));
var loadTasks = function(){
  savedEntries = localStorage.getItem("stored_entries");
  if (!savedEntries){
    savedEntries = [];
    return false;
  }
  savedEntries = JSON.parse(savedEntries);
}
// I'll want to replace the key values in each obx, then have a timer function that checks that adds each key value pair to the array and pushes it to local storage, and the does a for loop to compare to see if the user changed anything (every 1 min?)
var nine_AM = document.querySelector("#zero");
// $(".textarea").on("blur", "input", function() {
//   var text ={ 
//     input: $(this).val(),
//     id: $(this).attr("id")
//     };
//     console.log(text);
//     for (var i = 0; i < stored_entries.length; i++)
//       if (obj.stored_entries[i] 
//     stored_entries.push(text);
//     console.log(stored_entries);
//     return text;
//   });
  // $(".textarea").on("blur", "input", function() {
  //   console.log("leaving")
  // });

var test = function(){
  console.log("test")
};
// $(".textarea").on("click", "input", function() {
//   var text ={ 
//     input: $(this).val(),
//     id: $(this).attr("id")
//     };
//     console.log(text);
//     stored_entries.push(text);
//     console.log(stored_entries);
//     return text;
// });
  
zero.addEventListener("submit", test); // this listens for a button element or if a user cliocks enter on their keyboard

// ask about how the li element knows where to go
// var listItemEl = document.createElement("li");
// listItemEl.className = "task-item";
// listItemEl.textContent = "This is a new task.";
// tasksToDoEl.appendChild(listItemEl);