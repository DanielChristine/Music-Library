"use strict";

function get() { // get vs getJSON
  $.get("http://www.devcodecampmusiclibrary.com/api/music", function (
    response,
    status
  ) {
    writeTable(response); // should status be added as a parameter to writeTable
  });
}

function writeTable(response) {
  for (let index = 0; index < response.length; index++) {
    $("tbody").append(`<tr>
                            <td>${response[index]["id"]}</td>
                            <td>${response[index]["title"]}</td>
                            <td>${response[index]["album"]}</td>
                            <td>${response[index]["artist"]}</td>
                            <td>${response[index]["genre"]}</td>
                            <td>${response[index]["releaseDate"]}</td>
                      </tr>`); 
  }
}

get();



// $.ajax({
//     url: `http://www.devcodecampmusiclibrary.com/api/music`,
//     dataType: "json",
//     type: "post",
//     success: function (data, textStatus, jQxhr) {
//       //Do something with response data (data parameter)
//     },
//     error: function (jqXhr, textStatus, errorThrown) {
//       //if the request fails, the errorThrown parameter will contain details of the error
//       console.log(errorThrown);
//     },
//   });

// let findMusic = prompt("Enter an artist, album, title, etc.")
// function getSpecficMusic(id){

//     return;
// }
