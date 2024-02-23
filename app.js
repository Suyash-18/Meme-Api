let img = document.querySelector("img");
let title = document.querySelector(".title");
img.setAttribute("src","https://retchhh.files.wordpress.com/2015/03/loading1.gif")

const getMeme = async () => {
let res = await fetch("https://meme-api.com/gimme");
res.json().then(value => {
    console.log(value);
    img.setAttribute("src", value.url);
    title.innerText = value.title;
});
res.json().catch((e) => {
    console.log(e);
});
}
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    window.location.reload();
});
getMeme();

// const before = Date.now();
// .then(() => {
//     const after = Date.now();
//     let time = after - before;
//     setTimeout(() => {
//         console.log("yaaa");
//     }, time);
//     console.log(time);
// });