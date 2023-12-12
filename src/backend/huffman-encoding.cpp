//
// Created by YoungZM on 2023/12/11.
//

#include "huffman-encoding.h"

std::unordered_map<char, std::string> getEncodingTable(const std::string &str) {
    std::unordered_map<char, int> char_counts;
    for (char single_char: str) {
        char_counts[single_char]++;
    }

    MinHeap heap((int) char_counts.size() * 2);
    for (char single_char: str) {
        HuffmanNode node(char_counts[single_char], single_char);
        heap.push(node);
    }

    HuffmanTree tree;
    tree.buildTree(heap);

    std::unordered_map<char, std::string> encoding_table = tree.getLeafNodeCodes();
    return encoding_table;
}

std::string getEncodingString(const std::string &str) {
    std::unordered_map<char, std::string> encoding_table = getEncodingTable(str);
    std::string encoding_string;
    for (char single_char: str) {
        encoding_string += encoding_table[single_char];
    }
    return encoding_string;
}