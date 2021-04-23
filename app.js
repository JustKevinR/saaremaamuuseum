var events = [];
var sliderInterval;
var sliderIndex = 0;

function getimg() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/B4:E13/' + '?key=' + key + '&majorDimension=COLUMNS')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            parseEvents(data);
            startSlideShow();
        })
        .then(function (json) { //update data
            //setTimeout(update, 1000);
        }).catch(function (err) {
        console.log('Oops error: ' + err);
    })
}

function parseEvents(data) {
    events = [];

    for (value in data.values) {

        var columns = data.values[value];
        var index = 0;
        for (column in columns) {

            var event = {
                name: "", start: "", end: "", url: ""
            }

            if (events[index] != undefined) {
                event = events[index];
            }

            var i = parseInt(value);

            if (i == 0) {
                event.name = columns[column];
            } else if (i == 1) {
                event.start = columns[column];
            } else if (i == 2) {
                event.end = columns[column];
            } else if (i == 3) {
                event.url = columns[column];
            }

            events[index] = event
            index++;
        }
    }
}

function startSlideShow() {
    sliderInterval = setInterval(function () {

        var event = events[sliderIndex];

        if (event == undefined) {
            document.getElementById("slider-container").innerHTML = 'Oops something went wrong!';
        } else if (event.end > Date) {
            //event is over
        } else {
            document.getElementById("slider-container").innerHTML = '<img class="poster" src="'+event.url+'">';
        }

        sliderIndex++;

        if (sliderIndex >= events.length) {
            sliderIndex = 0;
        }
    }, 5000);
}

//emaili & telefoni päring
function getinfo() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/G13:H13/' + '?key=' + key + '&majorDimension=COLUMNS  ')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById("emailID").innerHTML = data.values[0];
            document.getElementById("phoneID").innerHTML = data.values[1];
            console.log(data)
        });
}

//extra info
function getextrainfo() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/G9:G10/' + '?key=' + key + '&majorDimension=COLUMNS  ')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById("infoEstID").innerHTML = data.values[0][0];
            document.getElementById("infoEngID").innerHTML = data.values[0][1];
            console.log(data)
        });
}

//extra info
function getopening() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/G4:H6/' + '?key=' + key + '&majorDimension=COLUMNS  ')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById("est").innerHTML = data.values[0][0];
            document.getElementById("start").innerHTML = data.values[0][2];
            document.getElementById("end").innerHTML = data.values[1][2];
            document.getElementById("startEng").innerHTML = data.values[0][2];
            document.getElementById("endEng").innerHTML = data.values[1][2];
            document.getElementById("eng").innerHTML = data.values[1][0];
            console.log(data)
        });
}


startInfoSlider ()

function startInfoSlider () {
    getimg();
    getextrainfo();
    getinfo();
    getopening();
}

setInterval(function () {
    clearInterval(sliderInterval);
    startInfoSlider();
}, 1000*60);
