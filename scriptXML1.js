var xmlhttp;
var xmlDoc;

function eliminarNodoXML(){
    cargarDocumentoXML();

    elementoEliminar = xmlDoc.getElementsByTagName("pelicula")[document.getElementById("idElemento").value];
    xmlDoc.documentElement.removeChild(elementoEliminar);

    mostrarDatos();
}

function agregarNodoXML(){
    cargarDocumentoXML();

    elementoPrincipal = xmlDoc.createElement("pelicula");

    elementoTitulo = xmlDoc.createElement("titulo");
    valorTitulo = xmlDoc.createTextNode(document.getElementById("idTitulo").value);
    elementoTitulo.appendChild(xmlDoc.createTextNode(document.getElementById("idTitulo").value));

    elementoProductor = xmlDoc.createElement("productor");
    valorProductor = xmlDoc.createTextNode(document.getElementById("idProductor").value);
    elementoProductor.appendChild(valorProductor);

    elementoDirector = xmlDoc.createElement("director");
    valorDirector = xmlDoc.createTextNode(document.getElementById("idDirector").value);
    elementoDirector.appendChild(valorDirector);

    elementoActor = xmlDoc.createElement("actor");
    valorActor = xmlDoc.createTextNode(document.getElementById("idActor").value);
    elementoActor.appendChild(valorActor);

    elmentoComentarios = xmlDoc.createElement("comentarios");
    valorComentarios = xmlDoc.createTextNode(document.getElementById("idComentario").value);
    elmentoComentarios.appendChild(valorComentarios);

    elementoPrincipal.appendChild(elementoTitulo);
    elementoPrincipal.appendChild(elementoProductor);
    elementoPrincipal.appendChild(elementoDirector);
    elementoPrincipal.appendChild(elementoActor);
    elementoPrincipal.appendChild(elmentoComentarios);

    xmlDoc.getElementsByTagName("peliculas")[0].appendChild(elementoPrincipal);

    mostrarDatos();    
}

function mostrarDatosXML(){
    cargarDocumentoXML();
    mostrarDatos();
}

function cargarDocumentoXML(){

    if (window.XMLHttpRequest)
    {
        // Objeto para IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }else{
        // Objeto para IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
     
    // Abrimos el archivo que esta alojado en el servidor pelicula.xml
    xmlhttp.open("GET","pelicula.xml",false);
    xmlhttp.send();
     
    // Obtenemos un objeto XMLDocument con el contenido del archivo xml del servidor
    xmlDoc=xmlhttp.responseXML;
}

function mostrarDatos(){
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