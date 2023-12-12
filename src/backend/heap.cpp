//
// Created by YoungZM on 2023/12/12.
//

#include "heap.h"
#include <stdexcept>

MinHeap::MinHeap(int capacity) {
    this->size = 0;
    this->capacity = capacity;
    this->elements = new Node[capacity];
}

MinHeap::MinHeap(const MinHeap &heap) {
    this->size = heap.size;
    this->capacity = heap.capacity;
    this->elements = new Node[capacity];
    for (int i = 0; i < size; i++) {
        this->elements[i] = heap.elements[i];
    }
}

MinHeap::~MinHeap() {
    delete[] elements;
}

int MinHeap::getLeftChildIndex(int index) {
    return 2 * index + 1;
}

int MinHeap::getRightChildIndex(int index) {
    return 2 * index + 2;
}

int MinHeap::getParentIndex(int index) {
    return (index - 1) / 2;
}

void MinHeap::shiftUp(int start) {
    int parent = getParentIndex(start);
    Node temp = elements[start];
    while (start > 0) {
        if (elements[parent] < temp) {
            break;
        } else {
            elements[start] = elements[parent];
            start = parent;
            parent = getParentIndex(start);
        }
    }
    elements[start] = temp;
}

void MinHeap::shiftDown(int start) {
    int left = getLeftChildIndex(start);
    int right = getRightChildIndex(start);
    int smallest = start;
    if (left < size && elements[left] < elements[smallest]) {
        smallest = left;
    }
    if (right < size && elements[right] < elements[smallest]) {
        smallest = right;
    }
    if (smallest != start) {
        Node temp = elements[start];
        elements[start] = elements[smallest];
        elements[smallest] = temp;
        shiftDown(smallest);
    }
}

void MinHeap::init() {
    for (int i = (size - 2) / 2; i >= 0; i--) {
        shiftDown(i);
    }
}

bool MinHeap::isFull() const {
    return size == capacity;
}

bool MinHeap::isEmpty() const {
    return size == 0;
}


void MinHeap::push(const Node &node) {
    if (isFull()) {
        throw std::out_of_range("Heap is full!");
    }
    elements[size] = node;
    shiftUp(size);
    size++;
}

Node MinHeap::peak() const {
    if (isEmpty()) {
        throw std::out_of_range("Heap is empty!");
    }
    return elements[0];
}

void MinHeap::pop() {
    if (isEmpty()) {
        throw std::out_of_range("Heap is empty!");
    }
    elements[0] = elements[size - 1];
    size--;
    shiftDown(0);
}

