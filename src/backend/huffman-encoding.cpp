//
// Created by YoungZM on 2023/12/13.
//

#include "huffman-encoding.h"

std::string compressData(const std::string &original_data, const std::unordered_map<char, std::string> &encoding_table) {
    std::string compressed_data = "";

    for (char c: original_data) {
        compressed_data += encoding_table.at(c);
    }

    return compressed_data;
}