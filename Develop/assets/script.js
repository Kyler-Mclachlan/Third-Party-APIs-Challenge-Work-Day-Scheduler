var stored_entries = {
  key:"0",
  input:"test"
};

var nine_AM = document.querySelector("#zero");
$(".textarea").on("blur", "input", function() {
  var text ={ 
    input: $(this).val(),
    id: $(this).attr("id")
    };
    console.log(text);
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
  
