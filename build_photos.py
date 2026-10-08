# Mengunduh foto Commons (lisensi bebas, lihat README) dan memperkecil ke maks. 1024 px.
import os,time,io,urllib.request
from PIL import Image
os.makedirs('photos',exist_ok=True)
UA={'User-Agent':'itinerary-mockup-build/1.0 (https://github.com/hendrypangg12/itinerary-mockup)'}
fails=[]
for line in open('photos.tsv'):
    local,a,b=line.rstrip('\n').split('\t')
    if os.path.exists('photos/'+local): continue
    ok=False
    for att in range(5):
        for url in (a,b):
            try:
                d=urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout=60).read()
                im=Image.open(io.BytesIO(d)).convert('RGB'); im.thumbnail((1024,1024))
                im.save('photos/'+local,'JPEG',quality=80,optimize=True,progressive=True); ok=True; break
            except Exception as e: print(local,url[:80],e)
        if ok: break
        time.sleep(10*(att+1))
    if not ok: fails.append(local)
    time.sleep(1)
print('OK',len(os.listdir('photos')),'FAILED',fails)
