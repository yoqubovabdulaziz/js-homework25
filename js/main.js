const API = "https://dummyjson.com/products";
const productsRow = document.querySelector(".products__row");
const searchInput = document.querySelector(".search__input");

async function fetchData(api) {
  const data = await fetch(api);
  data
    .json()
    .then((res) => getProduct(res.products))
    .catch((err) => console.log(err));
}

fetchData(API);

function getProduct(data) {
  data.forEach(
    ({
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      brand,
      category,
      images,
    }) => {
      let card = document.createElement("div");
      card.classList.add("products__card");
      card.innerHTML = `
        <div class="products__card__frame">
                <img
                  onclick="singleProduct(${id})"
                  class="products__card__image"
                  src=${images[0]}
                  alt="iphone"
                />
              </div>
              <div class="products__card__content">
                <p class="product__category">${category}</p>
                <h3 class="product__title">${title.substring(0, 25)}</h3>
                <p class="product__description">${description.substring(
                  0,
                  55
                )}...</p>
                <div class="product__rating">
                  <i class="fa-solid fa-star"></i>
                  <span>${rating}</span>
                </div>
                <div class="products__card__bottom">
                  <span class="product__price">
                    <h3>$${price}</h3>
                    <del>$${discountPercentage}</del>
                  </span>
                  <button onclick="singleProduct(${id})" class="product__card__btn">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add
                  </button>
                </div>
              </div>
    `;
      productsRow.appendChild(card);
    }
  );
}

function singleProduct(id) {
  window.open(`/pages/product.html?id=${id}`, "_self");
}
