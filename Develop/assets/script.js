var stored_entries = []
var zero = document.querySelector("input[name='zero']");


$(".button").on("click", function(){
   var text ={ 
  input: document.getElementById("zero").value,
  id: document.getElementById("zero").id
  };
  console.log(text);
})

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
window.localStorage.setItem("stored_entries", JSON.stringify(stored_entries));
var loadTasks = function(){
  savedEntries = localStorage.getItem("stored_entries");
  if (!savedEntries){
    savedEntries = [];
    return false;
  }
  savedEntries = JSON.parse(savedEntries);
}
  $(".textarea").on("blur", "input", function() {
    console.log("leaving")
  });

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