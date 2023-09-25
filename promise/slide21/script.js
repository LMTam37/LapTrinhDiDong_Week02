let promise = new Promise(function (resolve, reject) {
    resolve();
    reject();
})

promise
    .then(
        function () {
            return new Promise(function (resolve) {
                setTimeout(resolve, 3000);
            });
        }
    )
    .then(
        function (data) {
            console.log(data);
            return 2;
        }
    )
    .then(
        function (data) {
            console.log(data);
        }
    )

