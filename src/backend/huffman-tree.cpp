//
// Created by YoungZM on 2023/12/13.
//

#include "huffman-tree.h"
#include "huffman-min-heap.h"
#include <unordered_map>

HuffmanNode *buildHuffmanTree(const std::unordered_map<char, int> &frequency_map) {
    MinHeap min_heap;

    for (const auto &single_map: frequency_map) {
        HuffmanNode *node = new HuffmanNode(single_map.first, single_map.second);
        min_heap.push(node);
    }

    while (min_heap.getSize() > 1) {
        HuffmanNode *leftNode = min_heap.top();
        min_heap.pop();
        HuffmanNode *rightNode = min_heap.top();
        min_heap.pop();

        HuffmanNode *newNode = new HuffmanNode('$', leftNode->frequency + rightNode->frequency);
        newNode->left = leftNode;
        newNode->right = rightNode;

        min_heap.push(newNode);
    }

    HuffmanNode *root = min_heap.top();
    return root;
}

void generatingEncodingTable(HuffmanNode *root, const std::string &code,
                             std::unordered_map<char, std::string> &encoding_table) {
    if (root == nullptr) {
        return;
    }

    if (root->left == nullptr && root->right == nullptr) {
        encoding_table[root->data] = code;
    }

    generatingEncodingTable(root->left, code + "0", encoding_table);
    generatingEncodingTable(root->right, code + "1", encoding_table);
}