# Broadbean

hexo主题  

## 安装  

1 将broadbean文件夹放在hexo根目录下"themes"文件夹中      
2 将source文件夹中的文件放在hexo根目录下"source"文件夹中  
3 打开根目录下"\_config.yml",修改"theme"项为:  
```
theme: broadbean
```
4 清除hexo缓存   
```
hexo clean
```

## 启用本地搜索
安装 hexo-generator-search  
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

