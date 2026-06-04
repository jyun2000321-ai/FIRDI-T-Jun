# 加工溫度履歷監控系統 (Processing Temperature History Monitoring System)

這是一個針對生產加工溫度數據進行「清洗、判讀、視覺化」的一站式管理專案。

## 📌 專案簡介
本專案將混亂的原始生產數據 (`PRD-011.csv`) 進行標準化處理，並建立了一個互動式的儀表板網頁。管理者可以透過階層式的介面，快速切換不同製程段 (A/B/C)，並自動判別溫度是否符合法規標準。

## 🚀 核心功能
1. **數據標準化**：自動處理日期格式、批號命名規範、溫度單位換算 (F轉C)。
2. **階層化儀表板**：
   - 第一層：製程段分類概況 (Summary Cards)。
   - 第二層：各批號詳細溫度履歷 (Drill-down Table)。
3. **自動合規判讀**：
   - **合規範圍**：2.0°C - 7.0°C。
   - **即時警示**：超標數據自動標記 ⚠️ 圖示並以紅色醒目顯示。
4. **製程流向整合**：網頁整合了生產流程圖，便於對照加工階段。

## 📁 檔案說明
- `dashboard_v2.html`：**主要入口**，階層化互動儀表板。
- `visual selection.png`：製程參考流程圖。
- `PRD-011_cleaned.csv`：整理後的標準化數據庫。
- `clean_data.js`：用於處理原始 CSV 數據的 Node.js 工具程式。

## 💻 使用方式
1. 將此倉庫 (Repository) 下載或 Clone 到本地。
2. 使用任何瀏覽器（如 Chrome, Edge）直接開啟 `dashboard_v2.html` 即可使用。
3. 如果您上傳到 GitHub，可透過 **GitHub Pages** 功能將 `dashboard_v2.html` 發佈為在線網頁。

## 🛠 技術棧
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS), Mermaid.js
- **Data Processing**: Node.js / Python
- **Documentation**: Markdown
