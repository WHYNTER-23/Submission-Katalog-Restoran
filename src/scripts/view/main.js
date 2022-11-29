/* eslint linebreak-style: ["error", "windows"] */
import restaurants from '../source/DATA.json';

const main = () => {
  const renderRestaurant = () => {
    restaurants.restaurants.forEach((restaurant) => {
      const restoItem = document.querySelector('.posts');
      restoItem.innerHTML += `<article class="post-item"><img class="post-item__thumbnail"src="${restaurant.pictureId}" alt="${restaurant.name}"><div class="post-item__content"><h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1><p class="rating">Rating : ${restaurant.rating}</p><p class="post-item__description">${restaurant.description}</p></div></article>`;
    });
  };
  renderRestaurant();
};
export default main;
