# python3 -m venv .venv
# source .venv/bin/activate
# pip install pybase62
# python3 testebase62.py

import base62

number = 1115778567

#URL curta
encoded = base62.encode(number)
url = f"www.xico.com/{encoded}"
print("Base62:", url)

#URL original
decoded = base62.decode(encoded)
print("Decimal:", decoded)



