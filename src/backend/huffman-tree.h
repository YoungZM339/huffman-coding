//
// Created by YoungZM on 2023/12/11.
//

#ifndef HUFFMAN_TREE_H
#define HUFFMAN_TREE_H

#include <unordered_map>
#include <string>
#include "huffman-node.h"
#include "min-heap.h"

class HuffmanTree {
private:
    HuffmanNode *root;
    HuffmanTree *left_child, *right_child;
public:
    HuffmanTree();

    explicit HuffmanTree(const HuffmanNode &);

    HuffmanTree(MinHeap &heap);

    ~HuffmanTree();

    void buildTree(MinHeap &heap);

    void generateCodes(const std::string &code, std::unordered_map<char, std::string> &encoding_table);

    std::unordered_map<char, std::string> getLeafNodeCodes();
};

#endif //HUFFMAN_TREE_H
