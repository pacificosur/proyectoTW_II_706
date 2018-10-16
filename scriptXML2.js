

texto = "<peliculas>" +
                "<pelicula>" +
                    "<titulo>Million Dollar Baby</titulo>" +
                    "<productor>Paul Haggis</productor>" +
                    "<director>Clint Eastwood</director>" +
                    "<actor>Clint Eastwood</actor>" +
                    "<comentarios>Buena</comentarios>" +
                "</pelicula>" +

                "<pelicula>" +
                    "<titulo>Ant-Man</titulo>" +
                    "<productor>Peyton Reed</productor>" +
                    "<director>Peyton Reed</director>" +
                    "<actor>Clint Eastwood</actor>" +
                    "<comentarios>Buena</comentarios>" +
                "</pelicula>" +
            "</peliculas>";


function xmlDesdeJavaScript(){
    var parser;
    var xmlDoc;

    // Se crea un nuevo objeto analizador del docuemento XML
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(texto, "text/xml");

    var table="<tr><th>Título Película</th><th>Productor</th><th>Director</th><th>Actor</th><th>Comentarios</th></tr>";

    var dato = xmlDoc.getElementsByTagName("pelicula");
    for (i = 0; i <dato.length; i++) { 
        table += "<tr><td>" +
        dato[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
        "</td><td>" +
        dato[i].getElementsByTagName("productor")[0].childNodes[0].nodeValue +
        "</td><td>" +
        dato[i].getElementsByTagName("director")[0].childNodes[0].nodeValue +
        "</td><td>" +
        dato[i].getElementsByTagName("actor")[0].childNodes[0].nodeValue +
        "</td><td>" +
        dato[i].getElementsByTagName("comentarios")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("idTable").innerHTML = table;
}