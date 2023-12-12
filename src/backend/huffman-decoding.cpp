//
// Created by YoungZM on 2023/12/11.
//

#include "huffman-decoding.h"

std::string getDecodingString(const std::string &str, const std::unordered_map<char, std::string> &encoding_table) {
    std::string decoding_string;
    std::string current_code;

    for (char c: str) {
        current_code += c;
        for (const auto &pair: encoding_table) {
            if (pair.second == current_code) {
                decoding_string += pair.first;
                current_code.clear();
                break;
            }
        }
    }

    return decoding_string;
}