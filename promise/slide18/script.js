let myPromise = new Promise(function (resolve, reject) {
    resolve();
    reject();
})

myPromise
    .then(
        function () {
            console.log('Successful!');
        }
    )
    .catch(
        function () {
            console.log('UnSuccessful!');
        }
    )
    .finally(
        function () {
            console.log('Finally!');
        }
    );