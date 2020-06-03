export const updateTotalPrice = () => {
  fetch("/cart")
    .then(response => {
      return response.json();
    })
    .then(data => {
      totalPrice(data.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

export const totalPrice = data => {
  let totalSum = 0;
  for (let i = 0; i < data.length; i++) {
    let total = parseInt(data[i].price);
    totalSum += total;
  }
  document.querySelector(".total").innerHTML = "TOTAL: " + totalSum + " kr";
};
