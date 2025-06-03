// index.js - lab15
// Author: Emmet Slater
// Date: 6/2/25


$("#activate").click(function() {
    console.log("Button clicked!");
    $.ajax({
        url: "https://yesno.wtf/api",
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            let html = `
                <p><strong>Answer:</strong> ${data.answer}</p>
                <img src="${data.image}" alt="${data.answer}" />
            `;
            $("#output").html(html);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").html("<p>Something went wrong. Try again later.</p>");
        }
    });
});