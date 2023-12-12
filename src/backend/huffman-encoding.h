//
// Created by YoungZM on 2023/12/11.
//

#ifndef HUFFMAN_ENCODING_H
#define HUFFMAN_ENCODING_H

#include "huffman-tree.h"

std::unordered_map<char, std::string> getEncodingTable(const std::string &str);

std::string getEncodingString(const std::string &str);

#endif //HUFFMAN_ENCODING_H
