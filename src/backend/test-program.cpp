//
// Created by YoungZM on 2023/12/13.
//
//
#include <iostream>
#include "huffman-encoding.h"
#include "huffman-decoding.h"

int main() {
    std::string data = "hello huffman!";
    std::unordered_map<char, int> frequency_map;

    for (char c: data) {
        frequency_map[c]++;
    }

    HuffmanNode *root = buildHuffmanTree(frequency_map);

    std::unordered_map<char, std::string> huffman_table;
    generateEncodingTable(root, "", huffman_table);

    // 输出Huffman编码
    std::cout << "Huffman Codes:" << std::endl;
    std::cout << compressData(data, huffman_table) << std::endl;
    std::cout << "Huffman Codes:" << std::endl;
    std::cout << decompressData(compressData(data, huffman_table), root) << std::endl;
    std::cout << "Huffman Codes:" << std::endl;
    std::cout << decompressData(compressData(data, huffman_table), huffman_table) << std::endl;

}