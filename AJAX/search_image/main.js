import { GIPHY_API_KEY } from "./config.js";

const keywordTextbox = document.getElementById("keyword");
const searchBtn = document.getElementById("search-btn");
const removeBtn = document.getElementById("remove-btn");
const imgArea = document.getElementById("image-area");

function searchImage(e) {
    // Get search keyword
    let searchKeyword = keywordTextbox.value;
    console.log("keyword = ", searchKeyword);

    // Get api endpoint
    let apiEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&lang=en&q=${searchKeyword}`;
    console.log(apiEndpoint);

    // Get image and add image to DOM
    axios.get(apiEndpoint)
    .then((res) => {
        let imgIndex = Math.floor(Math.random() * res.data.data.length);
        let imgUrl = res.data.data[imgIndex].images.downsized_medium.url;
        console.log(imgUrl);
        addImageToDom(imgUrl);
    })
    .catch((err) => {
        console.log(err);
    });
}

function addImageToDom(imgUrl) {
    const img = document.createElement("img");
        img.src = imgUrl;
        imgArea.appendChild(img);
}

function removeImage(e) {
    while (imgArea.firstChild) {
        imgArea.removeChild(imgArea.firstChild);
    }
}

searchBtn.addEventListener("click", (event) => {
    searchImage(event);
});

removeBtn.addEventListener("click", (event) => {
    removeImage(event);
})
