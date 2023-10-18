fetch("links.txt").then((res) => res.text()).then((text) => {
    var linksBox = document.getElementById('links');
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        // Processar cada linha
        // const line = document.createElement('p');
        // line.textContent = lines[i];
        // fileContents.appendChild(line);
        console.log(lines[i]);
    }
}).catch((e) => console.error(e));