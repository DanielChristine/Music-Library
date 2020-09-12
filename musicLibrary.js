"use strict"

function get(){
$.get("http://www.devcodecampmusiclibrary.com/api/music", function(response, status){

writeTable(response);

})}

function writeTable(response){
    for (let index = 0; index < response.length; index++) {
$("tbody").append(`<td>${0}</td>`);
    }
}

get();


function getSpecficMusic(id){

    return {}
