// 台灣食品營養資料庫 (精選常見烘焙與料理原料)
// 數值以每 100g 為單位
const TAIWAN_FOOD_DB = [
  { id: "1", name: "低筋麵粉", category: "穀物類", calories: 351, protein: 8.2, fat: 1.0, saturatedFat: 0.2, transFat: 0.0, carbohydrate: 76.5, sugar: 0.5, dietaryFiber: 1.8, sodium: 2 },
  { id: "2", name: "中筋麵粉", category: "穀物類", calories: 354, protein: 11.0, fat: 1.2, saturatedFat: 0.2, transFat: 0.0, carbohydrate: 74.0, sugar: 0.5, dietaryFiber: 2.0, sodium: 2 },
  { id: "3", name: "高筋麵粉", category: "穀物類", calories: 358, protein: 13.5, fat: 1.3, saturatedFat: 0.3, transFat: 0.0, carbohydrate: 71.9, sugar: 0.5, dietaryFiber: 2.2, sodium: 2 },
  { id: "4", name: "特級砂糖", category: "糖類", calories: 400, protein: 0.0, fat: 0.0, saturatedFat: 0.0, transFat: 0.0, carbohydrate: 100.0, sugar: 100.0, dietaryFiber: 0.0, sodium: 0 },
  { id: "5", name: "二砂糖 (黃糖)", category: "糖類", calories: 388, protein: 0.1, fat: 0.0, saturatedFat: 0.0, transFat: 0.0, carbohydrate: 98.3, sugar: 98.0, dietaryFiber: 0.0, sodium: 1 },
  { id: "6", name: "無鹽奶油", category: "油脂類", calories: 743, protein: 0.9, fat: 82.0, saturatedFat: 51.3, transFat: 2.5, carbohydrate: 0.6, sugar: 0.6, dietaryFiber: 0.0, sodium: 5 },
  { id: "7", name: "有鹽奶油", category: "油脂類", calories: 735, protein: 0.9, fat: 81.1, saturatedFat: 50.8, transFat: 2.5, carbohydrate: 0.6, sugar: 0.6, dietaryFiber: 0.0, sodium: 570 },
  { id: "8", name: "雞蛋 (全蛋)", category: "蛋類", calories: 139, protein: 12.7, fat: 8.9, saturatedFat: 2.9, transFat: 0.0, carbohydrate: 1.1, sugar: 0.2, dietaryFiber: 0.0, sodium: 139 },
  { id: "9", name: "蛋黃", category: "蛋類", calories: 322, protein: 15.8, fat: 28.2, saturatedFat: 9.3, transFat: 0.0, carbohydrate: 1.3, sugar: 0.2, dietaryFiber: 0.0, sodium: 83 },
  { id: "10", name: "蛋白", category: "蛋類", calories: 48, protein: 11.1, fat: 0.1, saturatedFat: 0.0, transFat: 0.0, carbohydrate: 0.8, sugar: 0.2, dietaryFiber: 0.0, sodium: 167 },
  { id: "11", name: "全脂鮮乳", category: "乳品類", calories: 63, protein: 3.2, fat: 3.6, saturatedFat: 2.3, transFat: 0.1, carbohydrate: 4.6, sugar: 4.6, dietaryFiber: 0.0, sodium: 45 },
  { id: "12", name: "食鹽", category: "調味類", calories: 0, protein: 0.0, fat: 0.0, saturatedFat: 0.0, transFat: 0.0, carbohydrate: 0.0, sugar: 0.0, dietaryFiber: 0.0, sodium: 38758 },
  { id: "13", name: "自來水", category: "水類", calories: 0, protein: 0.0, fat: 0.0, saturatedFat: 0.0, transFat: 0.0, carbohydrate: 0.0, sugar: 0.0, dietaryFiber: 0.0, sodium: 1 },
  { id: "14", name: "大豆沙拉油", category: "油脂類", calories: 884, protein: 0.0, fat: 100.0, saturatedFat: 15.4, transFat: 1.1, carbohydrate: 0.0, sugar: 0.0, dietaryFiber: 0.0, sodium: 0 },
  { id: "15", name: "橄欖油", category: "油脂類", calories: 884, protein: 0.0, fat: 100.0, saturatedFat: 13.8, transFat: 0.0, carbohydrate: 0.0, sugar: 0.0, dietaryFiber: 0.0, sodium: 0 },
  { id: "16", name: "燕麥片", category: "穀物類", calories: 393, protein: 13.0, fat: 8.0, saturatedFat: 1.5, transFat: 0.0, carbohydrate: 67.2, sugar: 1.2, dietaryFiber: 8.5, sodium: 4 },
  { id: "17", name: "純蜂蜜", category: "糖類", calories: 315, protein: 0.3, fat: 0.0, saturatedFat: 0.0, transFat: 0.0, carbohydrate: 78.7, sugar: 74.8, dietaryFiber: 0.0, sodium: 2 },
  { id: "18", name: "可可粉 (無糖)", category: "調味類", calories: 343, protein: 18.5, fat: 11.5, saturatedFat: 6.9, transFat: 0.0, carbohydrate: 53.0, sugar: 0.8, dietaryFiber: 28.5, sodium: 14 },
  { id: "19", name: "泡打粉", category: "調味類", calories: 92, protein: 0.1, fat: 0.1, saturatedFat: 0.0, transFat: 0.0, carbohydrate: 22.8, sugar: 0.0, dietaryFiber: 0.0, sodium: 12200 },
  { id: "20", name: "乾酵母粉", category: "調味類", calories: 325, protein: 40.5, fat: 5.6, saturatedFat: 1.0, transFat: 0.0, carbohydrate: 38.3, sugar: 9.0, dietaryFiber: 20.0, sodium: 62 },
  { id: "21", name: "奶粉 (全脂)", category: "乳品類", calories: 504, protein: 26.3, fat: 26.9, saturatedFat: 16.2, transFat: 0.8, carbohydrate: 38.4, sugar: 38.4, dietaryFiber: 0.0, sodium: 371 }
];

// 自訂原料庫 (從 localStorage 讀取)
let customFoods = [];

// 當前配方原料列表
let recipeIngredients = [];

// 當前頁面狀態：'editing' (編輯中), 'completed' (結束輸入，已計算與稽核)
let currentStep = 'editing';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  loadCustomFoods();
  initTheme();
  setupEventListeners();
  renderAutocompleteDropdown('');
  updateUI();
  // 延遲載入 Mermaid 流程圖以防 CDN 尚未加載完畢
  setTimeout(renderMermaidLive, 500);
});

// Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeIcon = document.querySelector('#themeToggle i');
  if (savedTheme === 'dark') {
    themeIcon.className = 'ri-sun-line';
  } else {
    themeIcon.className = 'ri-moon-line';
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  const themeIcon = document.querySelector('#themeToggle i');
  themeIcon.className = newTheme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
}

// LocalStorage 讀取自訂原料
function loadCustomFoods() {
  const stored = localStorage.getItem('custom_foods');
  if (stored) {
    customFoods = JSON.parse(stored);
  }
}

function saveCustomFoods() {
  localStorage.setItem('custom_foods', JSON.stringify(customFoods));
}

// 取得全部原料 (內建 + 自訂)
function getAllFoods() {
  return [...TAIWAN_FOOD_DB, ...customFoods];
}

// 初始化事件監聽
function setupEventListeners() {
  // Theme button
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Ingredient Autocomplete
  const inputSearch = document.getElementById('ingSearch');
  inputSearch.addEventListener('input', (e) => {
    renderAutocompleteDropdown(e.target.value);
  });
  inputSearch.addEventListener('focus', () => {
    renderAutocompleteDropdown(inputSearch.value);
  });
  
  // 點擊外部關閉選單
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.autocomplete-container')) {
      document.getElementById('autocompleteDropdown').style.display = 'none';
    }
  });

  // 新增原料按鈕
  document.getElementById('btnAddIngredient').addEventListener('click', addIngredientFromForm);

  // 結束輸入按鈕 (結束鍵)
  document.getElementById('btnFinishRecipe').addEventListener('click', finishRecipeInput);

  // 返回編輯按鈕
  document.getElementById('btnBackToEdit').addEventListener('click', backToEdit);

  // 匯出圖片按鈕
  document.getElementById('btnExportPng').addEventListener('click', downloadLabelAsPng);

  // 複製 HTML 標籤
  document.getElementById('btnCopyHtml').addEventListener('click', copyLabelHtml);

  // 自訂原料視窗
  document.getElementById('btnOpenCustomModal').addEventListener('click', openCustomModal);
  document.getElementById('btnCloseModal').addEventListener('click', closeCustomModal);
  document.getElementById('btnSaveCustomFood').addEventListener('click', saveCustomFoodFromModal);

  // 導覽分頁切換事件
  document.getElementById('tabCalcBtn').addEventListener('click', () => switchTab('calc'));
  document.getElementById('tabPlaygroundBtn').addEventListener('click', () => switchTab('playground'));

  // 重新渲染 Mermaid 事件
  document.getElementById('btnUpdateMermaid').addEventListener('click', renderMermaidLive);
}

// 渲染自動完成下拉選單
function renderAutocompleteDropdown(query) {
  const dropdown = document.getElementById('autocompleteDropdown');
  dropdown.innerHTML = '';
  
  const foods = getAllFoods();
  const filtered = foods.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));

  if (filtered.length === 0) {
    const li = document.createElement('li');
    li.innerHTML = `<span style="color: var(--text-muted);">無符合原料，點選右方「自訂原料」新增</span>`;
    dropdown.appendChild(li);
  } else {
    filtered.slice(0, 10).forEach(food => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="name">${food.name}</span>
        <span class="category">${food.category}</span>
      `;
      li.addEventListener('mousedown', () => {
        selectFood(food);
      });
      dropdown.appendChild(li);
    });
  }
  
  dropdown.style.display = 'block';
}

// 選擇原料
let selectedFoodId = null;
function selectFood(food) {
  document.getElementById('ingSearch').value = food.name;
  selectedFoodId = food.id;
  document.getElementById('autocompleteDropdown').style.display = 'none';
  document.getElementById('ingWeight').focus();
}

// 新增原料至配方
function addIngredientFromForm() {
  const searchInput = document.getElementById('ingSearch');
  const weightInput = document.getElementById('ingWeight');
  
  const name = searchInput.value.trim();
  const weight = parseFloat(weightInput.value);

  if (!name) {
    showToast("請輸入或選擇原料名稱", "error");
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    showToast("請輸入有效的原料重量 (需大於0)", "error");
    return;
  }

  // 尋找此名稱的原料是否存在
  const foods = getAllFoods();
  let food = foods.find(f => f.name === name);

  if (!food) {
    showToast("未找到此原料，請先使用右側「新增自訂原料」按鈕建立該原料的營養參數！", "warning");
    return;
  }

  // 加入列表
  recipeIngredients.push({
    id: food.id,
    name: food.name,
    weight: weight,
    nutrition: { ...food }
  });

  // 清空輸入
  searchInput.value = '';
  weightInput.value = '';
  selectedFoodId = null;
  
  showToast(`已新增 ${food.name} ${weight}g`, "success");
  updateUI();
  
  // 自動填入成品預估重量 (如果尚未填寫)
  autoFillCookedWeight();
}

// 自動算出食材總重並作為成品重量預設值
function autoFillCookedWeight() {
  const cookedWeightInput = document.getElementById('cookedWeight');
  if (!cookedWeightInput.value || cookedWeightInput.dataset.autoFilled === "true") {
    const totalRaw = recipeIngredients.reduce((sum, item) => sum + item.weight, 0);
    cookedWeightInput.value = Math.round(totalRaw);
    cookedWeightInput.dataset.autoFilled = "true";
  }
}

// 當使用者自己改成品重量時，標記非自動填入
document.getElementById('cookedWeight').addEventListener('input', () => {
  document.getElementById('cookedWeight').dataset.autoFilled = "false";
});

// 移除原料
function removeIngredient(index) {
  const removed = recipeIngredients.splice(index, 1);
  showToast(`已移除 ${removed[0].name}`, "info");
  updateUI();
  autoFillCookedWeight();
}

// 更新配方列表 UI
function updateUI() {
  const listContainer = document.getElementById('ingredientList');
  listContainer.innerHTML = '';

  const totalRawWeight = recipeIngredients.reduce((sum, item) => sum + item.weight, 0);
  document.getElementById('totalRawWeightSpan').textContent = totalRawWeight.toFixed(1) + ' g';

  if (recipeIngredients.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 2rem 0; font-size: 0.9rem;">
        <i class="ri-inbox-line" style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem;"></i>
        目前尚無配方原料，請於上方欄位新增。
      </div>
    `;
    document.getElementById('btnFinishRecipe').disabled = true;
    return;
  }

  document.getElementById('btnFinishRecipe').disabled = false;

  recipeIngredients.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'ingredient-item';
    div.innerHTML = `
      <div class="ingredient-info">
        <span class="ingredient-name">${item.name}</span>
        <span class="ingredient-weight">${item.weight} g (熱量: ${Math.round(item.nutrition.calories * item.weight / 100)} kcal)</span>
      </div>
      <div class="ingredient-actions">
        <button class="btn btn-icon btn-sm btn-danger" onclick="removeIngredient(${index})">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    `;
    listContainer.appendChild(div);
  });
}

// 開啟自訂原料視窗
function openCustomModal() {
  document.getElementById('customModal').classList.add('active');
}

// 關閉自訂原料視窗
function closeCustomModal() {
  document.getElementById('customModal').classList.remove('active');
  // 清空輸入
  document.getElementById('modalForm').reset();
}

// 儲存自訂原料
function saveCustomFoodFromModal() {
  const name = document.getElementById('custName').value.trim();
  const category = document.getElementById('custCategory').value;
  const calories = parseFloat(document.getElementById('custCalories').value) || 0;
  const protein = parseFloat(document.getElementById('custProtein').value) || 0;
  const fat = parseFloat(document.getElementById('custFat').value) || 0;
  const satFat = parseFloat(document.getElementById('custSaturatedFat').value) || 0;
  const transFat = parseFloat(document.getElementById('custTransFat').value) || 0;
  const carb = parseFloat(document.getElementById('custCarbohydrate').value) || 0;
  const sugar = parseFloat(document.getElementById('custSugar').value) || 0;
  const fiber = parseFloat(document.getElementById('custDietaryFiber').value) || 0;
  const sodium = parseFloat(document.getElementById('custSodium').value) || 0;

  if (!name) {
    showToast("原料名稱為必填項目", "error");
    return;
  }

  // 檢查是否有名稱重複
  const exists = getAllFoods().some(f => f.name === name);
  if (exists) {
    showToast("此原料名稱已存在於資料庫中", "error");
    return;
  }

  // 新增至自訂陣列
  const newFood = {
    id: "custom_" + Date.now(),
    name,
    category,
    calories,
    protein,
    fat,
    saturatedFat: satFat,
    transFat,
    carbohydrate: carb,
    sugar,
    dietaryFiber: fiber,
    sodium
  };

  customFoods.push(newFood);
  saveCustomFoods();
  closeCustomModal();
  showToast(`自訂原料「${name}」已儲存，現在可以在搜尋欄中直接點選使用`, "success");
}

// Toast 提示訊息
function showToast(message, type = "info") {
  const toast = document.getElementById('toast');
  const icon = toast.querySelector('i');
  const text = toast.querySelector('span');

  text.textContent = message;
  
  // Icon style
  if (type === "success") {
    icon.className = "ri-checkbox-circle-fill";
    icon.style.color = "var(--success)";
  } else if (type === "error") {
    icon.className = "ri-close-circle-fill";
    icon.style.color = "var(--danger)";
  } else if (type === "warning") {
    icon.className = "ri-error-warning-fill";
    icon.style.color = "var(--warning)";
  } else {
    icon.className = "ri-information-fill";
    icon.style.color = "var(--primary)";
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ----------------------------------------------------
// 結束輸入按鈕點擊後觸發核心計算與規範檢驗
// ----------------------------------------------------
let calculatedDraft = null;
let auditResults = [];
let finalLabelData = null;

function finishRecipeInput() {
  if (recipeIngredients.length === 0) {
    showToast("請至少新增一項配方原料", "error");
    return;
  }

  const cookedWeight = parseFloat(document.getElementById('cookedWeight').value);
  const servings = parseFloat(document.getElementById('servings').value);
  const servingSize = parseFloat(document.getElementById('servingSize').value);

  if (isNaN(cookedWeight) || cookedWeight <= 0) {
    showToast("成品總重量輸入無效", "error");
    return;
  }
  if (isNaN(servings) || servings <= 0) {
    showToast("本包裝含份數輸入無效", "error");
    return;
  }
  if (isNaN(servingSize) || servingSize <= 0) {
    showToast("每一份量克數輸入無效", "error");
    return;
  }

  // 1. 計算產品營養成分草稿 (直接算加總)
  calculatedDraft = calculateDraftNutrition(cookedWeight);

  // 2. 進行包裝食品規範稽核
  auditResults = auditCompliance(cookedWeight, servings, servingSize);

  // 3. 準備最終標示資料 (執行四捨五入與 0 標示規則)
  finalLabelData = prepareFinalLabelData(calculatedDraft, servings, servingSize);

  // 4. 切換頁面狀態
  currentStep = 'completed';
  
  // 更新 UI 顯示
  document.getElementById('editPanel').style.display = 'none';
  document.getElementById('outputPanel').style.display = 'block';
  document.getElementById('stepEdit').classList.replace('active', 'completed');
  document.getElementById('stepCalc').classList.add('active');

  renderDraftTable();
  renderComplianceCheck();
  renderFinalLabelTable();
  drawNutritionPieChart();
  
  showToast("計算與規範檢驗完成！", "success");
}

function backToEdit() {
  currentStep = 'editing';
  document.getElementById('editPanel').style.display = 'block';
  document.getElementById('outputPanel').style.display = 'none';
  document.getElementById('stepEdit').classList.add('active');
  document.getElementById('stepEdit').classList.remove('completed');
  document.getElementById('stepCalc').classList.remove('active');
}

// 1. 計算草稿 (未經過修約、原汁原味的累計值)
function calculateDraftNutrition(cookedWeight) {
  let totals = {
    calories: 0,
    protein: 0,
    fat: 0,
    saturatedFat: 0,
    transFat: 0,
    carbohydrate: 0,
    sugar: 0,
    dietaryFiber: 0,
    sodium: 0
  };

  // 各原料加總
  recipeIngredients.forEach(item => {
    const factor = item.weight / 100;
    totals.calories += item.nutrition.calories * factor;
    totals.protein += item.nutrition.protein * factor;
    totals.fat += item.nutrition.fat * factor;
    totals.saturatedFat += item.nutrition.saturatedFat * factor;
    totals.transFat += item.nutrition.transFat * factor;
    totals.carbohydrate += item.nutrition.carbohydrate * factor;
    totals.sugar += item.nutrition.sugar * factor;
    totals.dietaryFiber += item.nutrition.dietaryFiber * factor;
    totals.sodium += item.nutrition.sodium * factor;
  });

  // 計算每 100g 熟重之密度數值
  let per100g = {};
  for (let key in totals) {
    per100g[key] = (totals[key] / cookedWeight) * 100;
  }

  return {
    rawTotals: totals,
    per100g: per100g,
    totalRawWeight: recipeIngredients.reduce((sum, item) => sum + item.weight, 0)
  };
}

// 2. 檢驗標示是否符合台灣衛福部規範
function auditCompliance(cookedWeight, servings, servingSize) {
  let audits = [];
  const totalRawWeight = recipeIngredients.reduce((sum, item) => sum + item.weight, 0);

  // A. 成品重量與原料總重量合理性檢驗
  if (cookedWeight > totalRawWeight) {
    audits.push({
      item: "成品總重量檢驗",
      status: "warning",
      desc: `成品總重量 (${cookedWeight}g) 大於原料配方總重量 (${totalRawWeight.toFixed(1)}g)。通常烹飪過程水分會逸散，若您有額外加水，請將「水」加入原料清單以確保準確。`
    });
  } else {
    const diffPercent = ((totalRawWeight - cookedWeight) / totalRawWeight) * 100;
    audits.push({
      item: "烘焙損耗檢驗",
      status: "pass",
      desc: `成品熟重合理（烹調水分流失率約 ${diffPercent.toFixed(1)}%）。`
    });
  }

  // B. 每一份量與總包裝份數關聯性檢驗
  const calcTotalPackWeight = servings * servingSize;
  const tolerance = 2; // 容許2克誤差
  if (Math.abs(calcTotalPackWeight - cookedWeight) > tolerance) {
    audits.push({
      item: "包裝份數與份量關聯性",
      status: "fail",
      desc: `「本包裝含 ${servings} 份 × 每一份量 ${servingSize}g = ${calcTotalPackWeight}g」，此數值與「成品總重量 ${cookedWeight}g」不相符。這會使標籤計算產生邏輯錯誤，請確認！`
    });
  } else {
    audits.push({
      item: "包裝份數與份量關聯性",
      status: "pass",
      desc: `每一份量與總包裝份數計算吻合。`
    });
  }

  // C. 碳水化合物、糖與膳食纖維的數值合理性 (Carb >= Sugar + Fiber)
  const draftPer100g = calculatedDraft.per100g;
  const carbSum = draftPer100g.sugar + draftPer100g.dietaryFiber;
  if (draftPer100g.carbohydrate < carbSum - 0.01) {
    audits.push({
      item: "碳水化合物加總檢驗",
      status: "fail",
      desc: `原料中的 糖 (${draftPer100g.sugar.toFixed(1)}g) 與 膳食纖維 (${draftPer100g.dietaryFiber.toFixed(1)}g) 加總大於碳水化合物總量 (${draftPer100g.carbohydrate.toFixed(1)}g)，請檢視自訂原料之數值是否填寫有誤。`
    });
  } else {
    audits.push({
      item: "碳水化合物加總檢驗",
      status: "pass",
      desc: `碳水化合物總量符合法規，大於或等於糖與膳食纖維之總和。`
    });
  }

  // D. 鈉含量整數修約規則檢驗
  // 法規規定鈉標示值必須是整數 (無小數點)
  audits.push({
    item: "鈉含量修約稽核",
    status: "info",
    desc: `依據規範，鈉標示單位為毫克 (mg)，其最終輸出數值必須以「整數」標示。系統已自動套用修約規則。`
  });

  // E. 膳食纖維自願標示檢驗
  if (draftPer100g.dietaryFiber > 0) {
    audits.push({
      item: "膳食纖維宣稱標示",
      status: "info",
      desc: `本產品含膳食纖維 (${draftPer100g.dietaryFiber.toFixed(2)}g / 100g)，已自動列入標示表格。若要宣稱「高纖」，每 100g 固體食品需達 6g 以上。`
    });
  }

  return audits;
}

// 3. 依據台灣衛福部修約四捨五入與 0 標示規則處理數據
function prepareFinalLabelData(draft, servings, servingSize) {
  const per100gRaw = draft.per100g;
  const servingRatio = servingSize / 100;

  // 台灣 0 標示界限值定義
  // 每一份量 (或每 100g) 達此限以下即可標示為 0
  const zeroLimits = {
    calories: 4,      // 4 kcal
    protein: 0.5,     // 0.5g
    fat: 0.5,         // 0.5g
    saturatedFat: 0.1,// 0.1g
    transFat: 0.3,    // 0.3g (但如果食品總脂肪 <= 0.7g，反式脂肪亦可標示 0)
    carbohydrate: 0.5,// 0.5g
    sugar: 0.5,       // 0.5g
    dietaryFiber: 0.5,// 0.5g
    sodium: 5         // 5mg
  };

  // 輔助修約函數 (熱量、鈉取整數或小數一位；反式脂肪以外成分四捨五入至小數點第一位；鈉取整數)
  function roundValue(val, key, type) {
    // val 是一份或 100g 的真實數值，type 是 'sodium' | 'calories' | 'other'
    
    // 檢查是否符合 0 標示規範 (以該單位為基準)
    // 根據法規，若「每 100g」或「每份」的數值小於等於界限值，則「該單位欄位」可標示為 0
    if (key === 'transFat') {
      // 特殊規則：若總脂肪 <= 0.7g，反式脂肪也可以標 0
      const currentFatVal = type === 'perServing' ? per100gRaw.fat * servingRatio : per100gRaw.fat;
      if (val <= zeroLimits.transFat || currentFatVal <= 0.7) {
        return 0;
      }
    } else {
      if (val <= zeroLimits[key]) {
        return 0;
      }
    }

    if (key === 'sodium') {
      return Math.round(val); // 鈉必須是整數
    }
    if (key === 'calories') {
      return Math.round(val * 10) / 10; // 熱量可至小數一位或整數，我們取小數一位
    }
    
    // 其他一般成分 (蛋白質、脂肪、飽和脂肪、反式脂肪、碳水、糖、膳食纖維) 四捨五入至小數一位
    return Math.round(val * 10) / 10;
  }

  let finalData = {
    perServing: {},
    per100g: {},
    referencePercent: {}
  };

  // 每日參考值
  const dailyRef = {
    calories: 2000,
    protein: 60,
    fat: 60,
    saturatedFat: 18,
    carbohydrate: 300,
    sodium: 2000
    // 反式脂肪與糖、膳食纖維目前在台灣無訂定每日參考值 %
  };

  const keys = ['calories', 'protein', 'fat', 'saturatedFat', 'transFat', 'carbohydrate', 'sugar', 'dietaryFiber', 'sodium'];

  keys.forEach(key => {
    // 100g 數值
    const raw100g = per100gRaw[key];
    finalData.per100g[key] = roundValue(raw100g, key, 'per100g');

    // 每份數值
    const rawServing = raw100g * servingRatio;
    finalData.perServing[key] = roundValue(rawServing, key, 'perServing');

    // 每日參考值百分比 (以每份數值除以每日參考值)
    if (dailyRef[key]) {
      const pct = (rawServing / dailyRef[key]) * 100;
      finalData.referencePercent[key] = Math.round(pct);
    } else {
      finalData.referencePercent[key] = null; // 標示為 * 或不標示
    }
  });

  return finalData;
}

// 渲染計算草稿表格 (未做零界值跟四捨五入的原始資料)
function renderDraftTable() {
  const tbody = document.getElementById('draftTableBody');
  tbody.innerHTML = '';

  const draftPer100g = calculatedDraft.per100g;
  const rawTotals = calculatedDraft.rawTotals;

  const names = {
    calories: "熱量 (kcal)",
    protein: "蛋白質 (g)",
    fat: "脂肪 (g)",
    saturatedFat: "  - 飽和脂肪 (g)",
    transFat: "  - 反式脂肪 (g)",
    carbohydrate: "碳水化合物 (g)",
    sugar: "  - 糖 (g)",
    dietaryFiber: "  - 膳食纖維 (g)",
    sodium: "鈉 (mg)"
  };

  for (let key in names) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${names[key]}</td>
      <td>${rawTotals[key].toFixed(2)}</td>
      <td>${draftPer100g[key].toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  }
}

// 渲染法規稽核狀態
function renderComplianceCheck() {
  const container = document.getElementById('complianceContainer');
  container.innerHTML = '';

  // 評估整體是否通過
  let hasFail = auditResults.some(r => r.status === 'fail');
  let hasWarning = auditResults.some(r => r.status === 'warning');

  const banner = document.createElement('div');
  banner.className = 'compliance-status-banner ';
  if (hasFail) {
    banner.className += 'status-danger';
    banner.innerHTML = `<i class="ri-close-circle-line"></i> <span>標示含有未符法規邏輯之項目，建議修正後再行印製。</span>`;
  } else if (hasWarning) {
    banner.className += 'status-warning';
    banner.innerHTML = `<i class="ri-error-warning-line"></i> <span>標示大體符合，但有警示項目需注意。</span>`;
  } else {
    banner.className += 'status-compliant';
    banner.innerHTML = `<i class="ri-checkbox-circle-line"></i> <span>恭喜！標示符合台灣包裝食品營養標示規範邏輯。</span>`;
  }
  container.appendChild(banner);

  const checklist = document.createElement('div');
  checklist.className = 'compliance-checklist';

  auditResults.forEach(res => {
    let iconClass = 'ri-information-line checklist-icon info';
    if (res.status === 'pass') iconClass = 'ri-checkbox-circle-line checklist-icon pass';
    if (res.status === 'fail') iconClass = 'ri-close-circle-line checklist-icon fail';
    if (res.status === 'warning') iconClass = 'ri-error-warning-line checklist-icon warning';

    const item = document.createElement('div');
    item.className = 'checklist-item';
    item.innerHTML = `
      <i class="${iconClass}" style="font-size: 1.1rem; margin-top: 2px;"></i>
      <div class="checklist-text">
        <span class="checklist-title">${res.item}</span>
        <span class="checklist-desc">${res.desc}</span>
      </div>
    `;
    checklist.appendChild(item);
  });

  container.appendChild(checklist);
}

// ----------------------------------------------------
// 按熱量、蛋白質、脂肪、碳水化合物、糖、膳食纖維、鈉之順序輸出最終表格
// ----------------------------------------------------
function renderFinalLabelTable() {
  const container = document.getElementById('finalLabelContainer');
  container.innerHTML = '';

  const servings = parseFloat(document.getElementById('servings').value);
  const servingSize = parseFloat(document.getElementById('servingSize').value);

  // 1. 建立標籤外包裝資訊
  const labelDiv = document.createElement('div');
  labelDiv.className = 'taiwan-nutrition-label';
  labelDiv.id = 'printableLabel';

  // 標題與基本欄位 (每一份量及本包裝含)
  let html = `
    <div class="label-title">營養標示</div>
    <div class="label-serving-info">
      <div>每一份量 ${servingSize} 公克</div>
      <div>本包裝含 ${servings} 份</div>
    </div>
    <table class="label-table">
      <thead>
        <tr>
          <th class="col-name"></th>
          <th>每份</th>
          <th>每 100 公克</th>
        </tr>
      </thead>
      <tbody>
  `;

  // 使用者指定順序：熱量、蛋白質、脂肪、碳水化合物、糖、膳食纖維、鈉
  // (台灣食品法規要求的飽和脂肪、反式脂肪則縮排做為脂肪的子項目，這符合標準規範)
  const orderList = [
    { key: 'calories', name: '熱量', unit: '大卡', isSub: false },
    { key: 'protein', name: '蛋白質', unit: '公克', isSub: false },
    { key: 'fat', name: '脂肪', unit: '公克', isSub: false },
    { key: 'saturatedFat', name: '飽和脂肪', unit: '公克', isSub: true },
    { key: 'transFat', name: '反式脂肪', unit: '公克', isSub: true },
    { key: 'carbohydrate', name: '碳水化合物', unit: '公克', isSub: false },
    { key: 'sugar', name: '糖', unit: '公克', isSub: true },
    { key: 'dietaryFiber', name: '膳食纖維', unit: '公克', isSub: true },
    { key: 'sodium', name: '鈉', unit: '毫克', isSub: false }
  ];

  orderList.forEach(item => {
    const key = item.key;
    const isSub = item.isSub;
    const nameStr = item.name;
    const unitStr = item.unit;

    const rowClass = isSub ? 'sub-row' : 'main-row';
    const borderClass = (key === 'calories') ? '' : 'border-top';

    const valServing = finalLabelData.perServing[key];
    const val100g = finalLabelData.per100g[key];

    // 格式化顯示，避免小數點後多餘的 0，但確保有小數點一位 (例如 5.0 寫 5 或 5.0 皆可，我們保持標準修約)
    const showServing = valServing + ' ' + unitStr;
    const show100g = val100g + ' ' + unitStr;

    html += `
      <tr class="${rowClass} ${borderClass}">
        <td class="col-name">${isSub ? '　' + nameStr : nameStr}</td>
        <td>${showServing}</td>
        <td>${show100g}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  // 添加台灣法規要求的每日參考值說明 (因為無標示 % 格式，此處可做簡單輔助標示)
  html += `
    <div class="label-footer">
      * 每日參考值：熱量 2000 大卡、蛋白質 60 公克、脂肪 60 公克、飽和脂肪 18 公克、碳水化合物 300 公克、鈉 2000 毫克。
    </div>
  `;

  labelDiv.innerHTML = html;
  container.appendChild(labelDiv);
}

// 繪製三大營養素熱量佔比圓餅圖
function drawNutritionPieChart() {
  const canvas = document.getElementById('nutritionChart');
  const ctx = canvas.getContext('2d');
  
  // 清除舊繪圖
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const proteinG = finalLabelData.perServing.protein;
  const fatG = finalLabelData.perServing.fat;
  const carbG = finalLabelData.perServing.carbohydrate;

  // 計算三大熱量貢獻 (蛋白質 4 kcal/g, 碳水 4 kcal/g, 脂肪 9 kcal/g)
  const proteinKcal = proteinG * 4;
  const carbKcal = carbG * 4;
  const fatKcal = fatG * 9;
  const totalKcal = proteinKcal + carbKcal + fatKcal;

  if (totalKcal <= 0) {
    ctx.fillStyle = '#64748b';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('無營養成分數據無法繪製圖表', canvas.width / 2, canvas.height / 2);
    return;
  }

  const pPct = proteinKcal / totalKcal;
  const cPct = carbKcal / totalKcal;
  const fPct = fatKcal / totalKcal;

  const data = [
    { label: '蛋白質', value: pPct, color: '#10b981' }, // Green
    { label: '脂肪', value: fPct, color: '#f59e0b' },    // Orange/Yellow
    { label: '碳水化合物', value: cPct, color: '#3b82f6' } // Blue
  ];

  const centerX = 100;
  const centerY = 100;
  const radius = 75;
  let startAngle = -Math.PI / 2; // 從 12 點鐘方向開始

  data.forEach(slice => {
    if (slice.value <= 0) return;
    const sliceAngle = slice.value * 2 * Math.PI;

    // 畫扇形
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = slice.color;
    ctx.fill();

    startAngle += sliceAngle;
  });

  // 繪製圖例 (Legend)
  ctx.textAlign = 'left';
  ctx.font = '12px "Noto Sans TC", sans-serif';
  let legendY = 50;

  data.forEach(slice => {
    // 畫小方塊
    ctx.fillStyle = slice.color;
    ctx.fillRect(200, legendY - 10, 12, 12);
    
    // 寫文字
    ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#cbd5e1' : '#1e293b';
    const percentStr = (slice.value * 100).toFixed(1) + '%';
    ctx.fillText(`${slice.label}: ${percentStr}`, 220, legendY);
    legendY += 30;
  });
}

// ----------------------------------------------------
// 繪製高解析度 Canvas 並下載為 PNG 圖檔
// ----------------------------------------------------
function downloadLabelAsPng() {
  const servings = parseFloat(document.getElementById('servings').value);
  const servingSize = parseFloat(document.getElementById('servingSize').value);

  // 建立一個隱藏的 canvas 來高精度繪製標籤
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // 設定 Canvas 寬度與高度
  const w = 400;
  const h = 580;
  canvas.width = w * 2; // 2倍解析度防鋸齒
  canvas.height = h * 2;
  ctx.scale(2, 2);

  // 背景白色
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  // 外邊雙框線
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3;
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.lineWidth = 1;
  ctx.strokeRect(14, 14, w - 28, h - 28);

  // 寫入字型設定
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'top';

  // 1. 標題：營養標示
  ctx.font = '900 24px "Noto Sans TC", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('營 養 標 示', w / 2, 28);

  // 雙橫線下方的份量資訊
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(20, 65);
  ctx.lineTo(w - 20, 65);
  ctx.stroke();

  ctx.font = '500 14px "Noto Sans TC", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`每一份量 ${servingSize} 公克`, 24, 75);
  ctx.fillText(`本包裝含 ${servings} 份`, 24, 95);

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(20, 120);
  ctx.lineTo(w - 20, 120);
  ctx.stroke();

  // 表頭
  ctx.font = 'bold 12px "Noto Sans TC", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('單 位', 24, 130);
  ctx.textAlign = 'right';
  ctx.fillText('每份', w - 140, 130);
  ctx.fillText('每 100 公克', w - 30, 130);

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(20, 150);
  ctx.lineTo(w - 20, 150);
  ctx.stroke();

  // 繪製各營養素項目
  const orderList = [
    { key: 'calories', name: '熱量', unit: '大卡', isSub: false },
    { key: 'protein', name: '蛋白質', unit: '公克', isSub: false },
    { key: 'fat', name: '脂肪', unit: '公克', isSub: false },
    { key: 'saturatedFat', name: '飽和脂肪', unit: '公克', isSub: true },
    { key: 'transFat', name: '反式脂肪', unit: '公克', isSub: true },
    { key: 'carbohydrate', name: '碳水化合物', unit: '公克', isSub: false },
    { key: 'sugar', name: '糖', unit: '公克', isSub: true },
    { key: 'dietaryFiber', name: '膳食纖維', unit: '公克', isSub: true },
    { key: 'sodium', name: '鈉', unit: '毫克', isSub: false }
  ];

  let currentY = 160;
  ctx.font = '14px "Noto Sans TC", sans-serif';

  orderList.forEach(item => {
    const key = item.key;
    const isSub = item.isSub;
    const valServing = finalLabelData.perServing[key];
    const val100g = finalLabelData.per100g[key];
    const showServing = valServing + ' ' + item.unit;
    const show100g = val100g + ' ' + item.unit;

    // 畫橫線
    if (key !== 'calories') {
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#000000';
      ctx.beginPath();
      ctx.moveTo(20, currentY);
      ctx.lineTo(w - 20, currentY);
      ctx.stroke();
      currentY += 4;
    }

    // 文字粗細
    ctx.font = isSub ? '500 13px "Noto Sans TC", sans-serif' : 'bold 14px "Noto Sans TC", sans-serif';
    
    // 項目名稱
    ctx.textAlign = 'left';
    ctx.fillText(isSub ? '   ' + item.name : item.name, 24, currentY);

    // 每份與每100g
    ctx.textAlign = 'right';
    ctx.fillText(showServing, w - 140, currentY);
    ctx.fillText(show100g, w - 30, currentY);

    currentY += 24;
  });

  // 底部說明線
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(20, currentY);
  ctx.lineTo(w - 20, currentY);
  ctx.stroke();

  // 底部文字
  ctx.font = '10px "Noto Sans TC", sans-serif';
  ctx.textAlign = 'left';
  const footerText1 = '* 每日參考值：熱量 2000 大卡、蛋白質 60 公克、脂肪 60 公克、';
  const footerText2 = '  飽和脂肪 18 公克、碳水化合物 300 公克、鈉 2000 毫克。';
  ctx.fillText(footerText1, 24, currentY + 8);
  ctx.fillText(footerText2, 24, currentY + 22);

  // 下載觸發
  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = `營養標示_${Date.now()}.png`;
  link.href = dataUrl;
  link.click();
  showToast("已成功下載高解析度標籤 PNG 圖片！", "success");
}

// 複製 HTML 標籤至剪貼簿
function copyLabelHtml() {
  const labelMarkup = document.getElementById('finalLabelContainer').innerHTML;
  
  // 包裝樣式與結構，讓使用者可以直接貼到他們網站上
  const fullHtml = `
<!-- 台灣衛福部規範營養標示貼紙開始 -->
<style>
.tw-nutri-sticker {
  background: #ffffff;
  color: #000000;
  border: 2px solid #000000;
  padding: 12px 16px;
  font-family: "Noto Sans TC", sans-serif;
  width: 290px;
  box-sizing: border-box;
  font-size: 13px;
  line-height: 1.4;
}
.tw-nutri-sticker * { box-sizing: border-box; }
.tw-nutri-bold { font-weight: 700; }
.tw-nutri-title {
  font-size: 20px;
  text-align: center;
  font-weight: 900;
  border-bottom: 3px double #000000;
  padding-bottom: 2px;
  margin-bottom: 6px;
  letter-spacing: 2px;
}
.tw-nutri-serving-info {
  border-bottom: 2px solid #000000;
  padding-bottom: 4px;
  margin-bottom: 4px;
}
.tw-nutri-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 4px;
}
.tw-nutri-table th, .tw-nutri-table td {
  padding: 2px 0;
  text-align: right;
  font-weight: 500;
}
.tw-nutri-table th.col-name, .tw-nutri-table td.col-name {
  text-align: left;
}
.tw-nutri-table thead th {
  border-bottom: 2px solid #000000;
  font-size: 11px;
}
.tw-nutri-table tbody tr.main-row td {
  font-weight: 700;
}
.tw-nutri-table tbody tr.sub-row td.col-name {
  padding-left: 12px;
}
.tw-nutri-table tr.border-top td {
  border-top: 1px solid #000000;
}
.tw-nutri-footer {
  border-top: 2px solid #000000;
  font-size: 10px;
  margin-top: 6px;
  padding-top: 4px;
  line-height: 1.2;
}
</style>
<div class="tw-nutri-sticker">
  ${labelMarkup.replace(/taiwan-nutrition-label/g, 'tw-nutri-sticker').replace(/label-title/g, 'tw-nutri-title').replace(/label-serving-info/g, 'tw-nutri-serving-info').replace(/label-table/g, 'tw-nutri-table').replace(/label-footer/g, 'tw-nutri-footer')}
</div>
<!-- 台灣衛福部規範營養標示貼紙結束 -->
  `;

  navigator.clipboard.writeText(fullHtml.trim()).then(() => {
    showToast("已成功將 HTML 程式碼複製到剪貼簿！", "success");
  }).catch(() => {
    showToast("複製失敗，請手動複製", "error");
  });
}

// ----------------------------------------------------
// 分頁切換與 Mermaid 流程圖 Live 渲染核心函數
// ----------------------------------------------------
function switchTab(tabName) {
  const calcView = document.getElementById('calculatorView');
  const playView = document.getElementById('playgroundView');
  const calcBtn = document.getElementById('tabCalcBtn');
  const playBtn = document.getElementById('tabPlaygroundBtn');

  if (tabName === 'calc') {
    calcView.style.display = 'grid';
    playView.style.display = 'none';
    
    // 按鈕樣式切換
    calcBtn.classList.add('active');
    calcBtn.style.background = 'var(--bg-card)';
    calcBtn.style.color = 'var(--primary)';
    calcBtn.style.fontWeight = '600';
    
    playBtn.classList.remove('active');
    playBtn.style.background = 'transparent';
    playBtn.style.color = 'var(--text-secondary)';
    playBtn.style.fontWeight = '400';
  } else {
    calcView.style.display = 'none';
    playView.style.display = 'grid';
    
    // 按鈕樣式切換
    playBtn.classList.add('active');
    playBtn.style.background = 'var(--bg-card)';
    playBtn.style.color = 'var(--primary)';
    playBtn.style.fontWeight = '600';
    
    calcBtn.classList.remove('active');
    calcBtn.style.background = 'transparent';
    calcBtn.style.color = 'var(--text-secondary)';
    calcBtn.style.fontWeight = '400';
    
    // 當切換到 Playground 分頁時，觸發一次渲染以確保大小合適
    renderMermaidLive();
  }
}

async function renderMermaidLive() {
  const code = document.getElementById('mermaidCodeInput').value;
  const output = document.getElementById('mermaidRenderOutput');
  
  // 清空舊的 Mermaid 屬性以促使重新渲染
  output.removeAttribute('data-processed');
  output.innerHTML = code;
  
  try {
    if (window.mermaid) {
      await window.mermaid.run({
        nodes: [output]
      });
      // 成功渲染時微調 SVG 的寬度使其適配卡片
      const svg = output.querySelector('svg');
      if (svg) {
        svg.style.maxWidth = '100%';
        svg.style.height = 'auto';
      }
    }
  } catch (err) {
    console.error("Mermaid 渲染失敗: ", err);
    // 當文法出錯時，不直接當掉，顯示出錯資訊給使用者看
    output.innerHTML = `<div style="color: var(--danger); padding: 1rem; border: 1px dashed var(--danger); border-radius: 8px; width: 100%;">
      <i class="ri-error-warning-line"></i> <strong>Mermaid 語法錯誤：</strong><br>
      <code style="font-family: monospace; font-size: 0.8rem; display: block; margin-top: 0.5rem; white-space: pre-wrap;">${err.message || err}</code>
    </div>`;
  }
}
