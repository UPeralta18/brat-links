fetch("links.txt").then((res) => res.text()).then((text) => {
    var linksBox = document.getElementById('links');
    var lines = text.split('\n');
    var content = '';
    for (let i = 0; i < lines.length; i++) {
        let text_link = lines[i].split(';');
        content += '<a href="' + text_link[1] + '" target="_blank">' +
                        '<li>' + text_link[0] + '</li>' +
                    '</a>'
    }
    linksBox.innerHTML = content;
}).catch((e) => console.error(e));