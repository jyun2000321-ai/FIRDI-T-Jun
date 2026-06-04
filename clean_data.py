import pandas as pd
import numpy as np
import re
from datetime import datetime

def clean_csv(file_path, output_path):
    # Read the CSV
    df = pd.read_csv(file_path)
    
    # 1. Standardize Date
    def parse_date(date_str):
        if pd.isna(date_str) or str(date_str).strip() == '':
            return None
        date_str = str(date_str).strip()
        formats = ['%Y%m%d', '%d %b %Y', '%Y/%m/%d', '%Y-%m-%d', '%Y/%n/%j']
        for fmt in formats:
            try:
                return datetime.strptime(date_str, fmt).strftime('%Y-%m-%d')
            except ValueError:
                continue
        # Try some manual fixes for single digit month/day
        try:
            return pd.to_datetime(date_str).strftime('%Y-%m-%d')
        except:
            return date_str

    df['日期'] = df['日期'].apply(parse_date)

    # 2. Standardize Batch Number (批號)
    def clean_batch(batch):
        if pd.isna(batch) or str(batch).strip() == '':
            return 'UNKNOWN'
        batch = str(batch).upper().replace('-', '')
        if batch.startswith('BATCH'):
            return 'B' + batch[5:]
        return batch

    df['批號'] = df['批號'].apply(clean_batch)

    # 3. Standardize Process Stage (製程段)
    # Mapping 項目1->A, 項目2->B, 項目3->C (Assuming this mapping based on general patterns)
    stage_map = {'項目1': 'A', '項目2': 'B', '項目3': 'C'}
    df['製程段'] = df['製程段'].replace(stage_map)

    # 4. Standardize Temperature (溫度) to Celsius
    def clean_temp(temp_str):
        if pd.isna(temp_str) or str(temp_str).strip() == '':
            return None
        temp_str = str(temp_str).upper()
        match = re.search(r'([-+]?\d*\.?\d+)', temp_str)
        if not match:
            return None
        val = float(match.group(1))
        if '°F' in temp_str or 'F' in temp_str:
            return round((val - 32) * 5 / 9, 1)
        return round(val, 1)

    df['溫度(°C)'] = df['溫度'].apply(clean_temp)
    df = df.drop(columns=['溫度'])

    # 5. Standardize Time Period (時段)
    # Mapping '下午' to '14:00-16:00', '晚' to '18:00-20:00' (Estimated)
    time_map = {'下午': '14:00-16:00', '晚': '18:00-20:00'}
    df['時段'] = df['時段'].replace(time_map)

    # 6. Remove Duplicates
    df = df.drop_duplicates()

    # 7. Final Polish
    # Sort by Date and Batch
    df = df.sort_values(by=['日期', '批號'])

    # Save to new CSV
    df.to_csv(output_path, index=False, encoding='utf-8-sig')
    print(f"Cleaned data saved to {output_path}")

if __name__ == "__main__":
    clean_csv('PRD-011.csv', 'PRD-011_cleaned.csv')
