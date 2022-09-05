# 低代码引擎


## 目录结构

```
📦src
 ┣ 📂static
 ┃ ┣ 📂image
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂redux （低代码引擎的状态管理）
 ┃ ┃ ┣ 📂tools
 ┃ ┃ ┣ 📂widget
 ┃ ┃ ┃ ┣ 📂Edit （存储编辑物料的组件，和低代码引擎的状态管理打通）
 ┃ ┃ ┃ ┣ 📂Material （存储物料）
 ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┗ 📜index.jsx
```

## 物料规范

每个物料都应该export出以下字段

* `name`：组件名称（中文）
* `icon`：组件图标
* `component`
* [`plots`] - `Object`
* `editProps`
* `type`：组件类型
* [`setValue`] - `func`：对于`dataEntry`类型的数据，不同的组件抛出的数据格式不同，我们可以用这个函数进行数据的规格化处理，去除差异化。该函数返回一个对象，对象内存储要抛出的值
