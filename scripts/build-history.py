#!/usr/bin/env python3
"""Moyennes mensuelles de l'or (USD/oz troy) tirées du Pink Sheet de la Banque mondiale.

Usage : python3 scripts/build-history.py <CMO-Historical-Data-Monthly.xlsx>
Le fichier se télécharge sur https://www.worldbank.org/en/research/commodity-markets (lien
« Monthly prices »). Licence des données de la Banque mondiale : CC BY 4.0, source citée sur la page.
Écrit src/data/history-monthly.json : 120 derniers mois + moyennes annuelles depuis 2000.
"""
import json, sys, os, openpyxl
wb = openpyxl.load_workbook(sys.argv[1], read_only=True, data_only=True)
ws = wb['Monthly Prices']
rows = list(ws.iter_rows(values_only=True))
hdr = next(i for i, r in enumerate(rows[:10]) if r and 'Gold' in [str(c) for c in r])
col = [str(c) for c in rows[hdr]].index('Gold')
assert rows[hdr + 1][col] == '($/troy oz)', rows[hdr + 1][col]
updated = next(str(r[0]) for r in rows[:6] if r and r[0] and str(r[0]).startswith('Updated'))
series = [(r[0], float(r[col])) for r in rows[hdr + 2:] if r and r[0] and isinstance(r[col], (int, float))]
months = [{'m': f'{m[:4]}-{m[5:7]}', 'usd': round(v, 2)} for m, v in series][-120:]
years = {}
for m, v in series:
    years.setdefault(int(m[:4]), []).append(v)
annual = [{'y': y, 'usd': round(sum(v) / len(v), 2), 'n': len(v)} for y, v in sorted(years.items()) if y >= 2000]
out = {'source': 'World Bank Commodity Price Data (The Pink Sheet), monthly, Gold ($/troy oz)', 'updated': updated.replace('Updated on ', ''), 'months': months, 'annual': annual}
p = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'history-monthly.json')
json.dump(out, open(p, 'w'), indent=0)
print(f"{len(months)} mois, dernier {months[-1]}, {updated}")
