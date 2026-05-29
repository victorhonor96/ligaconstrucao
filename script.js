const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const categoryLabels = {
  base: "Base e estrutura",
  hidraulica: "Hidráulica",
  eletrica: "Elétrica",
  acabamento: "Acabamento"
};

const materials = [
  {
    id: 1,
    name: "Cimento CP II 50kg",
    category: "base",
    price: 36.9,
    unit: "saco",
    store: "Constrular Atacado",
    region: "sudeste",
    stock: "pronta",
    rating: 4.9,
    offers: 18,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Tijolo Baiano 9 furos",
    category: "base",
    price: 849.0,
    unit: "milheiro",
    store: "Depósito União",
    region: "sudeste",
    stock: "retirada",
    rating: 4.6,
    offers: 9,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Vergalhão CA-50 10mm",
    category: "base",
    price: 58.7,
    unit: "barra",
    store: "Aço Forte Brasil",
    region: "sul",
    stock: "pronta",
    rating: 4.8,
    offers: 12,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Tubo PVC soldável 25mm",
    category: "hidraulica",
    price: 21.4,
    unit: "barra",
    store: "Rede HidroSul",
    region: "sul",
    stock: "retirada",
    rating: 4.8,
    offers: 21,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "Cabo flexível 2,5mm",
    category: "eletrica",
    price: 159.9,
    unit: "rolo 100m",
    store: "Elétrica Central",
    region: "nordeste",
    stock: "pronta",
    rating: 4.7,
    offers: 14,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Porcelanato acetinado 60x60",
    category: "acabamento",
    price: 74.9,
    unit: "m²",
    store: "Casa Pronta Pro",
    region: "sudeste",
    stock: "pronta",
    rating: 4.5,
    offers: 16,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Argamassa ACIII 20kg",
    category: "acabamento",
    price: 42.5,
    unit: "saco",
    store: "Casa Pronta Pro",
    region: "nordeste",
    stock: "retirada",
    rating: 4.4,
    offers: 11,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Caixa de disjuntores 12 módulos",
    category: "eletrica",
    price: 88.0,
    unit: "unidade",
    store: "Elétrica Central",
    region: "sul",
    stock: "pronta",
    rating: 4.6,
    offers: 7,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"
  }
];

const state = {
  query: "",
  region: "todas",
  sort: "relevance",
  maxPrice: 600,
  categories: new Set(),
  stock: "todos",
  quote: []
};

const materialGrid = document.querySelector("#materialGrid");
const quoteList = document.querySelector("#quoteList");
const quoteTotal = document.querySelector("#quoteTotal");
const cartCount = document.querySelector("[data-cart-count]");
const priceRange = document.querySelector("#priceRange");
const priceOutput = document.querySelector("#priceOutput");
const totalMaterials = document.querySelector("[data-total-materials]");
const searchInput = document.querySelector("#searchInput");
const regionSelect = document.querySelector("#regionSelect");
const sortSelect = document.querySelector("#sortSelect");
const registerModal = document.querySelector("#registerModal");
const registerForm = document.querySelector("#registerForm");

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getFilteredMaterials() {
  const term = normalizeText(state.query);
  const selectedCategories = Array.from(state.categories);

  const filtered = materials.filter((material) => {
    const matchesSearch = !term || normalizeText(material.name).includes(term) || normalizeText(material.store).includes(term);
    const matchesRegion = state.region === "todas" || material.region === state.region;
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(material.category);
    const matchesStock = state.stock === "todos" || material.stock === state.stock;
    const matchesPrice = material.price <= state.maxPrice || material.unit === "milheiro";

    return matchesSearch && matchesRegion && matchesCategory && matchesStock && matchesPrice;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "lowest") return a.price - b.price;
    if (state.sort === "highest") return b.price - a.price;
    if (state.sort === "rating") return b.rating - a.rating;
    return b.offers - a.offers;
  });
}

function renderMaterials() {
  const filtered = getFilteredMaterials();
  totalMaterials.textContent = materials.length;

  if (!filtered.length) {
    materialGrid.innerHTML = '<p class="empty-state">Nenhum material encontrado com esses filtros.</p>';
    return;
  }

  materialGrid.innerHTML = filtered.map((material) => `
    <article class="material-card">
      <img src="${material.image}" alt="${material.name}" loading="lazy">
      <div class="material-card__body">
        <div class="tag-row">
          <span class="tag">${categoryLabels[material.category]}</span>
          <span class="tag">${material.stock === "pronta" ? "Pronta entrega" : "Retirada hoje"}</span>
        </div>
        <h3>${material.name}</h3>
        <div>
          <span class="price">${money.format(material.price)}</span>
          <span class="unit">/ ${material.unit}</span>
        </div>
        <div class="offer-row">
          <span>${material.offers} ofertas</span>
          <span>${material.rating.toFixed(1)} ★</span>
          <span>${material.store}</span>
        </div>
        <div class="card-actions">
          <button class="primary-button" type="button" data-add="${material.id}">Adicionar à cotação</button>
          <button class="icon-button" type="button" data-details="${material.id}" aria-label="Ver detalhes de ${material.name}">⌕</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderQuote() {
  cartCount.textContent = state.quote.reduce((total, item) => total + item.quantity, 0);

  if (!state.quote.length) {
    quoteList.innerHTML = '<p class="empty-state">Nenhum material adicionado ainda.</p>';
    quoteTotal.textContent = money.format(0);
    return;
  }

  quoteList.innerHTML = state.quote.map((item) => `
    <div class="quote-item">
      <strong>${item.name}</strong>
      <span>${item.quantity} × ${money.format(item.price)}</span>
      <button type="button" data-remove="${item.id}" aria-label="Remover ${item.name}">×</button>
    </div>
  `).join("");

  const total = state.quote.reduce((sum, item) => sum + item.price * item.quantity, 0);
  quoteTotal.textContent = money.format(total);
}

function addToQuote(materialId) {
  const material = materials.find((item) => item.id === materialId);
  const quoteItem = state.quote.find((item) => item.id === materialId);

  if (quoteItem) {
    quoteItem.quantity += 1;
  } else {
    state.quote.push({ ...material, quantity: 1 });
  }

  renderQuote();
}

function removeFromQuote(materialId) {
  const quoteItem = state.quote.find((item) => item.id === materialId);
  if (!quoteItem) return;

  quoteItem.quantity -= 1;
  if (quoteItem.quantity <= 0) {
    state.quote = state.quote.filter((item) => item.id !== materialId);
  }

  renderQuote();
}

function syncPriceOutput() {
  priceOutput.textContent = `Até ${money.format(Number(priceRange.value))}`;
}

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value.trim();
  state.region = regionSelect.value;
  renderMaterials();
  document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth" });
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderMaterials();
});

priceRange.addEventListener("input", () => {
  state.maxPrice = Number(priceRange.value);
  syncPriceOutput();
  renderMaterials();
});

document.querySelectorAll("input[name='category']").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      state.categories.add(checkbox.value);
    } else {
      state.categories.delete(checkbox.value);
    }
    renderMaterials();
  });
});

document.querySelectorAll("input[name='stock']").forEach((radio) => {
  radio.addEventListener("change", () => {
    state.stock = radio.value;
    renderMaterials();
  });
});

document.querySelector("#clearFilters").addEventListener("click", () => {
  state.categories.clear();
  state.stock = "todos";
  state.maxPrice = 600;
  state.query = "";
  state.region = "todas";
  searchInput.value = "";
  regionSelect.value = "todas";
  priceRange.value = 600;
  document.querySelectorAll("input[name='category']").forEach((checkbox) => {
    checkbox.checked = false;
  });
  document.querySelector("input[name='stock'][value='todos']").checked = true;
  syncPriceOutput();
  renderMaterials();
});

materialGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const detailsButton = event.target.closest("[data-details]");

  if (addButton) {
    addToQuote(Number(addButton.dataset.add));
  }

  if (detailsButton) {
    const material = materials.find((item) => item.id === Number(detailsButton.dataset.details));
    alert(`${material.name}\n\nLoja com menor preço: ${material.store}\nOfertas encontradas: ${material.offers}\nAvaliação média: ${material.rating.toFixed(1)}`);
  }
});

quoteList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    removeFromQuote(Number(removeButton.dataset.remove));
  }
});

document.querySelector(".cart-toggle").addEventListener("click", () => {
  document.querySelector("#cotacao").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#openRegister").addEventListener("click", () => {
  registerModal.showModal();
});

document.querySelector("#closeRegister").addEventListener("click", () => {
  registerModal.close();
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);

  materials.unshift({
    id: Date.now(),
    name: formData.get("name").trim(),
    category: formData.get("category"),
    price: Number(formData.get("price")),
    unit: "unidade",
    store: formData.get("store").trim(),
    region: "sudeste",
    stock: "pronta",
    rating: 4.2,
    offers: 1,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80"
  });

  registerForm.reset();
  registerModal.close();
  renderMaterials();
});

syncPriceOutput();
renderMaterials();
renderQuote();
