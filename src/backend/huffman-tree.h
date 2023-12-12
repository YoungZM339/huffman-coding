//
// Created by YoungZM on 2023/12/11.
//

#ifndef HUFFMAN_TREE_H
#define HUFFMAN_TREE_H

class HuffmanTree{
private:
    struct Node{
        int weight;
        int parent, lchild, rchild;
    };
    Node *elem;
    int length;
    void select(int end, int &s1, int &s2);
    void print(int i);
    void destroy(int i);

public:
    HuffmanTree();
    ~HuffmanTree();
    void createTree(int *weight, int n);
    void encoding();
    void decoding();
    void print();};
#endif //HUFFMAN_TREE_H
