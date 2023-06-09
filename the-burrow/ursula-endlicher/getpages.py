import urllib.request
import os

# url = "http://www.ursenal.net/inputfieldsforever/inputfieldsforeverOBJECTS/Roots/roots{}.html"
# outdir = "pages"

# os.makedirs(outdir, exist_ok=True)
# for i in range(1, 52):
#     urllib.request.urlretrieve(url.format(i), "{}/roots{}.html".format(outdir, i))

import re
dataurl = "http://www.ursenal.net/inputfieldsforever/inputfieldsforeverOBJECTS/Roots/img2/"
outdir = "pages/img2"

exp = re.compile(r'<a href="([A-Za-z0-9\.\-_]+)">')
links = []
with urllib.request.urlopen(dataurl) as response:
    data = response.read().decode('utf-8')
    links = exp.findall(data)
    print(links)

os.makedirs(outdir, exist_ok=True)

for link in links:
    urllib.request.urlretrieve(dataurl + link, "{}/{}".format(outdir, link))
