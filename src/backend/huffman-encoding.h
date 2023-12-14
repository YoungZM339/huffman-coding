//
// Created by YoungZM on 2023/12/13.
//

#ifndef BACKEND_HUFFMAN_ENCODING_H
#define BACKEND_HUFFMAN_ENCODING_H

#include "huffman-tree.h"

std::string compressData(const std::string &original_data, const std::unordered_map<char, std::string> &encoding_table);

std::unordered_map<char, std::string> getEncodingTable(const std::string &original_data);

#endif //BACKEND_HUFFMAN_ENCODING_H
