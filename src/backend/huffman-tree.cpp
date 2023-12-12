//
// Created by YoungZM on 2023/12/11.
//

#include <stdexcept>
#include "huffman-tree.h"

HuffmanTree::HuffmanTree() {
    root = nullptr;
    left_child = nullptr;
    right_child = nullptr;
}


HuffmanTree::HuffmanTree(const HuffmanNode &node) {
    root = new HuffmanNode(node);
    left_child = nullptr;
    right_child = nullptr;
}

HuffmanTree::~HuffmanTree() {
    delete root;
    delete left_child;
    delete right_child;
}

void HuffmanTree::buildTree(MinHeap &heap) {
    if (heap.isEmpty()) {
        throw std::runtime_error("Heap is empty!");
    }
    while (heap.getSize() > 1) {
        left_child = new HuffmanTree(heap.peak());
        heap.pop();
        right_child = new HuffmanTree(heap.peak());
        heap.pop();
        root = new HuffmanNode(left_child->root->getWeight() + right_child->root->getWeight(), '\0');
        heap.push(*root);
    }
    root = new HuffmanNode(heap.peak());
    heap.pop();
}

HuffmanTree::HuffmanTree(MinHeap &heap) {
    root = nullptr;
    left_child = nullptr;
    right_child = nullptr;
    buildTree(heap);
}

void HuffmanTree::generateCodes(const std::string &code, std::unordered_map<char, std::string> &encoding_table) {
    if (left_child == nullptr && right_child == nullptr) {
        encoding_table[root->getData()] = code;
    } else {
        left_child->generateCodes(code + '0', encoding_table);
        right_child->generateCodes(code + '1', encoding_table);
    }

}

std::unordered_map<char, std::string> HuffmanTree::getLeafNodeCodes() {
    std::unordered_map<char, std::string> encoding_table;
    if (root != nullptr) {
        generateCodes("", encoding_table);
    } else {
        throw std::runtime_error("Tree is empty!");
    }
    return encoding_table;
}

