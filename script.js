document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copy-button").addEventListener("click", function() {
        const sourceText = document.getElementById("source-text").value
        if (!sourceText) {
            alert("Source text cannot be empty.");
            return;
        }
        
        if (!/^[a-z0-9]+$/i.test(sourceText)) {
            alert("Source text must be alphanumeric only.");
            return;
        }
        document.getElementById("destination-text").value = sourceText;
    });
});
 