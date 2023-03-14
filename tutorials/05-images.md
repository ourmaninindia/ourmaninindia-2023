# Images
for file in *.jpg ; do cwebp -q 50 "$file" -o "${file%.jpg}.webp"; done