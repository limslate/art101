// index.js - lab16
// Author: Emmet Slater
// Date: 6/5/25


function getAndDisplayComic() {
    $.ajax({
        url: "https://xkcd.com/info.0.json",  
        type: "GET",
        dataType: "json",
        success: function(comicObj) {
            console.log("Success!", comicObj); 

            let comicTitle = `<h2>${comicObj.title}</h2>`;
            let comicImage = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;
            let comicCaption = `<p>${comicObj.alt}</p>`;

            $("#output").html(comicTitle + comicImage + comicCaption);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").html(`<p>Something went wrong. Please try again later.</p>`);
        }
    });
}

$(document).ready(function() {
    getAndDisplayComic();
});