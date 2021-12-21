var stored_entries = []

// I'll want to replace the key values in each obx, then have a timer function that checks that adds each key value pair to the array and pushes it to local storage, and the does a for loop to compare to see if the user changed anything (every 1 min?)
var nine_AM = document.querySelector("#zero");
$(".textarea").on("blur", "input", function() {
  var text ={ 
    input: $(this).val(),
    id: $(this).attr("id")
    };
    console.log(text);
    stored_entries.push(text);
    console.log(stored_entries);
    return text;
  });
window.localStorage.setItem("stored_entries", JSON.stringify(stored_entries));

  $(".textarea").on("blur", "input", function() {
    console.log("leaving")
  });

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
  
