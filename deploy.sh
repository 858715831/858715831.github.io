#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:858715831/858715831.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://858715831:${GITHUB_TOKEN}@github.com/858715831/858715831.github.io.git
  git config --global user.name "858715831"
  git config --global user.email "858715831@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl HEAD:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist
