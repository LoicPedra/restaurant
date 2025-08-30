function openRepice() {
  new Modal({el: document.getElementById('static-modal')}).show();
}

const dataCategories = [
  {
    key: "hot",
    label: "Plats chauds"
  },
  {
    key: "salads",
    label: "Salades"
  },
  {
    key: "no-meat",
    label: "Sans viande - Autres"
  }
];

renderTemplate('template-receipes-categ', dataCategories, 'recipe-categories')

const dataRecipes = [
  {
    category: "no-meat",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Sushi",
    ingredients: "Sushi thon, Sushi avocat, Sushi fromage"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Spaghetti carbonara à la française",
    ingredients: "Crème fraîche, lardon",
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Spaghetti carbonara",
    ingredients: "Oeuf, Pancetta",
    extra: [
      "Extra(s) : Parmesan"
    ],
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Spaghetti bolognaise",
    ingredients: "Boeuf",
    extra: [
      "Extra(s) : Parmesan"
    ],
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Rigatoni au pesto",
    ingredients: "Pesto",
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Rigatoni au boursin",
    ingredients: "Boursin",
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Croque monsieur",
    ingredients: "Jambon, Fromage",
    extra: [
      "Extra(s) : Oeuf (croque madame)"
    ],
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Fromage blanc et pommes de terre",
    ingredients: "Fromage blanc, pommes de terre",
    extra: [
      "Extra(s) : Lardons"
    ],
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Burger maison",
    ingredients: "Morceau de viande hachée spécial burger, à compléter avec les extras",
    extra: [
      "Extra(s) : Tomate, salade, fromage",
      "Sauce(s) : Barbecue, Burger, Ketchup, Mayonnaise"
    ],
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: "Saucisses au curry",
    ingredients: "Concentré de tomates, curry, saucisses de Francfort, pâtes coquillettes",
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: '"Pizette"',
    ingredients: "Mini pizza dorée au four à micro-ondes, à compléter avec les extras",
    extra: [
      "Extra(s) : Jambom, chèvre/miel, champignon, olive",
      "Base(s) : Tomate, crème fraîche"
    ],
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Bruschetta',
    ingredients: "A compléter avec les extras",
    extra: [
      "Extra(s) : Jambom, chèvre/miel, champignon, olive",
      "Base(s) : Tomate, crème fraîche"
    ],
    watermark: "watermark-dark"
  },
  {
    category: "salads",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Salade grand-mère',
    ingredients: "Lardons, Croutons, Oeuf, Pommes de terre",
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Nouilles chinoises sautées au poulet/boeuf',
    ingredients: "",
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Porc/poulet au caramel (avec riz)',
    ingredients: "",
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Risotto au chorizo',
    ingredients: "",
    watermark: "watermark-dark"
  },
  {
    category: "salads",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Salade parisienne',
    ingredients: "Cubes de jambon, Oeufs, Champignons",
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Tagiatelle au saumon',
    ingredients: "Cubes de jambon, Oeufs, Champignons",
    watermark: "watermark-dark"
  },
  {
    category: "no-meat",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Velouté des légumes de saison',
    ingredients: "",
    extra: [
      "Extra(s) : Kiri mixé avec le vélouté, croutons de pain"
    ],
    watermark: "watermark-dark"
  },
  {
    category: "hot",
    image: "https://placehold.co/400", // assets/img/menu/lobster-bisque.jpg
    name: 'Cordon bleu, sauce crème champignons',
    ingredients: "",
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