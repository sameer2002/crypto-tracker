let data = [];

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
)
  .then((response) => response.json())
  .then((dataResponse) => {
    data = dataResponse;
    renderTable(data);
    renderGrid(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Fetch data by async/await
async function fetchData() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );

    const data = await response.json();
    renderTable(data);
    renderGrid(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function renderTable(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement('tr');
    const currpricechange=item.current_price;
    const currpricechangeclass=currpricechange>0? "positive-change-price" : "negative-change-price";
    const percentageChange = item.price_change_percentage_24h;
    const percentageChangeClass = percentageChange >= 0 ? 'positive-change' : 'negative-change';

    row.innerHTML = `
      <td id ="data1"><img src="${item.image}" alt="${
      item.name
    }" width="50px"></td>
      <td><h2>${item.symbol}</h2>
      <h3>${item.name}</h3></td>
     
      <td><div class="${percentageChangeClass}">${item.price_change_percentage_24h}%</div></td>
      <td class="${currpricechangeclass}" >${"$"+item.current_price}</td>
      <td>${item.total_volume}</td>
      <td>${"$" +item.market_cap}</td>
    `;

    row.classList.add('table-row-border');
    tableBody.appendChild(row);
  });
}
function renderGrid(data) {
  const grid = document.getElementById("card_lists");
  grid.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    const currpricechange=item.current_price;
    const currpricechangeclass=currpricechange>0? "positive-change-price" : "negative-change-price";
    const percentageChange = item.price_change_percentage_24h;
    const percentageChangeClass =
      percentageChange >= 0 ? "positive-change" : "negative-change";

    card.innerHTML = `
    <div class="title-out">
    <div class="title">
    <img src="${item.image}" alt="${
      item.name
    }" width="50px">
    <div class="bit-names">
       <div class="bit-id">
       ${item.symbol}
       </div>
      <div class="bit-name">
        ${item.name}
      </div>
    </div>
 </div>
 <div class="market-det">
  <div class="percantage  ${percentageChangeClass}">
  ${
    item.price_change_percentage_24h
  }%
  </div>
  <div class="current-prive  ${currpricechangeclass}">
     ${"$" + item.current_price}
  </div>
  <p class="total-amt">${"Total Volume : "+item.total_volume}</p>
  <p class="market-cap">${"Market Cap : $" + item.market_cap}</p>
 </div>
 </div>
    `;

    card.classList.add("card");
    card_lists.appendChild(card);
  });
}

