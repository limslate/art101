// index.js - lab16
// Author: Emmet Slater
// Date: 6/5/25

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";


function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}


function getComic(num) {
  let numStr = (typeof num === 'undefined') ? "" : num + "/";
  let ourURL = URLpre + numStr + URLpost;

  console.log("Fetching:", ourURL);

  $.ajax({
      url: ourURL,
      data: {},
      type: "GET",
      dataType: "json",

      success: function(data) {
          let title = make_safe(data.title);
          let alt = make_safe(data.alt);
          let imageUrl = data.img;
          let comicNum = data.num;

          let html = `
            <div id="imageblock">
              <h2>${title}</h2>
              <img src="${imageUrl}" title="${alt}" alt="${alt}">
              <p>${alt}</p>
              <button id="prev">Previous</button>
              <button id="next">Next</button>
            </div>
          `;

          $("#output").html(html);
          $("#prev").click(function() {
              getComic(comicNum - 1);
          });

          $("#next").click(function() {
              getComic(comicNum + 1);
          });
      },

      error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
          $("#output").html(`<p>Something went wrong. Try again later.</p>`);
      }
  });
}

getComic();


