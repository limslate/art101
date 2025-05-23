// index.js - lab12
// Author: Emmet Slater
// Date: 5/22/25

function sortingHat(str) {
  const length = str.length;
  const mod = length % 4;
  if (mod == 0) {
    return 'Kutchipatchi';
  } else if (mod == 1) {
    return 'Kikitchi';
  } else if (mod == 2) {
    return 'Memetchi';
  } else {
    return 'Mimitchi';
  }
}

$('#button').click(function () {
  const userName = $('#user-name').val();
  const sortedTama = sortingHat(userName);
  const outputText = `<div class="text"><p>You got: ${sortedTama} as your character!</p></div>`
  $('#output').html(outputText).append("<div class='tama-name'></div>");
})

