"use strict";

function get() {
  $.get("http://www.devcodecampmusiclibrary.com/api/music", function (
    response,
    status
  ) {
    writeTable(response);
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

function getSpecficMusic() {
  $.get("http://www.devcodecampmusiclibrary.com/api/music", function (
    response,
    status
  ) {
    let findMusic = prompt("Enter an artist, album, title, etc.");
    writeTable(response).filter(findMusic);
  });
}
