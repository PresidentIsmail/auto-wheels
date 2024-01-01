#!/bin/bash

mkdir -p webp

for file in *.jpg; do
  ffmpeg -i "$file" -pix_fmt yuv420p "webp/$(basename "$file" .jpg).webp"
done
