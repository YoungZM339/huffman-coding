//
// Created by YoungZM on 2023/12/13.
//

#ifndef BACKEND_HUFFMAN_DECODING_H
#define BACKEND_HUFFMAN_DECODING_H

#include "huffman-tree.h"

std::string decompressData(const std::string &compressed_data, HuffmanNode *root);

std::string
decompressData(const std::string &compressed_data, const std::unordered_map<char, std::string> &encoding_table);

#endif //BACKEND_HUFFMAN_DECODING_H
