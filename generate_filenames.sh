#!/bin/bash

output_file="media/sharing/filelist.txt"
> "$output_file"  # Clear file

for album_dir in media/sharing/*/; do
  album_name=$(basename "$album_dir")
  for file in "$album_dir"*; do
    if [[ -f "$file" ]]; then
      filename=$(basename "$file")
      echo "${album_name}/${filename}" >> "$output_file"
    fi
  done
done

echo "File list generated at $output_file"
