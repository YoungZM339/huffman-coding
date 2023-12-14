//
// Created by YoungZM on 2023/12/13.
//

#include "huffman-encoding.h"

std::string
compressData(const std::string &original_data, const std::unordered_map<char, std::string> &encoding_table) {
    std::string compressed_data = "";

    for (char c: original_data) {
        compressed_data += encoding_table.at(c);
    }

    return compressed_data;
}

std::unordered_map<char, std::string> getEncodingTable(const std::string &original_data) {
    std::unordered_map<char, int> frequency_map;

    for (char single_char: original_data) {
        frequency_map[single_char]++;
    }

    HuffmanNode *root = buildHuffmanTree(frequency_map);

    std::unordered_map<char, std::string> huffman_table;
    generatingEncodingTable(root, "", huffman_table);

    return huffman_table;
}
