const urlBacon = "https://dummyjson.com/products";
(function () {
    $.ajax({
        method: "GET",
        url: urlBacon,
        dataType: "json"
    })
        .done(function (data) {
            console.log(data.products);
        })
        .fail(function () {
            alert("no good");
        });
})()
