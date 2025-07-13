const dropdown = document.querySelector("#fruits");
const button = document.querySelector("#showBtn");
const output = document.querySelector("#output");
const imageBox = document.querySelector("#imageBox");  //  select the imageBox div

button.addEventListener("click", () => {
    const selectedValue = dropdown.value;
    output.textContent = `Your value is ${selectedValue}`;

    
    if (selectedValue === "mango") {
        imageBox.innerHTML = `<img src="https://t4.ftcdn.net/jpg/00/99/07/25/360_F_99072593_6rdXXrxVEz7pSItOhfCB6y4oKDANeQLa.jpg" width="200">`;
    } else if (selectedValue === "apple") {
        imageBox.innerHTML = `<img src="https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg" width="200">`;
    } else if (selectedValue === "banana") {
        imageBox.innerHTML = `<img src="https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg" width="200">`;
    } else {
        imageBox.innerHTML = "No image Found";
    }
});
