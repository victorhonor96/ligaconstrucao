const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const categoryLabels = {
  base: "Base e estrutura",
  hidraulica: "Hidráulica",
  eletrica: "Elétrica",
  acabamento: "Acabamento",
  ferramentas: "Ferramentas",
  impermeabilizacao: "Impermeabilização"
};

const storeData = {
  "leroy-merlin": {
    name: "Leroy Merlin",
    slug: "leroy-merlin",
    badge: "Maior variedade",
    description: "Rede nacional com amplo mix de materiais, acabamentos e ferramentas.",
    rating: 4.7,
    region: "curitiba",
    website: "https://www.leroymerlin.com.br",
    color: "#009C3B"
  },
  "cassol": {
    name: "Cassol Centerlar",
    slug: "cassol",
    badge: "Top preço",
    description: "Atacado de materiais com foco em base, cimento e aço para obras médias e grandes.",
    rating: 4.8,
    region: "curitiba",
    website: "https://www.cassol.com.br",
    color: "#E30613"
  },
  "nichele": {
    name: "Nichele Materiais",
    slug: "nichele",
    badge: "Tradição",
    description: "Loja tradicional de Curitiba com atendimento especializado em materiais de construção.",
    rating: 4.6,
    region: "curitiba",
    website: "https://www.nichele.com.br",
    color: "#0054A6"
  },
  "bigolin": {
    name: "Bigolin Materiais",
    slug: "bigolin",
    badge: "Entrega rápida",
    description: "Materiais de construção com entrega ágil na região metropolitana de Curitiba.",
    rating: 4.5,
    region: "curitiba",
    website: "https://www.bigolin.com.br",
    color: "#F4A300"
  },
  "taruma": {
    name: "Tarumã Materiais",
    slug: "taruma",
    badge: "Atacado",
    description: "Preços de atacado para materiais de base, estrutura e hidráulica.",
    rating: 4.5,
    region: "curitiba",
    website: "https://www.tarumamateriais.com.br",
    color: "#6B3A2A"
  },
  "zzat": {
    name: "Zzat Full Materiais",
    slug: "zzat",
    badge: "Variedade",
    description: "Mix completo de materiais para construção, reforma e acabamento.",
    rating: 4.4,
    region: "curitiba",
    website: "https://www.zzat.com.br",
    color: "#7B2D8E"
  },
  "olympic": {
    name: "Olympic Building Materials",
    slug: "olympic",
    badge: "Importados",
    description: "Materiais de construção importados e nacionais de alta qualidade.",
    rating: 4.3,
    region: "curitiba",
    website: "https://www.olympicbuilding.com",
    color: "#1B4F72"
  },
  "buachack": {
    name: "Buachack",
    slug: "buachack",
    badge: "Atendimento VIP",
    description: "Atendimento personalizado para obras residenciais e comerciais.",
    rating: 4.4,
    region: "curitiba",
    website: "https://www.buachack.com.br",
    color: "#2E86C1"
  },
  "dorigo": {
    name: "Dorigo Materiais",
    slug: "dorigo",
    badge: "Qualidade",
    description: "Materiais de construção selecionados com garantia de procedência.",
    rating: 4.5,
    region: "curitiba",
    website: "https://www.dorigo.com.br",
    color: "#D4AC0D"
  },
  "casa-santos": {
    name: "Casa Santos Materiais",
    slug: "casa-santos",
    badge: "Sítio Cercado",
    description: "Referência no bairro Sítio Cercado com preços competitivos e entrega local.",
    rating: 4.6,
    region: "curitiba",
    website: "https://www.casasantosmateriais.com.br",
    color: "#C0392B"
  }
};

const API_BASE = "/api";

async function fetchFromAPI(endpoint) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch {
    return null;
  }
}

const materials = [
  {
    id: 1,
    name: "Cimento CP II 50kg",
    category: "base",
    price: 34.9,
    unit: "saco",
    store: "cassol",
    region: "curitiba",
    stock: "pronta",
    rating: 4.8,
    offers: 10,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Cimento CP II 50kg",
    category: "base",
    price: 36.5,
    unit: "saco",
    store: "leroy-merlin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.7,
    offers: 10,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Cimento CP II 50kg",
    category: "base",
    price: 33.9,
    unit: "saco",
    store: "nichele",
    region: "curitiba",
    stock: "retirada",
    rating: 4.6,
    offers: 10,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Cimento CP II 50kg",
    category: "base",
    price: 35.2,
    unit: "saco",
    store: "bigolin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.5,
    offers: 10,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "Tijolo Baiano 9 furos",
    category: "base",
    price: 790.0,
    unit: "milheiro",
    store: "cassol",
    region: "curitiba",
    stock: "pronta",
    rating: 4.8,
    offers: 7,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Tijolo Baiano 9 furos",
    category: "base",
    price: 810.0,
    unit: "milheiro",
    store: "taruma",
    region: "curitiba",
    stock: "retirada",
    rating: 4.5,
    offers: 7,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Tijolo Baiano 9 furos",
    category: "base",
    price: 825.0,
    unit: "milheiro",
    store: "dorigo",
    region: "curitiba",
    stock: "pronta",
    rating: 4.5,
    offers: 7,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Vergalhão CA-50 10mm (12m)",
    category: "base",
    price: 56.9,
    unit: "barra",
    store: "cassol",
    region: "curitiba",
    stock: "pronta",
    rating: 4.8,
    offers: 8,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9,
    name: "Vergalhão CA-50 10mm (12m)",
    category: "base",
    price: 58.4,
    unit: "barra",
    store: "zzat",
    region: "curitiba",
    stock: "retirada",
    rating: 4.4,
    offers: 8,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    name: "Vergalhão CA-50 10mm (12m)",
    category: "base",
    price: 55.5,
    unit: "barra",
    store: "bigolin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.5,
    offers: 8,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 11,
    name: "Tubo PVC soldável 25mm (6m)",
    category: "hidraulica",
    price: 19.9,
    unit: "barra",
    store: "leroy-merlin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.7,
    offers: 12,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 12,
    name: "Tubo PVC soldável 25mm (6m)",
    category: "hidraulica",
    price: 18.5,
    unit: "barra",
    store: "nichele",
    region: "curitiba",
    stock: "retirada",
    rating: 4.6,
    offers: 12,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 13,
    name: "Tubo PVC soldável 25mm (6m)",
    category: "hidraulica",
    price: 20.4,
    unit: "barra",
    store: "casa-santos",
    region: "curitiba",
    stock: "pronta",
    rating: 4.6,
    offers: 12,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 14,
    name: "Cabo flexível 2,5mm (100m)",
    category: "eletrica",
    price: 149.9,
    unit: "rolo",
    store: "leroy-merlin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.7,
    offers: 6,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 15,
    name: "Cabo flexível 2,5mm (100m)",
    category: "eletrica",
    price: 145.0,
    unit: "rolo",
    store: "buachack",
    region: "curitiba",
    stock: "pronta",
    rating: 4.4,
    offers: 6,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 16,
    name: "Porcelanato acetinado 60x60",
    category: "acabamento",
    price: 69.9,
    unit: "m²",
    store: "leroy-merlin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.7,
    offers: 9,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 17,
    name: "Porcelanato acetinado 60x60",
    category: "acabamento",
    price: 64.5,
    unit: "m²",
    store: "olympic",
    region: "curitiba",
    stock: "pronta",
    rating: 4.3,
    offers: 9,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 18,
    name: "Porcelanato acetinado 60x60",
    category: "acabamento",
    price: 67.9,
    unit: "m²",
    store: "zzat",
    region: "curitiba",
    stock: "retirada",
    rating: 4.4,
    offers: 9,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 19,
    name: "Argamassa ACIII 20kg",
    category: "acabamento",
    price: 39.9,
    unit: "saco",
    store: "cassol",
    region: "curitiba",
    stock: "pronta",
    rating: 4.8,
    offers: 8,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 20,
    name: "Argamassa ACIII 20kg",
    category: "acabamento",
    price: 41.5,
    unit: "saco",
    store: "dorigo",
    region: "curitiba",
    stock: "retirada",
    rating: 4.5,
    offers: 8,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 21,
    name: "Argamassa ACIII 20kg",
    category: "acabamento",
    price: 38.9,
    unit: "saco",
    store: "casa-santos",
    region: "curitiba",
    stock: "pronta",
    rating: 4.6,
    offers: 8,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 22,
    name: "Caixa de disjuntores 12 módulos",
    category: "eletrica",
    price: 82.0,
    unit: "unidade",
    store: "nichele",
    region: "curitiba",
    stock: "pronta",
    rating: 4.6,
    offers: 5,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 23,
    name: "Caixa de disjuntores 12 módulos",
    category: "eletrica",
    price: 79.9,
    unit: "unidade",
    store: "taruma",
    region: "curitiba",
    stock: "retirada",
    rating: 4.5,
    offers: 5,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 24,
    name: "Areia média lavada",
    category: "base",
    price: 189.0,
    unit: "m³",
    store: "taruma",
    region: "curitiba",
    stock: "pronta",
    rating: 4.5,
    offers: 6,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 25,
    name: "Areia média lavada",
    category: "base",
    price: 175.0,
    unit: "m³",
    store: "bigolin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.5,
    offers: 6,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 26,
    name: "Brita 19mm (1m³)",
    category: "base",
    price: 165.0,
    unit: "m³",
    store: "cassol",
    region: "curitiba",
    stock: "pronta",
    rating: 4.8,
    offers: 5,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 27,
    name: "Brita 19mm (1m³)",
    category: "base",
    price: 159.0,
    unit: "m³",
    store: "casa-santos",
    region: "curitiba",
    stock: "retirada",
    rating: 4.6,
    offers: 5,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 28,
    name: "Manta asfáltica 4mm (rolo 10m)",
    category: "impermeabilizacao",
    price: 129.9,
    unit: "rolo",
    store: "leroy-merlin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.7,
    offers: 4,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 29,
    name: "Manta asfáltica 4mm (rolo 10m)",
    category: "impermeabilizacao",
    price: 125.0,
    unit: "rolo",
    store: "buachack",
    region: "curitiba",
    stock: "pronta",
    rating: 4.4,
    offers: 4,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 30,
    name: "Bloco estrutural 14x19x39",
    category: "base",
    price: 3.49,
    unit: "unidade",
    store: "dorigo",
    region: "curitiba",
    stock: "pronta",
    rating: 4.5,
    offers: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 31,
    name: "Bloco estrutural 14x19x39",
    category: "base",
    price: 3.29,
    unit: "unidade",
    store: "casa-santos",
    region: "curitiba",
    stock: "retirada",
    rating: 4.6,
    offers: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 32,
    name: "Tinta acrílica latex 18L",
    category: "acabamento",
    price: 189.9,
    unit: "lata",
    store: "leroy-merlin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.7,
    offers: 7,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 33,
    name: "Tinta acrílica latex 18L",
    category: "acabamento",
    price: 179.9,
    unit: "lata",
    store: "nichele",
    region: "curitiba",
    stock: "pronta",
    rating: 4.6,
    offers: 7,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 34,
    name: "Tinta acrílica latex 18L",
    category: "acabamento",
    price: 185.0,
    unit: "lata",
    store: "olympic",
    region: "curitiba",
    stock: "retirada",
    rating: 4.3,
    offers: 7,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 35,
    name: "Serra circular 7 1/4\"",
    category: "ferramentas",
    price: 289.9,
    unit: "unidade",
    store: "leroy-merlin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.7,
    offers: 3,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 36,
    name: "Serra circular 7 1/4\"",
    category: "ferramentas",
    price: 275.0,
    unit: "unidade",
    store: "zzat",
    region: "curitiba",
    stock: "pronta",
    rating: 4.4,
    offers: 3,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 37,
    name: "Conexão PVC 90° 25mm",
    category: "hidraulica",
    price: 3.49,
    unit: "unidade",
    store: "bigolin",
    region: "curitiba",
    stock: "pronta",
    rating: 4.5,
    offers: 10,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 38,
    name: "Conexão PVC 90° 25mm",
    category: "hidraulica",
    price: 3.29,
    unit: "unidade",
    store: "taruma",
    region: "curitiba",
    stock: "retirada",
    rating: 4.5,
    offers: 10,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 39,
    name: "Conexão PVC 90° 25mm",
    category: "hidraulica",
    price: 3.59,
    unit: "unidade",
    store: "casa-santos",
    region: "curitiba",
    stock: "pronta",
    rating: 4.6,
    offers: 10,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 40,
    name: "Telha cerâmica colonial",
    category: "acabamento",
    price: 1.89,
    unit: "unidade",
    store: "dorigo",
    region: "curitiba",
    stock: "pronta",
    rating: 4.5,
    offers: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 41,
    name: "Telha cerâmica colonial",
    category: "acabamento",
    price: 1.79,
    unit: "unidade",
    store: "bigolin",
    region: "curitiba",
    stock: "retirada",
    rating: 4.5,
    offers: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 42,
    name: "Lona preta 200 micras (6x50m)",
    category: "impermeabilizacao",
    price: 159.0,
    unit: "rolo",
    store: "cassol",
    region: "curitiba",
    stock: "pronta",
    rating: 4.8,
    offers: 3,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80"
  }
];

const state = {
  query: "",
  region: "curitiba",
  sort: "relevance",
  maxPrice: 2000,
  categories: new Set(),
  stores: new Set(),
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
const storeGrid = document.querySelector("#storeGrid");
const comparisonBody = document.querySelector("#comparisonBody");

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getStoreName(slug) {
  return storeData[slug] ? storeData[slug].name : slug;
}

function getUniqueMaterials() {
  const seen = new Map();
  for (const m of materials) {
    const key = m.name;
    if (!seen.has(key) || m.price < seen.get(key).price) {
      seen.set(key, m);
    }
  }
  return Array.from(seen.values());
}

function getFilteredMaterials() {
  const term = normalizeText(state.query);
  const selectedCategories = Array.from(state.categories);
  const selectedStores = Array.from(state.stores);

  const filtered = materials.filter((material) => {
    const nameMatch = normalizeText(material.name).includes(term);
    const storeMatch = normalizeText(getStoreName(material.store)).includes(term);
    const matchesSearch = !term || nameMatch || storeMatch;
    const matchesRegion = state.region === "todas" || material.region === state.region;
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(material.category);
    const matchesStore = selectedStores.length === 0 || selectedStores.includes(material.store);
    const matchesStock = state.stock === "todos" || material.stock === state.stock;
    const matchesPrice = material.price <= state.maxPrice;

    return matchesSearch && matchesRegion && matchesCategory && matchesStore && matchesStock && matchesPrice;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "lowest") return a.price - b.price;
    if (state.sort === "highest") return b.price - a.price;
    if (state.sort === "rating") return b.rating - a.rating;
    if (state.sort === "store") return a.store.localeCompare(b.store) || a.price - b.price;
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

  materialGrid.innerHTML = filtered.map((material) => {
    const store = storeData[material.store];
    const storeColor = store ? store.color : "#666";

    return `
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
          <span class="store-tag" style="--store-color: ${storeColor}">${getStoreName(material.store)}</span>
          <span>${material.offers} ofertas</span>
          <span>${material.rating.toFixed(1)} ★</span>
        </div>
        <div class="card-actions">
          <button class="primary-button" type="button" data-add="${material.id}">Adicionar à cotação</button>
          <button class="icon-button" type="button" data-details="${material.id}" aria-label="Ver detalhes de ${material.name}">⌕</button>
        </div>
      </div>
    </article>`;
  }).join("");
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
      <div class="quote-item__info">
        <strong>${item.name}</strong>
        <span class="quote-item__store">${getStoreName(item.store)}</span>
      </div>
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

function renderStores() {
  storeGrid.innerHTML = Object.values(storeData).map((store) => `
    <article class="store-card" data-store-card="${store.slug}">
      <span class="store-badge" style="background: ${store.color}22; color: ${store.color}">${store.badge}</span>
      <h3>${store.name}</h3>
      <p>${store.description}</p>
      <div class="store-meta">
        <strong>${store.rating.toFixed(1)} ★</strong>
        <span class="store-region">${store.region === "curitiba" ? "Curitiba e Região" : store.region}</span>
      </div>
      <a href="${store.website}" target="_blank" rel="noopener" class="store-link">Visitar loja →</a>
    </article>
  `).join("");
}

function renderComparisonTable() {
  const productMap = new Map();

  for (const m of materials) {
    if (!productMap.has(m.name)) {
      productMap.set(m.name, []);
    }
    productMap.get(m.name).push(m);
  }

  const rows = [];
  for (const [name, items] of productMap) {
    if (items.length < 2) continue;
    items.sort((a, b) => a.price - b.price);
    const lowest = items[0];
    const highest = items[items.length - 1];
    const savings = ((1 - lowest.price / highest.price) * 100).toFixed(0);

    rows.push({
      name,
      lowestPrice: lowest.price,
      highestPrice: highest.price,
      savings: Number(savings),
      cheapestStore: getStoreName(lowest.store)
    });
  }

  rows.sort((a, b) => b.savings - a.savings);

  comparisonBody.innerHTML = rows.map((row) => `
    <tr>
      <td>${row.name}</td>
      <td class="price-low">${money.format(row.lowestPrice)}</td>
      <td class="price-high">${money.format(row.highestPrice)}</td>
      <td class="savings">-${row.savings}%</td>
      <td>${row.cheapestStore}</td>
    </tr>
  `).join("");
}

function syncPriceOutput() {
  priceOutput.textContent = `Até ${money.format(Number(priceRange.value))}`;
}

async function refreshPrices() {
  const btn = document.querySelector("#refreshData");
  const updateEl = document.querySelector("[data-last-update]");

  btn.textContent = "⏳ Buscando...";
  btn.disabled = true;

  const apiData = await fetchFromAPI("/materials?region=curitiba");

  if (apiData && apiData.length) {
    materials.length = 0;
    materials.push(...apiData);
    renderMaterials();
    renderComparisonTable();
    updateEl.textContent = "Última atualização: agora";
  } else {
    updateEl.textContent = "Usando dados em cache (API indisponível)";
  }

  const now = new Date();
  const timeStr = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  updateEl.textContent = `Última atualização: ${timeStr}`;

  btn.textContent = "🔄 Buscar preços atualizados";
  btn.disabled = false;
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

document.querySelectorAll("input[name='store']").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      state.stores.add(checkbox.value);
    } else {
      state.stores.delete(checkbox.value);
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
  state.stores.clear();
  state.stock = "todos";
  state.maxPrice = 2000;
  state.query = "";
  state.region = "curitiba";
  searchInput.value = "";
  regionSelect.value = "curitiba";
  priceRange.value = 2000;
  document.querySelectorAll("input[name='category']").forEach((cb) => { cb.checked = false; });
  document.querySelectorAll("input[name='store']").forEach((cb) => { cb.checked = false; });
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
    const sameProduct = materials.filter((m) => m.name === material.name).sort((a, b) => a.price - b.price);
    const alternatives = sameProduct
      .map((m) => `  ${money.format(m.price)} — ${getStoreName(m.store)}`)
      .join("\n");
    alert(`${material.name}\n\nComparação de preços:\n${alternatives}\n\n${material.offers} ofertas disponíveis`);
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

document.querySelector("#refreshData").addEventListener("click", refreshPrices);

document.querySelector("#sendQuote").addEventListener("click", () => {
  if (!state.quote.length) {
    alert("Adicione materiais à cotação antes de enviar.");
    return;
  }
  const items = state.quote.map((item) => `- ${item.quantity}x ${item.name} (${getStoreName(item.store)}): ${money.format(item.price * item.quantity)}`).join("\n");
  const total = state.quote.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(`Cotação enviada!\n\n${items}\n\nTotal: ${money.format(total)}\n\nOs fornecedores receberão sua cotação e responderão em até 24h.`);
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const storeSlug = formData.get("store");

  materials.unshift({
    id: Date.now(),
    name: formData.get("name").trim(),
    category: formData.get("category"),
    price: Number(formData.get("price")),
    unit: "unidade",
    store: storeSlug,
    region: storeData[storeSlug] ? storeData[storeSlug].region : "curitiba",
    stock: "pronta",
    rating: storeData[storeSlug] ? storeData[storeSlug].rating : 4.0,
    offers: 1,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80"
  });

  registerForm.reset();
  registerModal.close();
  renderMaterials();
  renderComparisonTable();
});

syncPriceOutput();
renderMaterials();
renderQuote();
renderStores();
renderComparisonTable();
