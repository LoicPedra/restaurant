Handlebars.registerHelper('stringify', function (aString) {
  return aString.toUpperCase()
})

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

watermakImages()

function renderTemplate(idTemplate, data, idTarget) {
  const templateHtml = document.getElementById(idTemplate);
  const template = Handlebars.compile(templateHtml.innerHTML);
  document.getElementById(idTarget).innerHTML = template({data: data});
}