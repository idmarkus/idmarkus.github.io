import cv2 as cv
import numpy as np
import os
import argparse

par = argparse.ArgumentParser()
par.add_argument("where")
args = par.parse_args()

imdir = args.where + "/img"
images = [f for f in os.listdir(imdir)]

outdir = args.where + "/resized"
os.makedirs(outdir, exist_ok=True)

for f in images:
    img = cv.imread(imdir + "/" + f)
    # img = cv.resize(img, None, fx=1/3, fy=1/3)
    newname = outdir + "/" + f[:-4] + ".jpg"
    cv.imwrite(newname, img)
