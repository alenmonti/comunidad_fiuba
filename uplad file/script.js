const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");

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

  // Remove any existing items from the list
  fileList.innerHTML = '';

  // Add the new file to the list
  let file = event.dataTransfer.files[0];
  addFileAndShowSubmit(file);
});
