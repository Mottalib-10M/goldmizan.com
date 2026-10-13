#!/usr/bin/env python3
"""Régénère public/llms.txt depuis dist/ (lancer après npm run build, puis rebuild)."""
import re, glob, os
os.chdir(os.path.join(os.path.dirname(__file__), '..'))
head = open('public/llms.txt').read().split('## Pages')[0]
lines = [head.rstrip() + '\n', '## Pages']
for lang in ('ar', 'en'):
    for f in sorted(glob.glob(f'dist/{lang}/**/index.html', recursive=True)):
        d = open(f).read()
        if 'noindex' in d: continue
        t = re.search(r'<title>(.*?)</title>', d).group(1)
        c = re.search(r'rel="canonical" href="([^"]+)"', d).group(1)
        lines.append(f'- [{t}]({c})')
open('public/llms.txt', 'w').write('\n'.join(lines) + '\n')
print(len(lines) - 2, 'pages')
