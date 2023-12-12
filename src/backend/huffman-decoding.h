//
// Created by YoungZM on 2023/12/11.
//

#ifndef HUFFMAN_DECODING_H
#define HUFFMAN_DECODING_H

#include "huffman-tree.h"


std::string getDecodingString(const std::string &str, const std::unordered_map<char, std::string> &encoding_table);

#endif //HUFFMAN_DECODING_H
