//
// Created by YoungZM on 2023/12/12.
//

#include "element-node.h"

Node::Node(int weight, char data) {
    this->weight = weight;
    this->data = data;
}

Node::Node(const Node &node) {
    this->weight = node.weight;
    this->data = node.data;
}

Node::~Node() = default;

int Node::getWeight() const {
    return this->weight;
}

char Node::getData() const {
    return this->data;
}

void Node::setWeight(int input_weight) {
    this->weight = input_weight;
}

void Node::setData(char input_data) {
    this->data = input_data;
}

bool Node::operator<(const Node &node) const {
    return this->weight < node.weight;
}

bool Node::operator>(const Node &node) const {
    return this->weight > node.weight;
}

bool Node::operator==(const Node &node) const {
    return this->weight == node.weight;
}

bool Node::operator!=(const Node &node) const {
    return this->weight != node.weight;
}

Node &Node::operator=(const Node &node) = default;
