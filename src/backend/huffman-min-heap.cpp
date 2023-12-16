//
// Created by YoungZM on 2023/12/15.
//

#include "huffman-min-heap.h"
#include <stdexcept>

MinHeap::MinHeap() {
    this->size = 0;
}

MinHeap::~MinHeap() {
    for (int i = 0; i < this->size; i++) {
        delete this->elements[i];
    }
}

MinHeap::MinHeap(const MinHeap &heap) {
    this->size = heap.size;
    for (int i = 0; i < this->size; i++) {
        this->elements[i] = new HuffmanNode(*heap.elements[i]);
    }
}

void MinHeap::pop() {
    if (isEmpty()) {
        throw std::out_of_range("Heap is empty");
    } else {
        elements[0] = elements[size - 1];
        elements[size - 1] = nullptr;
        size--;
        shift_down(0);
    }
}

void MinHeap::push(HuffmanNode *node) {
    if (isFull()) {
        throw std::out_of_range("Heap is full");
    } else {
        elements[size] = node;
        shift_up(size);
        size++;
    }
}

HuffmanNode *MinHeap::top() {
    if (isEmpty()) {
        throw std::out_of_range("Heap is empty");
    } else {
        return elements[0];
    }
}

int MinHeap::getSize() const {
    return size;
}

bool MinHeap::isEmpty() const {
    return size == 0;
}

bool MinHeap::isFull() const {
    return size == MAX_MIN_HEAP_SIZE;
}

void MinHeap::shift_up(int index) {
    if (index <= 0) {
        return;
    }
    int parent_index = get_parent_index(index);
    if (elements[parent_index]->frequency > elements[index]->frequency) {
        HuffmanNode *temp = elements[parent_index];
        elements[parent_index] = elements[index];
        elements[index] = temp;
        shift_up(parent_index);
    }
}

void MinHeap::shift_down(int index) {
    int left_child_index = get_left_child_index(index);
    int right_child_index = get_right_child_index(index);
    int min_index = index;
    if (left_child_index < size && elements[left_child_index]->frequency < elements[min_index]->frequency) {
        min_index = left_child_index;
    }
    if (right_child_index < size && elements[right_child_index]->frequency < elements[min_index]->frequency) {
        min_index = right_child_index;
    }
    if (min_index != index) {
        HuffmanNode *temp = elements[min_index];
        elements[min_index] = elements[index];
        elements[index] = temp;
        shift_down(min_index);
    }
}

int MinHeap::get_parent_index(int index) {
    return (index - 1) / 2;
}

int MinHeap::get_left_child_index(int index) {
    return index * 2 + 1;
}

int MinHeap::get_right_child_index(int index) {
    return index * 2 + 2;
}