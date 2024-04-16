# 基于Electron和C++的哈夫曼编解码工具

[![License](https://img.shields.io/github/license/youngzm339/huffman-coding)](https://github.com/youngzm339/huffman-coding/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/youngzm339/huffman-coding)](https://github.com/youngzm339/huffman-coding/issues)
[![Stars](https://img.shields.io/github/stars/youngzm339/huffman-coding)](https://github.com/youngzm339/huffman-coding)

![Data Visualization Dashboard for Website Scoring](/docs/imgs/Welcome.png)

README of supported languages: [English](/README.md) | [简体中文](/docs/README-zh_CN.md)

## 简介

哈夫曼编码是一种常用的用于无损数据压缩的算法。它为输入字符分配可变长度的编码，对于频繁出现的字符使用更短的编码，从而实现高效的压缩。

这个工具基于Electron、React和C++开发，允许在保证性能和软件美观性和友好性的情况下使用哈夫曼算法对文本进行编码和解码，并提供哈夫曼树的可视化渲染。

## 特点

### 编码

等待用户输入或上传待编码文件

![编码1](/docs/imgs/Encoding1.png)

等待用户确认编码

![编码2](/docs/imgs/Encoding2.png)

程序返回编码结果

![编码成功](/docs/imgs/Encoding-success.png)

### 解码

等待用户输入或上传待解码文件

![解码1](/docs/imgs/Decoding1.png)

等待用户确认解码

![解码2](/docs/imgs/Decoding2.png)

程序返回解码结果

![解码成功](/docs/imgs/Decoding-success.png)

### 哈夫曼树可视化

等待用户输入或上传编码表

![哈夫曼树可视化](/docs//imgs/HuffmanTreeVisualize.png)

程序返回渲染的哈夫曼树

![哈夫曼树可视化成功](/docs//imgs/HuffmanTreeVisualize-success.png)

## 项目设置

### 安装

```bash
$ npm install
```

### 构建

```bash
# 对于Windows
$ npm run build:win

# 对于macOS
$ npm run build:mac

# 对于Linux
$ npm run build:linux
```

## 开发指南

#### 提示

`src\backend` 包含使用C++编写的插件的代码，您在开发之前需要安装相应的环境，具体请查阅"如何为Node.js应用编写插件"。

`src\renderer` 包含Electron应用的用于渲染进程的代码。

`src\main` 包含Electron应用的用于主进程的代码。

#### 推荐的IDE设置

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### 开发

```bash
$ npm run dev
```
