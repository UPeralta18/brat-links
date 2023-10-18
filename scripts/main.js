// function readTextFile(file)
// {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'links.brat.com.br/links.txt', false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console(allText);
            }
        }
    }
    rawFile.send(null);
// }


// fetch('https://cors-anywhere.herokuapp.com/' + "links.txt")
//   .then((res) => res.text())
//   .then((text) => {
//     console.log(text)
//    })
//   .catch((e) => console.error(e));