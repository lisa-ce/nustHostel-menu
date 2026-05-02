const calendarIcon = `
<svg viewBox="0 0 24 24">
  <rect x="3" y="4" width="18" height="17" rx="2"></rect>
  <line x1="16" y1="2" x2="16" y2="6"></line>
  <line x1="8" y1="2" x2="8" y2="6"></line>
  <line x1="3" y1="10" x2="21" y2="10"></line>
</svg>
`;

const dayNames = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

const cycleOrder = ["Meriam", "Nicolleth", "Rosy"];

const cycleStartDate = new Date(2026, 3, 27); 
// 27 April 2026 = Meriam
// 04 May 2026 = Nicolleth
// 11 May 2026 = Rosy
// 18 May 2026 = Meriam again

const menuData = {
  Nicolleth: {
    1: {
      breakfast: ["Boiled egg 100g", "Weet-bix 35g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Jam 30g", "Milk 250ml", "Tea/Coffee 250ml"],
      lunch: ["Brisket 300g", "Rice 200g", "Vegetable 90g", "Salad", "Juice 250ml"],
      dinner: ["Russian 250g", "Hotdog", "Chips 90g", "Peanut Butter 30g", "Bread 120g", "Margarien 15g", "Fruit 1", "Tea/Coffee"]
    },
    2: {
      breakfast: ["Viennas 100g", "Taysteewheat 80g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Peanut butter 30g", "Milk 250ml", "Tea/Coffee 250ml"],
      lunch: ["Chicken Potjie", "Rice 90g", "Salad", "Vegetable 90g", "Juice 250ml"],
      dinner: ["Mince", "Lasagna", "Cheese", "Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee"]
    },
    3: {
      breakfast: ["Cheese 1", "Cornflakes 25g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Jam 30g", "Milk 250ml", "Tea/Coffee 250ml"],
      lunch: ["Mutten 250g", "Elbows 70g", "Vegetable 90g", "Salad", "Juice 250ml"],
      dinner: ["Hake Fish", "Potato Wedges", "Peanut Butter 30g", "Bread 120g", "Margarien 15g", "Fruit 1", "Tea/Coffee"]
    },
    4: {
      breakfast: ["Boerewors 100g", "Oats 75g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Peanut butter 30g", "Milk 250ml", "Tea/Coffee 250ml"],
      lunch: ["Pork Chops 350g", "Rice 90g", "Salad", "Vegetable 90g", "Juice 250ml"],
      dinner: ["Boerewors Stew", "Sphagetti", "Jam 30g", "Bread 120g", "Margarien 15g", "Fruit 1", "Tea/Coffee"]
    },
    5: {
      breakfast: ["Fish Fingers 30g", "Weet-bix 35g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Jam 30g", "Milk 250ml", "Tea/Coffee 250ml"],
      lunch: ["Beef strog", "Elbows 70g", "Vegetable 90g", "Salad", "Juice 250ml", "Pudding 150g"],
      dinner: ["Meat pies 200g", "Chips 90g", "Peanut Butter 30g", "Bread 120g", "Margarien 15g", "Fruit 1", "Tea/Coffee"]
    },
    6: {
      breakfast: ["Polony 100g", "Taysteewheat 80g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Peanut butter 30g", "Milk 250ml", "Tea/Coffee 250ml"],
      lunch: ["Chicken baked", "Garlic Potatoes 90g", "Salad", "Vegetable 90g", "Juice 250ml"],
      dinner: ["Mince patty 150g", "Pizza/Fatcake", "Burger / green salad", "Jam 30g", "Bread 120g", "Margarien 15g", "Fruit 1", "Tea/Coffee"]
    },
    0: {
      breakfast: ["Scrambled eggs 2", "Cornflakes 25g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Jam 30g", "Milk 250ml", "Tea/Coffee 250ml"],
      lunch: ["Steak 300g", "Curry noodle 70g", "Vegetable 90g", "Salad", "Juice 250ml"],
      dinner: ["Chicken stirfry", "Pizza / Fatcake / Rice", "Peanut Butter 30g", "Bread 120g", "Margarien 15g", "Fruit 1", "Tea/Coffee"]
    }
  },

  Rosy: {
    1: {
      breakfast: ["Taysteewheat 80g", "Vienna 100g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Milk 250ml", "Jam 30g", "Tea/Coffee 250ml"],
      lunch: ["Mutten stew 250g", "Rice 200g", "Salad 90g", "Vegetables 90g", "Juice 250ml"],
      dinner: ["Vienna 250g", "Potato baked 70g", "Cheese", "Bread 120g", "Margarien 15g", "Peanut butter 30g", "Fruit 1", "Tea/Coffee 250ml"]
    },
    2: {
      breakfast: ["Cornflaks 80g", "Polonies 100g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Milk 250ml", "Peanut butter 30g", "Tea/Coffee 250ml"],
      lunch: ["Chutney Chicken", "Spaghetti 70g", "Vegetables 90g", "Salad", "Juice 250ml"],
      dinner: ["Boerewors", "Noodle Salad", "Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee 250ml"]
    },
    3: {
      breakfast: ["Oats 80g", "Boiled Egg 1", "Sugar 30g", "Bread 120g", "Magarien 15g", "Milk 250ml", "Jam 30g", "Tea/Coffee 250ml"],
      lunch: ["Beef stirfry 250g", "Elbows 90g", "Salad 90g", "Vegetables 90g", "Juice 250ml"],
      dinner: ["Chicken schnitzel 150g", "Hamburger 1", "Chips 90g", "Bread 120g", "Margarien 15g", "Peanut butter 30g", "Fruit 1", "Tea/Coffee"]
    },
    4: {
      breakfast: ["Weetbix 80g", "Fish fingers 30g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Milk 250ml", "Peanut butter 30g", "Tea/Coffee 250ml"],
      lunch: ["Pork chops 350g", "Mush Potato 70g", "Vegetables 90g", "Salad 90g", "Juice 250ml"],
      dinner: ["Mince balls 70g", "Spaghetti 200g",  "Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee 250ml"]
    },
    5: {
      breakfast: ["Taysteewheat 80g", "Boerewors 100g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Milk 250ml", "Jam 30g", "Tea/Coffee 250ml"],
      lunch: ["LampChops 350g", "Starch salad 70g", "Salad 90g", "Vegetables 90g", "Juice 250ml", "Pudding 150g"],
      dinner: ["Russian 250g", "Brotchen 1", "Bread 120g", "Margarien 15g", "Peanut butter 30g", "Fruit 1", "Tea/Coffee"]
    },
    6: {
      breakfast: ["Oats 80g", "Cheese 100g", "Sugar 30g", "Bread 120g", "Magarien 15g", "Milk 250ml", "Peanut butter 30g", "Tea/Coffee 250ml"],
      lunch: ["Fish 250g", "Rice 90g", "Vegetables 90g", "Salad 90g", "Juice 250ml"],
      dinner: ["Pie", "Chips 90g", "Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee"]
    },
    0: {
      breakfast: ["Cornflaks 80g", "Scrambled eggs 2", "Sugar 30g", "Bread 120g", "Magarien 15g", "Milk 250ml", "Jam 30g", "Tea/Coffee 250ml"],
      lunch: ["Brisket 400g", "Noodle", "Salad 90g", "Vegetables 90g", "Juice 250ml"],
      dinner: ["Chiken drum 150g", "Potatoe salad 150g", "Bread 120g", "Margarien 15g", "Peanut butter 30g", "Fruit 1", "Tea/Coffee 250ml"]
    }
  },

  Meriam: {
    1: {
      breakfast: ["Oats 75g", "Vienna 125g", "Milk 250ml", "Sugar 30g", "Bread 120g", "Magarien 15g", "Peanut butter 30g", "Tea/Coffee 250ml"],
      lunch: ["Chicken curry", "Noodle 90g", "Vegetable", "Salad 90g", "Juice 250ml"],
      dinner: ["Mince 70g", "Spaghetti", "Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee 250ml"]
    },
    2: {
      breakfast: ["Weet-bix 35g", "Fish fingers", "Milk 250ml", "Sugar 30g", "Bread 120g", "Magarien 15g", "Jam 30g", "Tea/Coffee 250ml"],
      lunch: ["Beef stew", "Mush Potatoes", "Salad 90g", "Vegetable", "Juice 250ml"],
      dinner: ["Meat pie 1", "Chips","Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee"]
    },
    3: {
      breakfast: ["Taystee Wheat 60g", "Polonies 50g", "Milk 250ml", "Sugar 30g", "Bread 120g", "Magarien 15g", "Peanut butter 30g", "Tea/Coffee 250ml"],
      lunch: ["Fish", "Rice 90g", "Vegetables", "Salad 90g", "Juice 250ml", "Pudding 150g"],
      dinner: ["Boere wors", "Noodle salad", "Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee"]
    },
    4: {
      breakfast: ["Cornflaks 80g", "Boerewors 125g", "Milk 250ml", "Sugar 30g", "Bread 120g", "Magarien 15g", "Jam 30g", "Tea/Coffee 250ml"],
      lunch: ["Brisket 400g", "Butter Potatoes 70g", "Vegetables 90g", "Salad 90g", "Juice 250ml"],
      dinner: ["Chickendrum 2", "Salad", "Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee"]
    },
    5: {
      breakfast: ["Oats 75g", "Boiled Eggs 1", "Milk 250ml", "Sugar 30g", "Bread 120g", "Magarien 15g", "Peanut butter 30g", "Tea/Coffee 250ml"],
      lunch: ["Spa rib 250g", "Rice 90g", "Salad 90g", "Vegetables 90g", "Juice 250 ml"],
      dinner: ["Viennas 250g", "Potato baked", "Bread 120g", "Cheese", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee"]
    },
    6: {
      breakfast: ["Weet-bix 35g", "Cold Meat 125g", "Milk 250ml", "Sugar 30g", "Bread 120g", "Magarien 15g", "Jam 30g", "Tea/Coffee 250ml"],
      lunch: ["Mutton 350g", "Noodles 70g", "Salad 90g", "Vegetable", "Juice 250ml",],
      dinner: ["Fish", "Chips", "Bread 120g", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee"]
    },
    0: {
      breakfast: ["Taystee Wheat 60g", "Scrambled eggs 1", "Milk 250ml", "Sugar 30g", "Bread 120g", "Magarien 15g", "Peanut butter 30g", "Tea/Coffee 250ml"],
      lunch: ["Chicken 250g", "Rice 90g", "Vegetable", "Salad 90g", "Juice 250ml", "Pudding 150g"],
      dinner: ["Mince 70g", "Lasagna / Cheese", "Bread 120g", "Mixed Salad", "Margarien 15g", "Jam 30g", "Fruit 1", "Tea/Coffee"]
    }
  }
};

const menuContainer = document.getElementById("menuContainer");
const cycleTitle = document.getElementById("cycleTitle");
const buttons = document.querySelectorAll(".day-buttons button");

function getMonday(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getCurrentCycle(date = new Date()) {
  const currentMonday = getMonday(date);
  const difference = currentMonday - cycleStartDate;
  const weeksPassed = Math.floor(difference / (7 * 24 * 60 * 60 * 1000));
  const index = ((weeksPassed % 3) + 3) % 3;
  return cycleOrder[index];
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function getRelativeLabel(index) {
  if (index === 0) return "Today's Estimate Menu";
  if (index === 1) return "Tomorrow's Estimate Menu";
  return `Menu in ${index} days`;
}

function createMealBox(items) {
  return `
    <div class="meal-box">
      ${items.map(item => `<p>${item}</p>`).join("")}
    </div>
  `;
}

function createCard(date, index) {
  const cycle = getCurrentCycle(date);
  const dayNumber = date.getDay();
  const menu = menuData[cycle][dayNumber];

  return `
    <section class="day-card">
      <div class="card-top-icon">${calendarIcon}</div>

      <h2 class="day-title">
        ${calendarIcon}
        ${dayNames[dayNumber]}
      </h2>

      <div class="label">${getRelativeLabel(index)}</div>
      <div class="date">${formatDate(date)}</div>

      <div class="meal-title">Breakfast</div>
      ${createMealBox(menu.breakfast)}

      <div class="meal-title">Lunch</div>
      ${createMealBox(menu.lunch)}

      <div class="meal-title">Dinner</div>
      ${createMealBox(menu.dinner)}
    </section>
  `;
}

function getCardsToShow() {
  if (window.innerWidth <= 600) {
    return 1;
  }

  return 3;
}

function renderMenus(startDay = new Date().getDay()) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentCycle = getCurrentCycle(today);
  cycleTitle.textContent = `Current cycle: ${currentCycle}`;

  const selectedDate = new Date(today);
  const todayDay = today.getDay();

  let difference = startDay - todayDay;
  if (difference < 0) difference += 7;

  selectedDate.setDate(today.getDate() + difference);

  const cards = [];
  const cardsToShow = getCardsToShow();

  for (let i = 0; i < cardsToShow; i++) {
    const cardDate = new Date(selectedDate);
    cardDate.setDate(selectedDate.getDate() + i);
    cards.push(createCard(cardDate, i + difference));
  }

  menuContainer.innerHTML = cards.join("");
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderMenus(Number(button.dataset.day));
  });
});

const todayDay = new Date().getDay();

buttons.forEach(button => {
  if (Number(button.dataset.day) === todayDay) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

renderMenus(todayDay);