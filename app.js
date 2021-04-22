var events = [];//piltide päring


function getimg() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/A3:D5/' + '?key=' + key + '&majorDimension=COLUMNS  ')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            imageDiv = document.getElementById("images")
            console.log(data)
            let i = 0
            for (element in data.values[3]) {
                let imageElement = document.createElement("img")
                imageElement.src = data.values[3][i]
                imageElement.classList.add("slides")
                imageDiv.appendChild(imageElement)
                i = i + 1
            }
        });
}
getimg();

//emaili & telefoni päring
function getinfo() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/F4:G4/' + '?key=' + key + '&majorDimension=COLUMNS  ')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById("emailID").innerHTML = data.values[0];
            document.getElementById("phoneID").innerHTML = data.values[1];
            console.log(data)
        });
}
getinfo();

//open times
function gettime() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/E6:J6/' + '?key=' + key + '&majorDimension=COLUMNS  ')
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            //alert(data.values[1]);

            document.getElementById("openEstStartID").innerHTML = data.values[0];
            document.getElementById("openEstEndID").innerHTML = data.values[1];
            console.log(data)
        });
}
gettime();

//extra info
function getextrainfo() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/F13:G13/' + '?key=' + key + '&majorDimension=COLUMNS  ')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById("infoEstID").innerHTML = data.values[0];
            document.getElementById("infoEngID").innerHTML = data.values[1];
            console.log(data)
        });
}
getextrainfo();

