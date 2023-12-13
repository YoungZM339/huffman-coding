//
// Created by YoungZM on 2023/12/13.
//

#include "huffman-decoding.h"

std::string decompressData(const std::string &compressed_data, HuffmanNode *root) {
    std::string decompressed_data = "";
    HuffmanNode *current = root;

    for (char c: compressed_data) {
        if (c == '0') {
            current = current->left;
        } else {
            current = current->right;
        }

        if (current->left == nullptr && current->right == nullptr) {
            decompressed_data += current->data;
            current = root;
        }
    }

    return decompressed_data;
}
std::string decompressData(const std::string &compressed_data, const std::unordered_map<char, std::string> &encoding_table) {
    std::string decompressed_data;
    std::string current_code;

    for (char c: compressed_data) {
        current_code += c;
        for (const auto &pair: encoding_table) {
            if (pair.second == current_code) {
                decompressed_data += pair.first;
                current_code.clear();
                break;
            }
        }
    }

    return decompressed_data;
}