const catalog = [
  {
    brand: "Lab Series",
    title: "Daily Rescue Hydrating Gel Cleanser",
    handle: "daily-rescue-gel-cleanser",
    type: "Cleanser",
    price: 36,
    image: "./assets/products/ls-daily-rescue-cleanser.png",
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
    image: "./assets/products/ls-clear-face-wash.png",
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
    image: "./assets/products/ls-oil-control-toner.png",
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
    image: "./assets/products/ls-water-lotion-toner.png",
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
    image: "./assets/products/ls-repair-serum.png",
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
    image: "./assets/products/ls-anti-age-serum.png",
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
    image: "./assets/products/ls-all-in-one-moisturizer.png",
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
    image: "./assets/products/ls-mattifying-moisturizer.png",
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
    image: "./assets/products/ls-gel-cream-moisturizer.png",
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
    image: "./assets/products/ls-spf-moisturizer.png",
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
    image: "./assets/products/tfb-radiance-primer.png",
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
    image: "./assets/products/tfb-blurring-foundation.png",
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
    image: "./assets/products/tfb-concealer.png",
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
    image: "./assets/products/tfb-lip-glow.png",
    url: "https://www.tomfordbeauty.com/products/soleil-tinted-lip-glow",
    tags: ["makeup", "polished-look", "dryness", "simple-routine", "lip-glow"],
    reason: "An approachable luxury finishing item that does not overwhelm the budget."
  },
  {
    brand: "Tom Ford Beauty",
    title: "Runway Lip Color Clutch Size",
    handle: "runway-lip-color",
    type: "Lip",
    price: 35,
    image: "./assets/products/tfb-runway-lip-color.png",
    url: "https://www.tomfordbeauty.com/products/runway-lip-color",
    tags: ["makeup", "polished-look", "simple-routine", "lipstick"],
    reason: "A lower-ticket Tom Ford item that makes the cross-brand basket feel premium."
  },
  {
    brand: "Tom Ford Beauty",
    title: "Soleil Sunkissed Blush",
    handle: "soleil-sunkissed-blush",
    type: "Blush",
    price: 40,
    image: "./assets/products/tfb-soleil-blush.png",
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
    image: "./assets/products/tfb-cleansing-concentrate.png",
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
    image: "./assets/products/tfb-serum-concentrate.png",
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
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatLog = document.querySelector("#chatLog");
const chatSend = document.querySelector("#chatSend");

const chatMessages = [
  {
    role: "assistant",
    text: "Tell me what you would like to change, and I will adjust the regimen."
  }
];

const refinementState = {
  lipPreference: null
};

function getConcerns() {
  return [...document.querySelectorAll("input[name='concerns']:checked")].map((input) => input.value);
}

function getIntent() {
  const text = note.value.toLowerCase();
  const noteSignals = {
    "oil-control": ["greasy", "oil", "shine", "matte"],
    hydration: ["hydration", "dry", "comfort", "moisture"],
    "anti-age": ["aging", "fine", "lines", "firm"],
    makeup: ["makeup", "look", "finish", "foundation", "lip"],
    lipstick: ["lipstick", "lip color", "lip colour"]
  };
  const inferred = Object.entries(noteSignals)
    .filter(([, words]) => words.some((word) => text.includes(word)))
    .map(([key]) => key);

  return [...new Set([skinType.value, goal.value, ...getConcerns(), ...inferred])];
}

function scoreProduct(product, intent, preferPremium) {
  const tagScore = product.tags.reduce((score, tag) => score + (intent.includes(tag) ? 3 : 0), 0);
  const typeBoost = ["Cleanser", "Moisturizer", "Serum", "SPF"].includes(product.type) ? 2 : 0;
  const makeupBoost = intent.includes("makeup") || intent.includes("polished-look") ? (["Primer", "Foundation", "Concealer", "Lip", "Blush"].includes(product.type) ? 4 : 0) : 0;
  const premiumScore = preferPremium && product.tags.includes("premium") ? 5 : 0;
  const accessibleScore = !preferPremium && product.price <= 80 ? 2 : 0;
  const lipstickScore = refinementState.lipPreference === "lipstick" && product.tags.includes("lipstick") ? 10 : 0;
  const lipGlowPenalty = refinementState.lipPreference === "lipstick" && product.tags.includes("lip-glow") ? -6 : 0;
  return tagScore + typeBoost + makeupBoost + premiumScore + accessibleScore + lipstickScore + lipGlowPenalty;
}

function pickRoutine() {
  const intent = getIntent();
  const maxBudget = Number(budget.value);
  const preferPremium = note.value.toLowerCase().includes("premium") || note.value.toLowerCase().includes("luxury");
  const wantsMakeup = intent.includes("makeup") || intent.includes("polished-look");
  const targets = wantsMakeup
    ? ["Cleanser", "Moisturizer", "Primer", "Lip"]
    : ["Cleanser", "Serum", "Moisturizer", intent.includes("spf") ? "SPF" : "Toner"];

  const selected = [];
  let remaining = maxBudget;

  targets.forEach((type) => {
    const choices = catalog
      .filter((product) => product.type === type && !selected.includes(product))
      .map((product) => ({ product, score: scoreProduct(product, intent, preferPremium) }))
      .sort((a, b) => b.score - a.score || a.product.price - b.product.price);

    const affordable = choices.find((choice) => choice.product.price <= remaining);
    const choice = affordable || choices.find((item) => item.product.price <= maxBudget * 0.65) || choices[0];
    if (choice) {
      selected.push(choice.product);
      remaining -= choice.product.price;
    }
  });

  if (!wantsMakeup && remaining >= 35) {
    const finishing = catalog
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
  budgetValue.textContent = `$${budget.value}`;
  const products = pickRoutine();
  const total = products.reduce((sum, product) => sum + product.price, 0);
  const maxBudget = Number(budget.value);
  const concernText = getConcerns().join(", ") || "core routine";
  routineTitle.textContent = `${goal.options[goal.selectedIndex].text} concierge edit`;
  totalValue.textContent = `$${total}`;
  budgetStatus.textContent = total <= maxBudget ? `$${maxBudget - total} under budget` : `$${total - maxBudget} over budget`;
  budgetStatus.style.color = total <= maxBudget ? "var(--accent-2)" : "var(--accent)";

  routine.innerHTML = products
    .map(
      (product, index) => `
        <article class="product-card">
          <div class="product-media">
            <img src="${optimizedImageUrl(product.image)}" alt="${product.title}" loading="eager" decoding="async" />
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

  conciergeCopy.textContent = `Based on ${skinType.value} skin, ${concernText}, and a $${maxBudget} budget, this edit uses Lab Series for the core skin regimen and selectively adds Tom Ford Beauty where it improves the finish. In production, the same flow can call Shopify storefront catalog data, filter by price/category/availability, generate the recommendation, and send purchase intent back to each brand PDP.`;
  renderChat();
  lucide.createIcons();
}

function addChatMessage(role, text) {
  chatMessages.push({ role, text });
  renderChat();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function renderChat() {
  chatLog.innerHTML = chatMessages
    .map((message) => `<div class="chat-bubble ${message.role}">${escapeHtml(message.text)}</div>`)
    .join("");
}

function optimizedImageUrl(src) {
  if (!src.includes("cdn.shopify.com")) return src;
  return `${src}${src.includes("?") ? "&" : "?"}width=900`;
}

function setConcern(value, checked = true) {
  const input = document.querySelector(`input[name='concerns'][value='${value}']`);
  if (input) input.checked = checked;
}

function refineFromMessage(message) {
  const text = message.toLowerCase();
  const updates = [];

  if (text.includes("cheaper") || text.includes("less expensive") || text.includes("lower budget") || text.includes("budget")) {
    budget.value = Math.max(75, Number(budget.value) - 45);
    note.value = "Keep this routine efficient and favor lower-ticket products while still addressing my main concerns.";
    updates.push("lowered the budget");
  }

  if (text.includes("premium") || text.includes("luxury") || text.includes("best")) {
    budget.value = Math.min(350, Number(budget.value) + 120);
    note.value = "Make this feel more premium and include luxury skin care or makeup where it makes sense.";
    updates.push("shifted toward a more premium edit");
  }

  if (text.includes("makeup") || text.includes("foundation") || text.includes("concealer") || text.includes("lip") || text.includes("finish")) {
    goal.value = "polished-look";
    setConcern("makeup", true);
    updates.push("added a makeup finish");
  }

  if (text.includes("lipstick") || text.includes("lip color") || text.includes("lip colour")) {
    goal.value = "polished-look";
    setConcern("makeup", true);
    refinementState.lipPreference = "lipstick";
    note.value = "Include a polished makeup finish and use a lipstick or lip color instead of a lip glow.";
    updates.push("swapped the lip step to lipstick");
  }

  if (text.includes("oil") || text.includes("shiny") || text.includes("shine") || text.includes("matte")) {
    skinType.value = "oily";
    goal.value = "oil-control";
    setConcern("shine", true);
    setConcern("pores", true);
    updates.push("prioritized oil control");
  }

  if (text.includes("dry") || text.includes("hydrating") || text.includes("hydration") || text.includes("dehydrated")) {
    goal.value = "hydration";
    setConcern("dryness", true);
    updates.push("prioritized hydration");
  }

  if (text.includes("spf") || text.includes("sunscreen") || text.includes("sun")) {
    setConcern("spf", true);
    updates.push("added SPF as a concern");
  }

  if (text.includes("aging") || text.includes("anti-aging") || text.includes("fine line") || text.includes("wrinkle")) {
    goal.value = "anti-age";
    setConcern("fine-lines", true);
    updates.push("prioritized anti-aging");
  }

  if (text.includes("simple") || text.includes("fewer") || text.includes("basic") || text.includes("easy")) {
    goal.value = "simple-routine";
    note.value = "Keep this as a simple, low-friction routine with only the most important steps.";
    updates.push("simplified the routine");
  }

  render();
  return updates.length
    ? `Updated: ${updates.join(", ")}. I rebuilt the regimen with the current budget and product set.`
    : "I captured that note. Try asking for a lower budget, more premium products, oil control, hydration, SPF, anti-aging, or a makeup finish.";
}

function submitChatMessage() {
  const message = chatInput.value.trim();
  if (!message) return;
  addChatMessage("user", message);
  const response = refineFromMessage(message);
  addChatMessage("assistant", response);
  chatInput.value = "";
}

function setDefaults() {
  skinType.value = defaultForm.skinType;
  goal.value = defaultForm.goal;
  budget.value = defaultForm.budget;
  note.value = defaultForm.note;
  refinementState.lipPreference = null;
  document.querySelectorAll("input[name='concerns']").forEach((input) => {
    input.checked = defaultForm.concerns.includes(input.value);
  });
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render();
});

budget.addEventListener("input", render);
document.querySelector("#resetBtn").addEventListener("click", setDefaults);

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitChatMessage();
});

chatSend.addEventListener("click", (event) => {
  event.preventDefault();
  submitChatMessage();
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitChatMessage();
  }
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
