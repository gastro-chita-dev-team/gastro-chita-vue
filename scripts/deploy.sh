#!/usr/bin/env sh
repo="gastro-chita-vue"
dir="dist"
autor="gastro-chita-dev-team"

# STOP error
set -e

npm run build
cd $dir

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:$autor/$autor.github.io.git master
git push -f git@github.com:$autor/$repo.git master:gh-pages

cd ..
rm -rf $dir
