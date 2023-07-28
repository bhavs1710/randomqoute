const data=document.getElementById("here");
const button=document.getElementById("btn");
const url=("https://api.quotable.io/random");

let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        data.innerText = item.content;
      });
  };

btn.addEventListener("click", getQuote);

