# Component Template

此模組是生成套件的框架，請依照以下方式。

* [Step 1 - 安裝模組](#step-1---安裝模組)
* [Step 2 - 修改`package.json`](#step-2---修改packagejson)
* [Step 3 - 修改Demo HTML的Title](#step-3---修改demo-html的title)
* [Step 4 - 修改、新增Compoent](#step-4---修改新增compoent)
  * [`./src/index.js`](#srcindexjs)
  * [`./src/components/Demo.js`](#srccomponentsdemojs)
* [Styles](#styles)
* [更改host與port](#更改host與port)
* [Script](#script)
* [Github Demo頁面設定](#github-demo頁面設定)
  * [Demo頁面網址](#demo頁面網址)
* [NPM](#npm)
  * [發布至NPM](#發布至npm)
    * [登入npm帳號](#登入npm帳號)
    * [發布](#發布)
  * [安裝](#安裝)

## Step 1 - 安裝模組

```cmd
npm i
```

## Step 2 - 修改`package.json`

請修正以下項目 (括號為範例)

```json
{
  "name": "套件名稱 (component-template)",
  "version": "版本 (0.0.1)",
  "description": "套件說明",
  "repository": {
    "type": "git",
    "url": "Git網址 (https://github.com/whlshy/component-template.git)"
  },
  "author": "作者 (WHL)",
  "keywords": [
    "可以",
    "輸入",
    "你要的",
    "關鍵字",
    "例如 (react)"
  ],
  ...
}
```

## Step 3 - 修改Demo HTML的Title

`./src/www/index.html`：

```html
<!DOCTYPE html>
<html>
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{"請輸入Title (Component Template - WHL)"}</title>
</head>

<body>
    <div id="root"></div>
</body>

</html>
```

## Step 4 - 修改、新增Compoent

Component的存放路徑都集中在`./src/components`，如需要新增或修改compoent請集中於此。

原Component入口為`./src/components/Tabs.js`，可自行刪除檔案或修改檔案名稱與內容。

### `./src/index.js`

更改後修正`./src/index.js`的套件引入路徑與輸出名稱：

```js
import ChromeTabs from './components/Tabs'
export default ChromeTabs
```

### `./src/components/Demo.js`

此為展示與開發頁面的測試Component，可以從這裡引入開發Component來呈現。

範例：

```jsx
import React from 'react'
import Tabs from './Tabs'

export default function Demo(props) {
  return (
    <Tabs />
  )
}
```

## Styles

`css`、`styl`均存放在`./src/styles`，需使用時直接在component引入即可。

範例：

```jsx
import '../styles/Demo.css'
```

## 更改`host`與`port`

`./webpack.dev.js`：

```js
devServer: {
  host: "localhost", // 可以改成網址 (10.xx.xx.xx)
  port: 7777, // 更改port e.g. 8888
},
```

## Script

- `npm start`
  開發用
- `npm build`
  發布前須先執行build
- `npm web`
  如需展示在github請執行這個指令後再發布

## Github Demo頁面設定

> Settings -> Page -> Branch

選擇分支 (main) 把資料夾設定成`docs`後按下儲存 (Save)

### Demo頁面網址

```cmd
https://{account}.github.io/{Repository}/
```

[範例](https://whlshy.github.io/component-template/)：

```cmd
https://whlshy.github.io/component-template/
```

## NPM

### 發布至NPM

> 發布前須先申請NPM帳號

#### 登入npm帳號

```cmd
npm adduser
```

#### 發布

> 更新版本同時也記得修改`package.json`中的`version`喔！

```cmd
npm publish
```

### 安裝

```cmd
npm i 你的模組名稱@version --save
```

範例：

```cmd
npm i react-chrome-tabs@2.0.1 --save
```

---

Made by [WHL](https://github.com/whlshy)
