//
// Created by YoungZM on 2023/12/12.
//

#include "huffman-node.h"

HuffmanNode::HuffmanNode(int weight, char data) {
    this->weight = weight;
    this->data = data;
}

HuffmanNode::HuffmanNode(const HuffmanNode &node) {
    this->weight = node.weight;
    this->data = node.data;
}

HuffmanNode::~HuffmanNode() = default;

int HuffmanNode::getWeight() const {
    return this->weight;
}

char HuffmanNode::getData() const {
    return this->data;
}

void HuffmanNode::setWeight(int input_weight) {
    this->weight = input_weight;
}

void HuffmanNode::setData(char input_data) {
    this->data = input_data;
}

bool HuffmanNode::operator<(const HuffmanNode &node) const {
    return this->weight < node.weight;
}

bool HuffmanNode::operator>(const HuffmanNode &node) const {
    return this->weight > node.weight;
}

bool HuffmanNode::operator==(const HuffmanNode &node) const {
    return this->weight == node.weight;
}

bool HuffmanNode::operator!=(const HuffmanNode &node) const {
    return this->weight != node.weight;
}


HuffmanNode &HuffmanNode::operator=(const HuffmanNode &node) = default;
