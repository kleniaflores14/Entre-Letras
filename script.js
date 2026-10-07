const books = [
  {
    id:1, title:"Orgullo y prejuicio", author:"Jane Austen", genre:"Literatura clásica", rating:4.8,
    cover:"https://www.elsotano.com/sotano_covers/9786071/9786071443557.jpg",
    description:"Una historia de ingenio, prejuicios y segundas oportunidades alrededor de Elizabeth Bennet y el señor Darcy.",
    review:"Inteligente, romántica y sorprendentemente divertida. Ideal si quieres un clásico que se sienta cercano."
  },
  {
    id:2, title:"El gran Gatsby", author:"F. Scott Fitzgerald", genre:"Literatura clásica", rating:4.5,
    cover:"https://images.cdn3.buscalibre.com/fit-in/360x360/33/c2/33c26accef7bc42dc170cdea96da543b.jpg",
    description:"Una mirada elegante y melancólica al sueño americano, el amor y las apariencias en los años veinte.",
    review:"Corto, visual y perfecto para leer con una playlist nocturna."
  },
  {
    id:3, title:"1984", author:"George Orwell", genre:"Ciencia ficción", rating:4.7,
    cover:"https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    description:"Una sociedad controlada por la vigilancia, la manipulación de la información y el poder.",
    review:"De esos libros que terminan y te hacen mirar el mundo digital de otra manera."
  },
  {
    id:4, title:"El retrato de Dorian Gray", author:"Oscar Wilde", genre:"Terror", rating:4.7,
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbbgfr1X-Jpo4sTU3hPAtzS0GxXUI2q_YeqUZtDf8fbbAj4F4o9mYwDA&s=10",
    description:"Belleza, deseo, decadencia y un retrato que guarda el secreto de una vida marcada por los excesos.",
    review:"Oscuro, estético y perfecto para octubre."
  },
  {
    id:5, title:"Frankenstein", author:"Mary Shelley", genre:"Terror", rating:5.0,
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-EN2C2InHltRc_QpNerxp4iS2DZrrZ5aztB8iJYhy_hgeVYPRamwHEpo&s=10",
    description:"Un científico desafía los límites de la vida y debe enfrentar las consecuencias de su creación.",
    review:"Mucho más que monstruos: identidad, soledad y responsabilidad."
  },
  {
    id:6, title:"El Hobbit", author:"J. R. R. Tolkien", genre:"Fantasía", rating:4.8,
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xROx0oXF_IPgd65ic1bhQqQALXaiq275WVp1dbYlxeK-GwsljhqcWOGQ&s=10",
    description:"Bilbo Bolsón sale de su cómoda rutina para vivir una aventura llena de criaturas, acertijos y tesoros.",
    review:"Aventura, humor y fantasía en una lectura que se disfruta a cualquier edad."
  },
  {
    id:7, title:"Coraline", author:"Neil Gaiman", genre:"Fantasía", rating:4.6,
    cover:"https://images.cdn3.buscalibre.com/fit-in/360x360/a1/76/a176b538ba159f7d071d21aa5f05b3b4.jpg",
    description:"Una puerta secreta conduce a una versión inquietantemente perfecta de la vida de Coraline.",
    review:"Breve, extraño y perfecto para una tarde lluviosa de octubre."
  },
  {
    id:8, title:"Asesinato en el Orient Express", author:"Agatha Christie", genre:"Misterio", rating:4.7,
    cover:"https://www.planetadelibros.com.mx/usuaris/libros/thumbs/83a21cfb-f8bc-495b-ae54-31b5fdff3d4d/d_1200_1200/portada_asesinato-en-el-orient-express_agatha-christie_201708251946.webp",
    description:"Un asesinato imposible en un tren detenido por la nieve obliga a Poirot a descubrir la verdad.",
    review:"Ideal para jugar a detective y sospechar de absolutamente todos."
  },
  {
    id:9, title:"La sombra del viento", author:"Carlos Ruiz Zafón", genre:"Misterio", rating:4.8,
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrys53_6UiHyDebGImYzY8UV86NDt7OfW-upE_jfA4kw&s=10",
    description:"Un libro misterioso lleva a Daniel Sempere por una Barcelona llena de secretos, memoria y literatura.",
    review:"Una carta de amor a los libros con una atmósfera inolvidable."
  },
  {
    id:10, title:"El principito", author:"Antoine de Saint-Exupéry", genre:"Aventura", rating:4.9,
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93Q2O3iyiBhTw3y_yRrQbhJBVhEpEdA2Tj-Ds1dzyQw&s=10",
    description:"Un pequeño viajero descubre diferentes mundos y encuentra preguntas que los adultos suelen olvidar.",
    review:"Sencillo en apariencia, pero lleno de ideas para volver a él."
  },
  {
    id:11, title:"La razón de estar contigo", author:"W. Bruce Cameron", genre:"Drama", rating:5.0,
    cover:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1497724288i/35452799.jpg",
    description:"Un perro descubre el propósito de su vida a través de varias vidas.",
    review:"Una historia emotiva sobre el amor, la lealtad y la amistad."
  },
  {
    id:12, title:"La máquina del tiempo", author:"H. G. Wells", genre:"Ciencia ficción", rating:4.3,
    cover:"https://m.media-amazon.com/images/I/91br5jwU27L._UF1000,1000_QL80_.jpg",
    description:"Un inventor viaja hacia un futuro remoto y encuentra una humanidad transformada.",
    review:"Una lectura ágil para entrar al género clásico de ciencia ficción."
  },
  {
    id:14, title:"Yo antes de ti", author:"Jojo Moyes", genre:"Romance", rating:5.0,
    cover:"https://images.cdn1.buscalibre.com/fit-in/360x360/57/96/57962df681d738e5efc166eda376dd70.jpg",
    description:"Louisa Clark comienza a trabajar como cuidadora de Will Traynor, un hombre que quedó paralizado tras un accidente.",
    review:"Una historia de amor y decisiones difíciles que demuestra cuánto puede cambiar una persona la vida de otra."
  }, 
  {
    id:15, title:"La hipótesis del amor", author:"Ali Hazelwood", genre:"Romance", rating:4.8,
    cover:"https://tse1.mm.bing.net/th/id/OIP.6skdRF8mugJtx1Z6M_T0HwHaLT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"Una estudiante de doctorado inicia una relación falsa con un profesor que parece ser su rival.",
    review:"Una comedia romántica divertida y tierna llena de química, situaciones incómodas y mucho romance."
  }, 
  {
    id:16, title:"Bajo la misma estrella", author:"Jhon Green", genre:"Drama", rating:4.3,
    cover:"https://fjp.es/_astro/bajo-la-misma-estrella-de-john-green.OUXLiXVv_18cY8j.webp",
    description:"Hazel y Gus, dos jóvenes con cáncer, se conocen y construyen una relación mientras enfrentan su enfermedad.",
    review:"Una historia conmovedora sobre el amor, la vida y la importancia de aprovechar cada momento."
  }, 
  {
    id:17, title:"IT: ESO", author:"Stephen King", genre:"Terror", rating:5.0,
    cover:"https://images.cdn1.buscalibre.com/fit-in/360x360/ff/ec/ffecaba38f22e8d748e8472358d3e124.jpg",
    description:"Un grupo de amigos se enfrenta a una entidad aterradora que aparece en forma de payaso y atormenta a su pueblo.",
    review:"Un grupo de amigos se enfrenta a una entidad aterradora que aparece en forma de payaso y atormenta a su pueblo."
  }, 
  {
    id:18, title:"El arte de ser nosotros", author:"Inma Rubiales", genre:"Romance", rating:4.9,
    cover:"https://images.cdn1.buscalibre.com/fit-in/360x360/bd/ad/bdad0c1e02a080aeeb7fd00f7e6b281f.jpg",
    description:"Logan y Leah se conocen mientras atraviesan diferentes problemas personales y descubren una conexión inesperada.",
    review:"Un romance juvenil sobre sanar, crecer y encontrar en otra persona un lugar seguro."
  }, 
  {
    id:19, title:"El exorcista", author:"William Peter Blatty", genre:"Terror", rating:4.8,
    cover:"https://4.bp.blogspot.com/-WJBzUgqNsLQ/UD8lKocemaI/AAAAAAAAAmw/WIgR3ZVQfEM/s1600/El+exorcista.jpg",
    description:"Una madre busca desesperadamente ayuda cuando su hija comienza a experimentar sucesos aterradores y aparentemente sobrenaturales.",
    review:"Una novela perturbadora que explora la fe, el miedo y la lucha contra una presencia maligna."
  }, 
  {
    id:20, title:"Harry Potter y la piedra filosofal", author:"J.K Rowling", genre:"Fantasía", rating:4.8,
    cover:"https://www.libreriaalberti.com/media/img/portadas/_visd_0000JPG02FQG.jpg",
    description:"Harry descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería.",
    review:"Harry descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería."
  }, 
  {
    id:21, title:"Harry Potter y la cámara secreta", author:"J.K Rowling", genre:"Fantasía", rating:4.7,
    cover:"https://http2.mlstatic.com/D_NQ_NP_940955-MCO47566834291_092021-O.webp",
    description:"Harry regresa a Hogwarts y descubre que una misteriosa criatura está atacando a los estudiantes.",
    review:"Una aventura más oscura que fortalece la amistad de Harry, Ron y Hermione mientras enfrentan un nuevo misterio."
  }, 
  {
    id:22, title:"Harry Potter y el prisionero de Azkaban", author:"J.K Rowling", genre:"Fantasía", rating:5.0,
    cover:"https://tse2.mm.bing.net/th/id/OIP.1ez39qB5dBbrBA3xy915OgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"Harry descubre nuevos secretos sobre su pasado mientras un peligroso prisionero escapa de Azkaban.",
    review:"Una historia de misterio y descubrimientos que profundiza en el pasado de Harry y sus seres queridos."
  }, 
  {
    id:23, title:"Harry Potter y el cáliz de fuego", author:"J.K Rowling", genre:"Fantasía", rating:4.9,
    cover:"https://tse2.mm.bing.net/th/id/OIP.7eCK7TRq0XOLYG_sGvbPOwHaMC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"Harry es elegido inesperadamente para participar en el peligroso Torneo de los Tres Magos.",
    review:"Una aventura emocionante que marca el comienzo de una etapa mucho más peligrosa para Harry."
  }, 
  {
    id:24, title:"Harry Potter y la Orden del Fénix", author:"J.K Rowling", genre:"Fantasía", rating:4.6,
    cover:"https://tse3.mm.bing.net/th/id/OIP.pw_OAuc_FRhfWA3qIDe__gHaLQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"Harry enfrenta la incredulidad del mundo mágico mientras Voldemort comienza a recuperar su poder.",
    review:"Una historia de resistencia y amistad en la que Harry debe enfrentarse tanto a enemigos externos como a sus propias emociones."
  }, 
  {
    id:25, title:"Harry Potter y el misterio del principe", author:"J.K Rowling", genre:"Fantasía", rating:4.9,
    cover:"https://tse4.mm.bing.net/th/id/OIP.28r3k-iEjxxBRg4IeYdTnwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"Harry descubre información crucial sobre el pasado de Voldemort mientras la amenaza sobre Hogwarts aumenta.",
    review:"Un libro más oscuro y revelador que prepara el camino para el enfrentamiento definitivo."
  }, 
  {
    id:26, title:"Harry Potter y las Reliquias de la Muerte", author:"J.K Rowling", genre:"Fantasía", rating:5.0,
    cover:"https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/h/a/harry-potter-y-las-reliquia-de-la-muerte-47549-default-1.jpg",
    description:"Harry, Ron y Hermione abandonan Hogwarts para buscar los objetos que pueden ayudar a derrotar a Voldemort.",
    review:"Un cierre épico y emotivo que reúne amistad, sacrificio, valentía y la batalla final entre el bien y el mal."
  }, 
  {
    id:27, title:"La asistenta", author:"Freida McFadden", genre:"Misterio", rating:4.3,
    cover:"https://tse4.mm.bing.net/th/id/OIP.J7QmgUevxIyMuzOVADEIwAHaLb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"Una joven consigue trabajo como empleada doméstica de una familia aparentemente perfecta, pero pronto descubre que algo no está bien.",
    review:"Una lectura ágil para entrar al género clásico de ciencia ficción."
  }, 
  {
    id:28, title:"Mujercitas", author:"Louisa May Alcott", genre:"Drama", rating:4.8,
    cover:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1580565887i/50811155.jpg",
    description:"Las hermanas March crecen juntas enfrentando dificultades, sueños, amores y cambios durante su juventud.",
    review:"Una historia entrañable sobre la familia, la independencia, los sueños y el paso a la adultez."
  }, 
  {
    id:29, title:"Cementerio de animales", author:"Stephen King", genre:"Terror", rating:4.7,
    cover:"https://tse3.mm.bing.net/th/id/OIP.4JW3kH3clatCREQE-MiZ-AHaLb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"LUna familia descubre un lugar misterioso capaz de devolver la vida a los muertos, con consecuencias aterradoras.",
    review:"Un relato oscuro sobre el duelo y hasta dónde puede llegar una persona cuando se niega a aceptar una pérdida."
  }, 
  {
    id:30, title:"No la dejes entrar", author:"Lisa Jewell", genre:"MIsterio", rating:4.5,
    cover:"https://d22fxaf9t8d39k.cloudfront.net/8f5424c26c3a25f18c3c45a0e6c2a5bfa4ad7644eac975ab8000a8fa6afc416c198640.jpg",
    description:"Una mujer desaparecida reaparece inesperadamente en la vida de su familia, provocando dudas y secretos inquietantes.",
    review:"Un thriller psicológico lleno de misterio que mantiene la intriga hasta descubrir qué se esconde detrás de las apariencias."
  },
];

const genres = [
  ["♡","Romance","Historias para suspirar","Romance"],
  ["✦","Fantasía","Mundos que no existen... todavía","Fantasía"],
  ["◉","Ciencia ficción","Imagina lo imposible","Ciencia ficción"],
  ["⌕","Misterio","Pistas, secretos y sospechosos","Misterio"],
  ["☾","Terror","Para leer con la luz prendida","Terror"],
  ["❧","Drama","Historias que dejan huella","Drama"],
  ["⚑","Aventura","Sal de la rutina","Aventura"],
  ["❦","Clásicos","Historias que nunca pasan de moda","Literatura clásica"]
];

const authors = [
  {
    name:"Agatha Christie", photo:"https://images.mubicdn.net/images/cast_member/22198/cache-1177-1695584314/image-w856.jpg?size=x200",
    bio:"La gran dama del misterio. Sus novelas con detectives como Poirot y Miss Marple convirtieron el crimen en un juego de ingenio.",
    genres:"Misterio · Suspenso", books:"Poirot · Diez negritos · El asesinato de Roger Ackroyd"
  },
  {
    name:"Jane Austen", photo:"https://i0.wp.com/miencuentroconlaliteratura.wordpress.com/wp-content/uploads/2016/08/pearl-s-buck1.jpg?w=212&h=317&ssl=1",
    bio:"Una de las voces más influyentes de la literatura inglesa. Sus novelas observan el amor, la sociedad y las expectativas de su época.",
    genres:"Romance · Clásico · Drama", books:"Orgullo y prejuicio · Emma · Persuasión"
  },
  {
    name:"Mary Shelley", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYpqXwDBPLG2rFN_Xp9pzqFLCqC-BHCHaF2ewwF-YKTlKvvz5QdpmPsj9&s=10",
    bio:"Escritora británica considerada una figura fundamental de la ciencia ficción gracias a su creación de Frankenstein.",
    genres:"Terror · Ciencia ficción · Gótico", books:"Frankenstein · El último hombre · Valperga"
  },
  {
    name:"Oscar Wilde", photo:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Oscar_Wilde_Sarony.jpg",
    bio:"Escritor irlandés reconocido por su ingenio, su crítica social y su estilo estético.",
    genres:"Drama · Clásico · Gótico", books:"El retrato de Dorian Gray · La importancia de llamarse Ernesto"
  },
  {
    name:"Neil Gaiman", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCtjd1xaLuyKygAik_xk_Za6F8er0UFKuX4LR0RfJZcYtK5JVQALA5xgi&s=10",
    bio:"Autor contemporáneo conocido por mezclar mitología, fantasía y elementos oscuros en historias para distintas edades.",
    genres:"Fantasía · Terror · Aventura", books:"Coraline · Stardust · American Gods"
  },
  {
    name:"George Orwell", photo:"https://upload.wikimedia.org/wikipedia/commons/7/7e/George_Orwell_press_photo.jpg",
    bio:"Escritor y ensayista británico cuyas obras exploran poder, propaganda, desigualdad y control social.",
    genres:"Ciencia ficción · Drama · Distopía", books:"1984 · Rebelión en la granja · Homenaje a Cataluña"
  }
];

const seasonal = [books[3], books[4], books[6], books[7], books[8], books[5]];

const gallery = [
  ["https://media.istockphoto.com/id/1480851057/es/foto/estanter%C3%ADa-de-la-biblioteca-llena-de-libros-sobre-diferentes-temas-antecedentes-del-tema-de-la.jpg?s=612x612&w=0&k=20&c=W8YF1CssATMGPoM1v6g0t5r6CiGkMy2U9gvlEiyEGO0=","Una biblioteca siempre tiene una historia esperando."],
  ["https://images.pexels.com/photos/34803019/pexels-photo-34803019/free-photo-of-pila-de-libros-en-el-mercado-al-aire-libre-de-madrid.jpeg?cs=tinysrgb&dpr=1&w=500","Páginas, café y un rato para ti."],
  ["https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/bltf0d9ada34021e5b7/6a6a8c8d5af6b720b88d6fe1/Card_Libros_hechos_peliculas_1446x1446.jpg?width=1446&height=1446&auto=avif&quality=75&format=pjpg","Un rincón para leer sin prisa."],
  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTndxRduWB8lxYsD56KwQUk6dXe5a4andp0tzuvY66iwHynyGEFtGhxlw&s=10","Historias que viven en los estantes."]
];

const featuredGrid = document.getElementById("featuredGrid");
const bookGrid = document.getElementById("bookGrid");
const seasonGrid = document.getElementById("seasonGrid");
const genreGrid = document.getElementById("genreGrid");
const authorGrid = document.getElementById("authorGrid");
const galleryGrid = document.getElementById("galleryGrid");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const catalogSearch = document.getElementById("catalogSearch");
const genreFilter = document.getElementById("genreFilter");
const globalSearch = document.getElementById("globalSearch");

function bookCard(book, detailed = false) {
  return `
    <article class="${detailed ? "book-item" : "featured-item"}">
      <div class="cover-wrap">
        <img class="cover" src="${book.cover}" alt="Portada de ${book.title}" loading="lazy">
        ${detailed ? `<span class="rating">★ ${book.rating}</span>` : ""}
      </div>
      <div class="book-meta">
        <span class="tag">${book.genre}</span>
        <h3>${book.title}</h3>
        <span class="author-line">${book.author}</span>
        <p class="${detailed ? "review" : "book-desc"}">${detailed ? book.review : book.description}</p>
        <button class="more-btn" data-book="${book.id}">Ver más información →</button>
      </div>
    </article>
  `;
}

function renderFeatured() {
  featuredGrid.innerHTML = books.slice(0,3).map(b => bookCard(b)).join("");
}
function renderBooks() {
  const query = catalogSearch.value.trim().toLowerCase();
  const genre = genreFilter.value;
  const filtered = books.filter(book => {
    const text = `${book.title} ${book.author}`.toLowerCase();
    return (!query || text.includes(query)) && (genre === "Todos" || book.genre === genre);
  });
  bookGrid.innerHTML = filtered.map(b => bookCard(b, true)).join("");
  resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "libro" : "libros"}`;
  emptyState.style.display = filtered.length ? "none" : "block";
}

function renderGenres() {
  genreGrid.innerHTML = genres.map(([icon,name,desc,value]) => `
    <button class="genre-card" data-genre="${value}">
      <span class="genre-icon">${icon}</span>
      <div><h3>${name}</h3><span>${desc}</span></div>
    </button>
  `).join("");
}

function renderSeason() {
  seasonGrid.innerHTML = seasonal.map(book => `
    <article class="season-card">
      <img class="cover" src="${book.cover}" alt="Portada de ${book.title}" loading="lazy">
      <div class="book-meta">
        <span class="tag">${book.genre} · octubre</span>
        <h3>${book.title}</h3>
        <span class="author-line">${book.author}</span>
        <p>${book.review}</p>
        <button class="more-btn" data-book="${book.id}">Descubrir →</button>
      </div>
    </article>
  `).join("");
}

function renderAuthors() {
  authorGrid.innerHTML = authors.map(author => `
    <article class="author-card">
      <img class="author-photo" src="${author.photo}" alt="Retrato de ${author.name}" loading="lazy">
      <div>
        <h3>${author.name}</h3>
        <p class="author-bio">${author.bio}</p>
        <div class="author-genres">${author.genres}</div>
        <div class="author-books"><strong>Conoce:</strong> ${author.books}</div>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  galleryGrid.innerHTML = gallery.map(([src, caption], i) => `
    <button class="gallery-item" data-gallery="${i}">
      <img src="${src}" alt="${caption}" loading="lazy">
      <span class="gallery-caption">${caption}</span>
    </button>
  `).join("");
}

function openBookModal(id) {
  const book = books.find(b => b.id === Number(id));
  if (!book) return;
  document.getElementById("modalContent").innerHTML = `
    <div class="modal-inner">
      <img src="${book.cover}" alt="Portada de ${book.title}">
      <div>
        <span class="eyebrow">${book.genre}</span>
        <h2>${book.title}</h2>
        <span class="author-line">${book.author}</span>
        <div class="modal-rating">★ ${book.rating} / 5</div>
        <p>${book.description}</p>
        <p><strong>Reseña Entre Letras:</strong> ${book.review}</p>
      </div>
    </div>
  `;
  const modal = document.getElementById("bookModal");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeBookModal() {
  const modal = document.getElementById("bookModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

let galleryIndex = 0;
function openGallery(index) {
  galleryIndex = Number(index);
  updateGallery();
  document.getElementById("galleryModal").classList.add("show");
}
function updateGallery() {
  const [src, caption] = gallery[galleryIndex];
  document.getElementById("galleryLarge").src = src;
  document.getElementById("galleryLarge").alt = caption;
  document.getElementById("galleryCaption").textContent = caption;
}
function closeGallery() { document.getElementById("galleryModal").classList.remove("show"); }

document.addEventListener("click", e => {
  const bookButton = e.target.closest("[data-book]");
  if (bookButton) openBookModal(bookButton.dataset.book);
  const genreButton = e.target.closest("[data-genre]");
  if (genreButton) {
    genreFilter.value = genreButton.dataset.genre;
    renderBooks();
    document.getElementById("recomendaciones").scrollIntoView({behavior:"smooth"});
  }
  const galleryButton = e.target.closest("[data-gallery]");
  if (galleryButton) openGallery(galleryButton.dataset.gallery);
  if (e.target.closest("[data-close-modal]")) closeBookModal();
  if (e.target.closest("[data-close-gallery]")) closeGallery();
});

catalogSearch.addEventListener("input", renderBooks);
genreFilter.addEventListener("change", renderBooks);

document.getElementById("clearSearch").addEventListener("click", () => {
  globalSearch.value = "";
  catalogSearch.value = "";
  genreFilter.value = "Todos";
  renderBooks();
});
document.getElementById("searchToggle").addEventListener("click", () => {
  document.getElementById("searchPanel").classList.toggle("open");
  if (document.getElementById("searchPanel").classList.contains("open")) globalSearch.focus();
});
globalSearch.addEventListener("input", () => {
  catalogSearch.value = globalSearch.value;
  genreFilter.value = "Todos";
  renderBooks();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("entreLetrasTheme", dark ? "dark" : "light");
  document.getElementById("themeToggle").textContent = dark ? "☀" : "☾";
});
if (localStorage.getItem("entreLetrasTheme") === "dark") {
  document.body.classList.add("dark");
  document.getElementById("themeToggle").textContent = "☀";
}

document.getElementById("mobileMenu").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
}));

document.getElementById("galleryPrev").addEventListener("click", () => {
  galleryIndex = (galleryIndex - 1 + gallery.length) % gallery.length; updateGallery();
});
document.getElementById("galleryNext").addEventListener("click", () => {
  galleryIndex = (galleryIndex + 1) % gallery.length; updateGallery();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeBookModal(); closeGallery(); }
  if (document.getElementById("galleryModal").classList.contains("show")) {
    if (e.key === "ArrowLeft") document.getElementById("galleryPrev").click();
    if (e.key === "ArrowRight") document.getElementById("galleryNext").click();
  }
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, {rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section => observer.observe(section));

renderFeatured();
renderBooks();
renderGenres();
renderSeason();
renderAuthors();
renderGallery();
