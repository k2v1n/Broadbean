# Broadbean

Hexo主题  

## 安装  

1 将"broadbean"放在Hexo根目录下"themes"文件夹中    
2 将"source"中的文件夹("categories"和"tags")放在Hexo根目录下"source"文件夹中  
3 打开根目录下"\_config.yml",修改"theme"项为:  
```
theme: broadbean
```
4 清除hexo缓存   
```
hexo clean
```

## 启用本地搜索
安装hexo-generator-search  
```
npm install hexo-generator-search --save
```
打开根目录下"\_config.yml",填入:  
```
search:
  path: search.xml
  field: post
```
打开themes目录下"\_config.yml",修改"local_search"项为:   
```
local_search: true
```
