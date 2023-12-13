//
// Created by YoungZM on 2023/12/13.
//

#include "huffman-tree.h"
#include <iostream>
#include <queue>
#include <unordered_map>

using namespace std;

HuffmanNode *buildHuffmanTree(const std::unordered_map<char, int> &freqMap) {
    priority_queue<HuffmanNode *, vector<HuffmanNode *>, Compare> minHeap;

    for (const auto &entry: freqMap) {
        HuffmanNode *node = new HuffmanNode(entry.first, entry.second);
        minHeap.push(node);
    }

    while (minHeap.size() > 1) {
        HuffmanNode *leftNode = minHeap.top();
        minHeap.pop();
        HuffmanNode *rightNode = minHeap.top();
        minHeap.pop();

        HuffmanNode *newNode = new HuffmanNode('$', leftNode->frequency + rightNode->frequency);
        newNode->left = leftNode;
        newNode->right = rightNode;

        minHeap.push(newNode);
    }

    return minHeap.top();
}

void generateEncodingTable(HuffmanNode *root, const std::string& code, std::unordered_map<char, std::string> &encoding_table) {
    if (root == nullptr) {
        return;
    }

    if (root->left == nullptr && root->right == nullptr) {
        encoding_table[root->data] = code;
    }

    generateEncodingTable(root->left, code + "0", encoding_table);
    generateEncodingTable(root->right, code + "1", encoding_table);
}
