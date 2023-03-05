function LoadFile(event)
{
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
    console.log(e.target.result);
    const fileData = e.target.result.substr(e.target.result.indexOf(",")+1);
    const mimeTypeStart = e.target.result.indexOf("data:") + 5;
    const mimeTypeEnd = e.target.result.indexOf(";");
    const mimeType = e.target.result.substr(mimeTypeStart, mimeTypeEnd - mimeTypeStart);
    const fileName = file.name;
    document.getElementById("fileData").value = fileData;
    document.getElementById("mimeType").value = mimeType;
    document.getElementById("fileName").value = fileName;
    };    
    reader.readAsDataURL(file);
}
const link = "https://script.google.com/macros/s/AKfycbyvPdtaJ3iXDd9QqOw-NOvfiSHvuFfqzsTqlehylwDEhVNo3Sbac8YvmeQ8YMOj7F4X/exec";

const httpGetAsync = () =>
    {const theUrl = link;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                alert(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }

document.getElementById("myForm").setAttribute("action", link);

function alertTermino() {
    alert("termino");
}