//
// Created by YoungZM on 2023/12/11.
//

#include "huffman-tree.h"
Huffman::Huffman() {
    root = nullptr;
}
Huffman::~Huffman() {
    delete root;
}