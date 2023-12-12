//
// Created by YoungZM on 2023/12/12.
//

#ifndef BACKEND_HUFFMAN_NODE_H
#define BACKEND_HUFFMAN_NODE_H

class HuffmanNode {
private:
    int weight;
    char data;
public:
    explicit HuffmanNode(int weight = 0, char data = '\0');

    HuffmanNode(const HuffmanNode &node);

    ~HuffmanNode();

    int getWeight() const;

    char getData() const;

    void setWeight(int input_weight);

    void setData(char input_data);

    bool operator<(const HuffmanNode &node) const;

    bool operator>(const HuffmanNode &node) const;

    bool operator==(const HuffmanNode &node) const;

    bool operator!=(const HuffmanNode &node) const;

    HuffmanNode &operator=(const HuffmanNode &node);

    friend class MinHeap;

    friend class HuffmanTree;

};

#endif //BACKEND_HUFFMAN_NODE_H
