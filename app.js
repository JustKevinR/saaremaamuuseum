function getinfo() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/A3:D16/' + '?key=' + key + '&majorDimension=COLUMNS  ')
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
                imageElement.classList.add("mySlides")
                imageDiv.appendChild(imageElement)
                i = i + 1
            }
        });
}

getinfo();
