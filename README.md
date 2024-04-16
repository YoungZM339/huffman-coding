# Huffman-Coding

[![License](https://img.shields.io/github/license/youngzm339/huffman-coding)](https://github.com/youngzm339/huffman-coding/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/youngzm339/huffman-coding)](https://github.com/youngzm339/huffman-coding/issues)
[![Stars](https://img.shields.io/github/stars/youngzm339/huffman-coding)](https://github.com/youngzm339/huffman-coding)

![Data Visualization Dashboard for Website Scoring](/docs/imgs/Welcome.png)

README of supported languages: [English](/README.md) | [简体中文](/docs/README-zh_CN.md)

## Introduction

Huffman coding is a popular algorithm used for lossless data compression. It assigns variable-length codes to input characters, with shorter codes for more frequent characters, resulting in efficient compression.

This tool is developed based on Electron, React, and C++, allowing encoding and decoding of text using the Huffman algorithm while ensuring performance, software aesthetics, and user-friendliness, and providing visual rendering of the Huffman tree.

## Features

### Encoding

Waiting for user input or uploading a file to be encoded

![Encoding1](/docs/imgs/Encoding1.png)

Waiting for user confirmation to encode

![Encoding2](/docs/imgs/Encoding2.png)

Program returns the encoding result

![Encoding-success](/docs/imgs/Encoding-success.png)

### Decoding

Waiting for user input or uploading a file to be decoded

![Decoding1](/docs/imgs/Decoding1.png)

Waiting for user confirmation to decode

![Decoding2](/docs/imgs/Decoding2.png)

Program returns the decoding result

![Decoding-success](/docs/imgs/Decoding-success.png)

### HuffmanTreeVisualize

Waiting for user input or uploading the encoding table

![HuffmanTreeVisualize](/docs//imgs/HuffmanTreeVisualize.png)

Program returns the rendered Huffman tree

![HuffmanTreeVisualize-success](/docs//imgs/HuffmanTreeVisualize-success.png)

## Project Setup

### Install

```bash
$ npm install
```

### Build

```bash
# For Windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Development Guide

#### Tips

`src\backend` contains code for plugins written in C++, you need to set up the environment accordingly before development, please refer to "How to Write Plugins for Node.js Applications".

`src\renderer` contains code for the rendering process of the Electron application.

`src\main` contains code for the main process of the Electron application.

#### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Dev

```bash
$ npm run dev
```
