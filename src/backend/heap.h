//
// Created by YoungZM on 2023/12/12.
//

#ifndef HEAP_H
#define HEAP_H

#include "element-node.h"

class MinHeap {
private:
    int size;
    int capacity;

    Node *elements;

    static int getLeftChildIndex(int index);

    static int getRightChildIndex(int index);

    static int getParentIndex(int index);

    void shiftUp(int start);

    void shiftDown(int start);


public:
    MinHeap(int capacity);

    MinHeap(const MinHeap &heap);

    ~MinHeap();

    void init();

    bool isEmpty() const;

    bool isFull() const;

    void push(const Node &node);

    Node peak() const;

    void pop();

    friend class HuffmanTree;


};

#endif //HEAP_H
