function openRepice() {
  new Modal({el: document.getElementById('static-modal')}).show();
}

const dataCategories = [
  {
    key: "starters",
    label: "Plats chauds"
  },
  {
    key: "specialty",
    label: "Plats froids"
  },
  {
    key: "salads",
    label: "Salades"
  }
];

renderTemplate('template-receipes-categ', dataCategories, 'recipe-categories')

const dataRecipes = [
  {
    category: "starters",
    image: "menu/lobster-bisque.jpg",
    name: "Lobster",
    ingredients: "Ingrédients"
  },
  {
    category: "starters",
    image: "menu/lobster-bisque.jpg",
    name: "Lobster",
    ingredients: "Ingrédients",
    watermark: "watermark-dark"
  },
];
renderTemplate('template-receipes', dataRecipes, 'menu-recipes')

const dataDates = [
  {
    date: "28 Octobre",
    description: "A partir de 18h"
  },
  {
    date: "30 Octobre",
    description: "A partir de 18h"
  },
  {
    date: "31 Octobre",
    description: "A partir de 18h"
  },
  {
    date: "1er Novembre",
    description: "A partir de 11h00"
  },
];
renderTemplate('template-dates', dataDates, 'dates')

watermakImages()

//openRepice()

function renderTemplate(idTemplate, data, idTarget) {
  const templateHtml = document.getElementById(idTemplate);
  const template = Handlebars.compile(templateHtml.innerHTML);
  document.getElementById(idTarget).innerHTML = template({data: data});
}