// Get the imgBox, qrImage and qrText elements from the DOM
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Define a function to generate the QR code
function generateQR(){
    // Check if the qrText field has any value
if(qrText.value.length > 0){
    /* If the field has a value, generate the QR code using the value as data and set 
    the source of the qrImage element to the generated code */ 
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    // Add the class "show-img" to the imgBox element to show the QR code
    imgBox.classList.add("show-img");
}else{
    // If the field has no value, add the class "error" to the qrText element to highlight the error
    qrText.classList.add("error");
    // Remove the class "error" from the qrText element after a delay of 1000 milliseconds (1 second)
    setTimeout(()=>{
        qrText.classList.remove("error");
    }, 1000 );
}
}