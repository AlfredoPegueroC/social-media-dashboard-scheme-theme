const card = document.querySelector("#card");
const overview = document.querySelector(".overview")

function createCard(data) {
  const {title, userName, stats} = data;
  console.log(data.title)
  const article = document.createElement("article");
  article.classList.add("card_items");

  article.innerHTML = `
  <section class="card ${title}">
    <article class="card_items flex">
        <div class="card_social flex">
          <img src="./images/icon-${title}.svg" alt="" />
          <span>${userName}</span>
        </div>
        <div class="card__follower">
          <h4 class="number_follower">${stats.followers}<span>Followers</span></h4>
        </div>
        <span class="${stats.EarnedStatus} flex"><img src="./images/icon-${stats.EarnedStatus}.svg" alt="" />${stats.followersEarnedToday} Today</span>
    </article>
  </section>
  `;
  card.appendChild(article);
}
function createOverview(data){
  const {title,social, quantity, status, earned} = data;
  const content = document.createElement("div");
  content.classList.add("card");

  content.innerHTML = `
  <div class="top flex">
    <h3>${title}</h3>
    <img src="./images/icon-${social}.svg" alt="">
  </div>
  <div class="bottom flex">
    <h3>${quantity}</h3>
    <span class="${status} flex"><img src="./images/icon-${status}.svg" alt="">${earned}%</span>
  </div>
  `

  overview.appendChild(content)
}

async function getDataFollower() {
  await fetch("/socialstats.json")
    .then((res) => res.json())
    .then((data) =>{
      data.forEach(element => {
        createCard(element)})
    })
    .catch((err) => console.error(err));
}
async function getDataOverview(){
  await fetch("./dataOverview.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      createOverview(element)
    })
  })
}


document.addEventListener("DOMContentLoaded", () => {
  getDataFollower()
  getDataOverview()
})

