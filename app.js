const catalog = [
  {
    brand: "Lab Series",
    title: "Daily Rescue Hydrating Gel Cleanser",
    handle: "daily-rescue-gel-cleanser",
    type: "Cleanser",
    price: 36,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_448W01_4000x4000_0S.png?v=1778862905",
    url: "https://www.labseries.com/products/daily-rescue-gel-cleanser",
    tags: ["hydration", "dryness", "sensitive", "normal", "combination", "simple-routine"],
    reason: "A low-friction cleanser option to start the routine without pushing the budget."
  },
  {
    brand: "Lab Series",
    title: "Clear LS Deep Pore Purifying Gel Face Wash",
    handle: "clear-ls-deep-pore-purifying-face-wash",
    type: "Cleanser",
    price: 30,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_47GN01_4000x4000_0S.png?v=1781118309",
    url: "https://www.labseries.com/products/clear-ls-deep-pore-purifying-face-wash",
    tags: ["oily", "shine", "pores", "oil-control", "combination"],
    reason: "A sharper fit when shine, pores, and oil control are the main needs."
  },
  {
    brand: "Lab Series",
    title: "Clear LS Oil Control Mattifying Toner",
    handle: "clear-ls-oil-control-mattifying-toner",
    type: "Toner",
    price: 35,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_47GT01_4000x4000_0.png?v=1778862986",
    url: "https://www.labseries.com/products/clear-ls-oil-control-mattifying-toner",
    tags: ["oily", "shine", "pores", "oil-control"],
    reason: "Adds a targeted oil-control step while keeping the routine compact."
  },
  {
    brand: "Lab Series",
    title: "Daily Rescue Water Lotion Toner",
    handle: "daily-rescue-water-lotion-toner",
    type: "Toner",
    price: 50,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_4K8301_4000x4000_0S.png?v=1781739610",
    url: "https://www.labseries.com/products/daily-rescue-water-lotion-toner",
    tags: ["hydration", "dryness", "sensitive", "normal", "combination"],
    reason: "A hydration support step for consumers who want more comfort before moisturizer."
  },
  {
    brand: "Lab Series",
    title: "Daily Rescue Repair Face Serum",
    handle: "daily-rescue-repair-serum",
    type: "Serum",
    price: 74,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_43KH01_4000x4000_0S.png?v=1779954678",
    url: "https://www.labseries.com/products/daily-rescue-repair-serum",
    tags: ["hydration", "dryness", "fine-lines", "sensitive", "anti-age"],
    reason: "Gives the regimen a treatment step without jumping into luxury-price territory."
  },
  {
    brand: "Lab Series",
    title: "Anti-Age Max LS Face Serum",
    handle: "anti-age-max-ls-serum",
    type: "Serum",
    price: 96,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_462J01_4000x4000_0S.png?v=1781298390",
    url: "https://www.labseries.com/products/anti-age-max-ls-serum",
    tags: ["anti-age", "fine-lines", "dryness", "premium"],
    reason: "A stronger treatment choice when visible aging is prioritized."
  },
  {
    brand: "Lab Series",
    title: "All-In-One Face Treatment Moisturizer",
    handle: "all-in-one-face-treatment",
    type: "Moisturizer",
    price: 40,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_444A01_4000x4000_0S.png?v=1781298306",
    url: "https://www.labseries.com/products/all-in-one-face-treatment",
    tags: ["normal", "combination", "simple-routine", "hydration"],
    reason: "A practical moisturizer that works well for a lean daily routine."
  },
  {
    brand: "Lab Series",
    title: "Clear LS Mattifying Lightweight Face Moisturizer",
    handle: "clear-ls-lightweight-face-moisturizer",
    type: "Moisturizer",
    price: 50,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_47GR01_4000x4000_0S_c50e52c1-95ce-46ea-9538-1eaaa02995b5.png?v=1778862009",
    url: "https://www.labseries.com/products/clear-ls-lightweight-face-moisturizer",
    tags: ["oily", "shine", "oil-control", "combination"],
    reason: "Hydrates with a lighter finish for users worried about shine."
  },
  {
    brand: "Lab Series",
    title: "Daily Rescue Energizing Gel Cream Moisturizer",
    handle: "daily-rescue-energizing-gel-cream-moisturizer",
    type: "Moisturizer",
    price: 55,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_40PQ01_4000x4000_0S.png?v=1781040682",
    url: "https://www.labseries.com/products/daily-rescue-energizing-gel-cream-moisturizer",
    tags: ["hydration", "dryness", "combination", "normal"],
    reason: "A gel-cream texture suits hydration goals without feeling too heavy."
  },
  {
    brand: "Lab Series",
    title: "All-In-One Defense Lotion Moisturizer SPF 35",
    handle: "all-in-one-defense-lotion-spf35",
    type: "SPF",
    price: 65,
    image: "https://cdn.shopify.com/s/files/1/0821/0323/8690/files/ls_sku_449K01_4000x4000_0S.png?v=1779515407",
    url: "https://www.labseries.com/products/all-in-one-defense-lotion-spf35",
    tags: ["spf", "simple-routine", "normal", "combination"],
    reason: "A day-step option that folds moisturizer and SPF into one slot."
  },
  {
    brand: "Tom Ford Beauty",
    title: "Shade and Illuminate Soft Radiance Primer Broad Spectrum SPF 25",
    handle: "shade-and-illuminate-soft-radiance-primer-broad-spectrum-spf-25",
    type: "Primer",
    price: 80,
    image: "https://cdn.shopify.com/s/files/1/0761/9690/5173/files/tfb_sku_TA6101_2000x2000_0.png?v=1782027235",
    url: "https://www.tomfordbeauty.com/products/shade-and-illuminate-soft-radiance-primer-broad-spectrum-spf-25",
    tags: ["makeup", "polished-look", "spf", "dryness", "premium"],
    reason: "Bridges skin prep and makeup finish with SPF for a more polished result."
  },
  {
    brand: "Tom Ford Beauty",
    title: "Architecture Soft Matte Blurring Foundation",
    handle: "architecture-soft-matte-blurring-foundation",
    type: "Foundation",
    price: 95,
    image: "https://cdn.shopify.com/s/files/1/0761/9690/5173/files/tf_sku_TE1619_NA_3000x3000_0.png?v=1782039026",
    url: "https://www.tomfordbeauty.com/products/architecture-soft-matte-blurring-foundation",
    tags: ["makeup", "polished-look", "shine", "oily", "pores", "premium"],
    reason: "A complexion option when the user wants a refined finish and shine control."
  },
  {
    brand: "Tom Ford Beauty",
    title: "Shade and Illuminate Concealer",
    handle: "shade-and-illuminate-concealer",
    type: "Concealer",
    price: 60,
    image: "https://cdn.shopify.com/s/files/1/0761/9690/5173/files/tf_sku_T92612_2000x2000_0_778d3ec8-28c2-4e34-84b3-0fab4ab59a41.png?v=1782057094",
    url: "https://www.tomfordbeauty.com/products/shade-and-illuminate-concealer",
    tags: ["makeup", "polished-look", "simple-routine"],
    reason: "A compact complexion add-on for users who want a makeup result without a full face."
  },
  {
    brand: "Tom Ford Beauty",
    title: "Soleil Tinted Lip Glow",
    handle: "soleil-tinted-lip-glow",
    type: "Lip",
    price: 40,
    image: "https://cdn.shopify.com/s/files/1/0761/9690/5173/files/tf_sku_T3BH01_3000x3000_0.png?v=1782057088",
    url: "https://www.tomfordbeauty.com/products/soleil-tinted-lip-glow",
    tags: ["makeup", "polished-look", "dryness", "simple-routine"],
    reason: "An approachable luxury finishing item that does not overwhelm the budget."
  },
  {
    brand: "Tom Ford Beauty",
    title: "Runway Lip Color Clutch Size",
    handle: "runway-lip-color",
    type: "Lip",
    price: 35,
    image: "https://cdn.shopify.com/s/files/1/0761/9690/5173/files/tf_sku_T4D030_3000x3000_0.png?v=1781794899",
    url: "https://www.tomfordbeauty.com/products/runway-lip-color",
    tags: ["makeup", "polished-look", "simple-routine"],
    reason: "A lower-ticket Tom Ford item that makes the cross-brand basket feel premium."
  },
  {
    brand: "Tom Ford Beauty",
    title: "Soleil Sunkissed Blush",
    handle: "soleil-sunkissed-blush",
    type: "Blush",
    price: 40,
    image: "https://cdn.shopify.com/s/files/1/0761/9690/5173/files/tf_sku_T3TD01_3000x3000_0.png?v=1782027201",
    url: "https://www.tomfordbeauty.com/products/soleil-sunkissed-blush",
    tags: ["makeup", "polished-look", "simple-routine"],
    reason: "Adds a visible makeup payoff while staying realistic for a mixed-brand basket."
  },
  {
    brand: "Tom Ford Beauty",
    title: "TOM FORD RESEARCH Cleansing Concentrate",
    handle: "tom-ford-research-cleansing-concentrate",
    type: "Cleanser",
    price: 100,
    image: "https://cdn.shopify.com/s/files/1/0761/9690/5173/files/tf_sku_T93Y01_2000x2000_0.png?v=1782027271",
    url: "https://www.tomfordbeauty.com/products/tom-ford-research-cleansing-concentrate",
    tags: ["premium", "hydration", "dryness", "anti-age"],
    reason: "A premium skin-care swap when the user asks for a luxury-leaning routine."
  },
  {
    brand: "Tom Ford Beauty",
    title: "TOM FORD RESEARCH Serum Concentrate",
    handle: "tom-ford-research-serum-concentrate",
    type: "Serum",
    price: 380,
    image: "https://cdn.shopify.com/s/files/1/0761/9690/5173/files/tf_sku_T5AH01_2000x2000_0.png?v=1782027204",
    url: "https://www.tomfordbeauty.com/products/tom-ford-research-serum-concentrate",
    tags: ["premium", "anti-age", "fine-lines", "dryness"],
    reason: "A prestige treatment candidate for high-budget, premium-skincare scenarios."
  }
];

const defaultForm = {
  skinType: "combination",
  goal: "hydration",
  budget: 180,
  concerns: ["shine", "dryness"],
  brands: ["Lab Series", "Tom Ford Beauty"],
  note: "I want an easy routine that improves hydration but does not feel greasy. I am open to one makeup item if it completes the look."
};

const form = document.querySelector("#conciergeForm");
const skinType = document.querySelector("#skinType");
const goal = document.querySelector("#goal");
const budget = document.querySelector("#budget");
const budgetValue = document.querySelector("#budgetValue");
const note = document.querySelector("#note");
const routine = document.querySelector("#routine");
const totalValue = document.querySelector("#totalValue");
const budgetStatus = document.querySelector("#budgetStatus");
const routineTitle = document.querySelector("#routineTitle");
const conciergeCopy = document.querySelector("#conciergeCopy");
const brandCount = document.querySelector("#brandCount");
const brandHelper = document.querySelector("#brandHelper");
const sourceBrands = document.querySelector("#sourceBrands");

const liveShopifyBrands = ["Lab Series", "Tom Ford Beauty"];

function getConcerns() {
  return [...document.querySelectorAll("input[name='concerns']:checked")].map((input) => input.value);
}

function getSelectedBrands() {
  return [...document.querySelectorAll("input[name='brands']:checked")].map((input) => input.value);
}

function updateBrandAvailability() {
  const selected = getSelectedBrands();
  const maxed = selected.length >= 3;
  brandCount.textContent = `${selected.length} / 3`;
  document.querySelectorAll("input[name='brands']").forEach((input) => {
    const label = input.closest("label");
    input.disabled = !input.checked && maxed;
    label.classList.toggle("is-disabled", input.disabled);
  });

  const connected = selected.filter((brand) => liveShopifyBrands.includes(brand));
  const future = selected.filter((brand) => !liveShopifyBrands.includes(brand));
  const connectedText = connected.length ? connected.join(" + ") : "Live Shopify sample brands";
  sourceBrands.textContent = future.length
    ? `${connectedText}; ${future.join(" + ")} queued`
    : connectedText;
  brandHelper.textContent = future.length
    ? `${future.join(", ")} selected as future portfolio preferences. Live product cards currently use connected Shopify sample brands.`
    : "Choose up to 3. Lab Series and Tom Ford Beauty are connected in this prototype.";
}

function getIntent() {
  const text = note.value.toLowerCase();
  const noteSignals = {
    "oil-control": ["greasy", "oil", "shine", "matte"],
    hydration: ["hydration", "dry", "comfort", "moisture"],
    "anti-age": ["aging", "fine", "lines", "firm"],
    makeup: ["makeup", "look", "finish", "foundation", "lip"]
  };
  const inferred = Object.entries(noteSignals)
    .filter(([, words]) => words.some((word) => text.includes(word)))
    .map(([key]) => key);

  return [...new Set([skinType.value, goal.value, ...getConcerns(), ...inferred])];
}

function scoreProduct(product, intent, preferPremium, selectedBrands) {
  const tagScore = product.tags.reduce((score, tag) => score + (intent.includes(tag) ? 3 : 0), 0);
  const typeBoost = ["Cleanser", "Moisturizer", "Serum", "SPF"].includes(product.type) ? 2 : 0;
  const makeupBoost = intent.includes("makeup") || intent.includes("polished-look") ? (["Primer", "Foundation", "Concealer", "Lip", "Blush"].includes(product.type) ? 4 : 0) : 0;
  const premiumScore = preferPremium && product.tags.includes("premium") ? 5 : 0;
  const accessibleScore = !preferPremium && product.price <= 80 ? 2 : 0;
  const selectedBrandBoost = selectedBrands.includes(product.brand) ? 8 : 0;
  return tagScore + typeBoost + makeupBoost + premiumScore + accessibleScore + selectedBrandBoost;
}

function pickRoutine() {
  const intent = getIntent();
  const maxBudget = Number(budget.value);
  const preferPremium = note.value.toLowerCase().includes("premium") || note.value.toLowerCase().includes("luxury");
  const wantsMakeup = intent.includes("makeup") || intent.includes("polished-look");
  const selectedBrands = getSelectedBrands();
  const connectedSelectedBrands = selectedBrands.filter((brand) => liveShopifyBrands.includes(brand));
  const productPool = connectedSelectedBrands.length
    ? catalog.filter((product) => connectedSelectedBrands.includes(product.brand))
    : catalog;
  const targets = wantsMakeup
    ? ["Cleanser", "Moisturizer", "Primer", "Lip"]
    : ["Cleanser", "Serum", "Moisturizer", intent.includes("spf") ? "SPF" : "Toner"];

  const selected = [];
  let remaining = maxBudget;

  targets.forEach((type) => {
    const choices = productPool
      .filter((product) => product.type === type && !selected.includes(product))
      .map((product) => ({ product, score: scoreProduct(product, intent, preferPremium, selectedBrands) }))
      .sort((a, b) => b.score - a.score || a.product.price - b.product.price);

    const affordable = choices.find((choice) => choice.product.price <= remaining);
    const choice = affordable || choices.find((item) => item.product.price <= maxBudget * 0.65) || choices[0];
    if (choice) {
      selected.push(choice.product);
      remaining -= choice.product.price;
    }
  });

  if (!wantsMakeup && remaining >= 35) {
    const finishing = productPool
      .filter((product) => ["Lip", "Blush", "Concealer"].includes(product.type) && product.price <= remaining)
      .sort((a, b) => a.price - b.price)[0];
    if (finishing) selected.push(finishing);
  }

  const total = selected.reduce((sum, product) => sum + product.price, 0);
  if (total > maxBudget) {
    return selected
      .sort((a, b) => b.price - a.price)
      .slice(1)
      .sort((a, b) => targets.indexOf(a.type) - targets.indexOf(b.type));
  }
  return selected;
}

function render() {
  updateBrandAvailability();
  budgetValue.textContent = `$${budget.value}`;
  const products = pickRoutine();
  const total = products.reduce((sum, product) => sum + product.price, 0);
  const maxBudget = Number(budget.value);
  const concernText = getConcerns().join(", ") || "core routine";
  const selectedBrands = getSelectedBrands();
  const connected = selectedBrands.filter((brand) => liveShopifyBrands.includes(brand));
  const future = selectedBrands.filter((brand) => !liveShopifyBrands.includes(brand));
  routineTitle.textContent = `${goal.options[goal.selectedIndex].text} concierge edit`;
  totalValue.textContent = `$${total}`;
  budgetStatus.textContent = total <= maxBudget ? `$${maxBudget - total} under budget` : `$${total - maxBudget} over budget`;
  budgetStatus.style.color = total <= maxBudget ? "var(--accent-2)" : "var(--accent)";

  routine.innerHTML = products
    .map(
      (product, index) => `
        <article class="product-card">
          <div class="product-media">
            <img src="${product.image}" alt="${product.title}" loading="lazy" />
          </div>
          <div class="product-body">
            <div class="meta-row">
              <span>${index + 1}. ${product.type}</span>
              <span>${product.brand}</span>
            </div>
            <h3>${product.title}</h3>
            <p class="reason">${product.reason}</p>
            <div class="product-footer">
              <span class="price">$${product.price}</span>
              <a class="buy-link" href="${product.url}" target="_blank" rel="noreferrer">
                View PDP
                <i data-lucide="external-link"></i>
              </a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  const brandSentence = connected.length
    ? `This edit uses live Shopify sample products from ${connected.join(" and ")}.`
    : "This edit falls back to live Shopify sample products until selected brand catalogs are connected.";
  const futureSentence = future.length
    ? ` ${future.join(", ")} are treated as selected portfolio preferences for the future state once those Shopify catalog feeds are available.`
    : "";
  conciergeCopy.textContent = `Based on ${skinType.value} skin, ${concernText}, and a $${maxBudget} budget, ${brandSentence}${futureSentence} In production, the same flow can call each Shopify storefront catalog, filter by price/category/availability, generate the recommendation, and send purchase intent back to each brand PDP.`;
  lucide.createIcons();
}

function setDefaults() {
  skinType.value = defaultForm.skinType;
  goal.value = defaultForm.goal;
  budget.value = defaultForm.budget;
  note.value = defaultForm.note;
  document.querySelectorAll("input[name='concerns']").forEach((input) => {
    input.checked = defaultForm.concerns.includes(input.value);
  });
  document.querySelectorAll("input[name='brands']").forEach((input) => {
    input.checked = defaultForm.brands.includes(input.value);
    input.disabled = false;
  });
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render();
});

budget.addEventListener("input", render);
document.querySelector("#resetBtn").addEventListener("click", setDefaults);
document.querySelectorAll("input[name='brands']").forEach((input) => {
  input.addEventListener("change", render);
  input.addEventListener("input", render);
});
document.querySelector("#brandGrid").addEventListener("click", () => {
  requestAnimationFrame(render);
});

document.querySelectorAll("[data-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    const preset = button.dataset.preset;
    if (preset === "cheaper") {
      budget.value = Math.max(75, Number(budget.value) - 45);
      note.value = "Keep this routine efficient and favor lower-ticket products while still addressing my main concerns.";
    }
    if (preset === "premium") {
      budget.value = Math.min(350, Number(budget.value) + 120);
      note.value = "Make this feel more premium and include luxury skin care or makeup where it makes sense.";
    }
    if (preset === "makeup") {
      goal.value = "polished-look";
      document.querySelector("input[value='makeup']").checked = true;
      note.value = "I want a polished makeup finish with simple skin prep and a premium final touch.";
    }
    render();
  });
});

setDefaults();
