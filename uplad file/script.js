function handleFileInputChange() {
    var fileInput = document.getElementById('fileInput');
    var fileList = document.getElementById('fileList');
  
    // Remove any existing items from the list
    fileList.innerHTML = '';
  
    // Add the new file to the list
    var file = fileInput.files[0];
    var listItem = document.createElement('li');
    listItem.innerHTML = file.name + ' (' + file.size + ' bytes)';
    fileList.appendChild(listItem);
  }
  
  function handleDrop(event) {
    event.preventDefault();
  
    var fileList = document.getElementById('fileList');
  
    // Remove any existing items from the list
    fileList.innerHTML = '';
  
    // Add the new file to the list
    var file = event.dataTransfer.files[0];
    var listItem = document.createElement('li');
    listItem.innerHTML = file.name + ' (' + file.size + ' bytes)';
    fileList.appendChild(listItem);
  }
  