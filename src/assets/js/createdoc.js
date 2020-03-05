createDoc = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.getElementById("demo").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "http://plm2.xinri.com/Windchill/app/", true);
    xmlhttp.send();
    alert(xmlhttp.getAllResponseHeaders());
};