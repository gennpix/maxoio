#!/bin/bash
# 临时方案，等以后搞清楚怎么用 bundlerConfig.WebpackConfiguration 以后再改
curdir=$(
    cd "$(dirname "$0")" || exit
    pwd
)
for f in $(find ${curdir}/docs/.vuepress/dist -name "*.html"); do
    sed "s/\"\/assets/\"https:\/\/cdn.jsdelivr.net\/gh\/gennpix\/maxoio@gh-pages\/assets/g" $f >tfile && mv tfile $f
done
