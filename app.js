
const pictures = document.getElementsByClassName("picture")
const mainImg = document.getElementById("mainImg")
const modal = document.querySelector(".modal-section")

const images = [
    {filename: "_DSC0223.jpg"},
    {filename: "_DSC0229.jpg"},
    {filename: "_DSC0314.jpg"},
    {filename: "_DSC9823.jpg"},
    {filename: "_DSC9830.jpg"},
    {filename: "_DSC9833.jpg"},
    {filename: "_DSC9890.jpg"},
    {filename: "_DSC9996.jpg"},
    {filename: "IMG_4429.jpg"},
    {filename: "IMG_4432.jpg"},
    {filename: "IMG_4433.jpg"},
    {filename: "IMG_4435.jpg"},
    {filename: "_DSC0250.jpg"},
    {filename: "_DSC0260.jpg"},
    {filename: "_DSC0267.jpg"},
    {filename: "_DSC0283.jpg"},
    {filename: "_DSC0286.jpg"},
]


/*
Här tar jag alla objekt från images och använder .map som gör om objekten till en array.
return måste jag skriva eftersom det inte är en oneline function. 
*/
const addImage = () => {
    document.querySelector(".pictures-section").innerHTML=images.map((img) => {
        return`<img class="picture" src="./img/${img.filename}">`
    }).join("")
}


/*
getEmelemtByClassName och querrySelectorAll skapar en array/nodelist.
för att manipulera t.ex. style på flera klasser skapar man en variabel
med denna array och sedan får man loopa igenom alla objekt i arrayen. 
*/


const openModal = () => {
        for(let i = 0; i < images.length; i++){
        pictures[i].addEventListener("click", function() {
    modal.style.display="flex"

    for(let j = 0; j < pictures.length; j++){
        if( i === j ){
            mainImg.setAttribute("src", `./img/${images[j].filename}`)

        }
    }

    }
    )
    } 
}

const closeModal = () => {
document.getElementById("cross").addEventListener("click", function() {
    modal.style.display = "none"
})
}

const setMainImage = () => {
    mainImg.setAttribute("src", () => {
        for (let i = 0; i < images.length; i++){
            for( let j = 0; j < pictures.length; j++){
                if( i ===  j){
                    mainImg.setAttribute("src", `./img/${images[j].filename}`)
                }
            }
        }
    })
}


const nextBtn = document.getElementById("arrow-right")
const prevBtn = document.getElementById("arrow-left")


const nextPic = () => {
nextBtn.addEventListener("click", () => {

    for(let i = 0; i < images.length; i++)
    if(mainImg.src === pictures[i].src && mainImg.src !== pictures[pictures.length - 1].src ) {
        mainImg.setAttribute("src", pictures[i += 1].src)
    } else if (mainImg.src === pictures[i].src && mainImg.src === pictures[pictures.length - 1].src ) {
        mainImg.setAttribute("src", pictures[0].src)
    }
})
}

const prevPic = () => {
    prevBtn.addEventListener("click", () => {
    for(let i = 0; i < pictures.length; i++){
    if (mainImg.src === pictures[i].src  && mainImg.src !== pictures[0].src ){
        mainImg.setAttribute("src", pictures[i -= 1].src)
        } else if (mainImg.src === pictures[i].src  && mainImg.src === pictures[0].src) {
            mainImg.setAttribute("src", pictures[i += pictures.length - 1].src)
        }
    }
    })
}



window.addEventListener("load", function(){
    addImage()
    openModal()
    closeModal()
    nextPic()
    prevPic()

})