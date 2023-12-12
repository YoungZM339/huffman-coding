//
// Created by YoungZM on 2023/12/12.
//

#ifndef HEAP_H
#define HEAP_H

#include "huffman-node.h"

class MinHeap {
private:
    int size;
    int capacity;

    HuffmanNode *elements;

    static int getLeftChildIndex(int index);

    static int getRightChildIndex(int index);

    static int getParentIndex(int index);

    void init();

    void shiftUp(int start);

    void shiftDown(int start);


public:
    explicit MinHeap(int capacity);

    MinHeap(const MinHeap &heap);

    ~MinHeap();

    bool isEmpty() const;

    bool isFull() const;

    void push(const HuffmanNode &node);

    HuffmanNode peak() const;

    void pop();

    int getSize() const;
};

#endif //HEAP_H
