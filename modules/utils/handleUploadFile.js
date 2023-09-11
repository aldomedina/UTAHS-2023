export default function handleUploadFile(callback) {
  var fileInput = document.createElement("input");
  fileInput.type = "file";

  // Add an event listener to handle file selection
  fileInput.addEventListener("change", function (e) {
    var file = e.target.files[0];

    if (file) {
      // Check if the file is a JSON file
      if (file.type === "application/json" || file.name.endsWith(".json")) {
        // Handle JSON file
        var reader = new FileReader();

        reader.onload = function (event) {
          var jsonContent = event.target.result;
          try {
            var jsonData = JSON.parse(jsonContent);
            // Do something with the parsed JSON data
            callback(jsonData);
            return jsonData;
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        };

        // Read the contents of the file as text
        reader.readAsText(file);
      } else {
        // The uploaded file is not a JSON file
        console.error("Please select a JSON file.");
        alert("Please upload a valid JSON file.");
      }
    }
  });

  // Trigger the file input dialog
  fileInput.click();
}
