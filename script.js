function displayFile() {
	var file = document.getElementById("fileInput").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var fileText = fileLoadedEvent.target.result;
		document.getElementById("fileContentText").innerHTML = fileText;
		document.getElementById("fileContent").style.border = "solid";
	};

	fileReader.readAsText(file, "UTF-8");
}