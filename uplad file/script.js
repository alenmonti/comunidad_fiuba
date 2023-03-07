const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = document.querySelector("button"),
input = document.querySelector("input");

button.onclick = ()=>{
  input.click();
}

function addFileAndShowSubmit(file){
  let fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
  let listItem = document.createElement('li');
  listItem.innerHTML = file.name + ' (' + fileSizeMB + ' MB)';
  fileList.appendChild(listItem);

  const submit = document.getElementById("submit");
  submit.classList.add("visible");
  dropArea.style.display = 'none';
  form = document.querySelector(".formAndList");
  form.style.display = "flex";
}

input.addEventListener("change", function(){
  let fileInput = input;
  let fileList = document.getElementById('fileList');

  // Remove any existing items from the list
  fileList.innerHTML = '';

  // Add the new file to the list
  let file = fileInput.files[0];
  addFileAndShowSubmit(file)
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Suelta para subir";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastra y suelta para subir un archivo";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault();
  dragText.textContent = "Arrastra y suelta para subir un archivo";

  let fileList = document.getElementById('fileList');
  let archivoCargado = document.getElementById('archivoCargado');

  // Remove any existing items from the list
  fileList.innerHTML = '';

  // Add the new file to the list
  archivoCargado.files = event.dataTransfer.files;

  let file = event.dataTransfer.files[0];
  addFileAndShowSubmit(file);
});

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
document.getElementById("myForm").setAttribute("action", link);

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


