const fs = require('fs');

function cleanCsv(filePath, outputPath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split(/\r?\n/);
    const header = lines[0].split(',');
    
    const rows = lines.slice(1).filter(line => line.trim() !== '');
    
    const parseDate = (dateStr) => {
        if (!dateStr || dateStr.trim() === '') return '';
        dateStr = dateStr.trim();
        
        // Handle YYYYMMDD
        if (/^\d{8}$/.test(dateStr)) {
            return `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`;
        }
        
        // Try native Date parser
        const d = new Date(dateStr);
        if (!isNaN(d.getTime())) {
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${y}-${m}-${day}`;
        }
        
        return dateStr;
    };

    const cleanBatch = (batch) => {
        if (!batch || batch.trim() === '') return 'UNKNOWN';
        batch = batch.trim().toUpperCase().replace(/-/g, '');
        if (batch.startsWith('BATCH')) {
            return 'B' + batch.substring(5);
        }
        return batch;
    };

    const stageMap = { '項目1': 'A', '項目2': 'B', '項目3': 'C' };
    const cleanStage = (stage) => stageMap[stage] || stage;

    const cleanTemp = (tempStr) => {
        if (!tempStr || tempStr.trim() === '') return '';
        const match = tempStr.match(/([-+]?\d*\.?\d+)/);
        if (!match) return '';
        let val = parseFloat(match[1]);
        if (tempStr.toUpperCase().includes('F')) {
            val = (val - 32) * 5 / 9;
        }
        return val.toFixed(1);
    };

    const timeMap = { '下午': '14:00-16:00', '晚': '18:00-20:00' };
    const cleanTime = (time) => timeMap[time] || time;

    const cleanedRows = rows.map(line => {
        const parts = line.split(',');
        const date = parseDate(parts[0]);
        const batch = cleanBatch(parts[1]);
        const stage = cleanStage(parts[2]);
        const temp = cleanTemp(parts[3]);
        const time = cleanTime(parts[4]);
        return `${date},${batch},${stage},${temp},${time}`;
    });

    // Remove duplicates
    const uniqueRows = [...new Set(cleanedRows)];
    
    // Sort
    uniqueRows.sort();

    const result = [header.join(','), ...uniqueRows].join('\n');
    fs.writeFileSync(outputPath, '\ufeff' + result, 'utf8'); // Add BOM for Excel compatibility
    console.log(`Cleaned data saved to ${outputPath}`);
}

cleanCsv('PRD-011.csv', 'PRD-011_cleaned.csv');
