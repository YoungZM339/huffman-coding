//
// Created by YoungZM on 2023/12/12.
//

#ifndef BACKEND_ELEMENT_NODE_H
#define BACKEND_ELEMENT_NODE_H

class Node {
private:
    int weight;
    char data;
public:
    explicit Node(int weight = 0, char data = '\0');

    Node(const Node &node);

    ~Node();

    int getWeight() const;

    char getData() const;

    void setWeight(int input_weight);

    void setData(char input_data);

    bool operator<(const Node &node) const;

    bool operator>(const Node &node) const;

    bool operator==(const Node &node) const;

    bool operator!=(const Node &node) const;

    Node &operator=(const Node &node);

    friend class MinHeap;

    friend class HuffmanTree;
};

#endif //BACKEND_ELEMENT_NODE_H
