//
// Created by YoungZM on 2023/12/12.
//

#include "huffman-encoding.h"
#include "huffman-decoding.h"
#include <iostream>

void testHuffmanNode() {
    // Test default constructor
    HuffmanNode node1;
    std::cout << "Default constructor - Weight: " << node1.getWeight() << ", Data: " << node1.getData() << std::endl;

    // Test parameterized constructor
    HuffmanNode node2(5, 'A');
    std::cout << "Parameterized constructor - Weight: " << node2.getWeight() << ", Data: " << node2.getData()
              << std::endl;

    // Test copy constructor
    HuffmanNode node3 = node2;
    std::cout << "Copy constructor - Weight: " << node3.getWeight() << ", Data: " << node3.getData() << std::endl;

    // Test setter methods
    node1.setWeight(10);
    node1.setData('B');
    std::cout << "Setter methods - Weight: " << node1.getWeight() << ", Data: " << node1.getData() << std::endl;

    // Test comparison operators
    std::cout << "Comparison operators: " << std::endl;
    std::cout << "(node2 < node1): " << (node2 < node1) << std::endl;
    std::cout << "(node2 > node1): " << (node2 > node1) << std::endl;
    std::cout << "(node2 == node3): " << (node2 == node3) << std::endl;
    std::cout << "(node1 != node3): " << (node1 != node3) << std::endl;

    // Test assignment operator
    HuffmanNode node4;
    node4 = node2;
    std::cout << "Assignment operator - Weight: " << node4.getWeight() << ", Data: " << node4.getData() << std::endl;
}

void testMinHeap() {
    MinHeap minHeap(10);

    // Push nodes into the heap
    minHeap.push(HuffmanNode(5, 'A'));
    minHeap.push(HuffmanNode(3, 'B'));
    minHeap.push(HuffmanNode(8, 'C'));
    minHeap.push(HuffmanNode(2, 'D'));

    // Print the size of the heap
    std::cout << "Heap size: " << minHeap.getSize() << std::endl;

    // Peek and pop nodes from the heap
    while (!minHeap.isEmpty()) {
        HuffmanNode node = minHeap.peak();
        std::cout << "Peek: Weight=" << node.getWeight() << ", Data=" << node.getData() << std::endl;

        minHeap.pop();
        std::cout << "Pop - Heap size: " << minHeap.getSize() << std::endl;
    }
}

void testHuffmanTree() {
    // Create a MinHeap and push some nodes
    MinHeap minHeap(10);
    minHeap.push(HuffmanNode(5, 'A'));
    minHeap.push(HuffmanNode(3, 'B'));
    minHeap.push(HuffmanNode(8, 'C'));
    minHeap.push(HuffmanNode(2, 'D'));

    // Create a HuffmanTree from the MinHeap
    HuffmanTree huffmanTree(minHeap);

    // Generate codes for leaf nodes
    std::unordered_map<char, std::string> encodingTable;
    huffmanTree.generateCodes("", encodingTable);

    // Print the generated codes
    std::cout << "Generated Huffman Codes:" << std::endl;
    for (const auto &pair: encodingTable) {
        std::cout << "Character: " << pair.first << ", Code: " << pair.second << std::endl;
    }

    // Get codes for leaf nodes
    std::unordered_map<char, std::string> leafNodeCodes = huffmanTree.getLeafNodeCodes();

    // Print the codes for leaf nodes
    std::cout << "Leaf Node Codes:" << std::endl;
    for (const auto &pair: leafNodeCodes) {
        std::cout << "Character: " << pair.first << ", Code: " << pair.second << std::endl;
    }
}

void testCoding() {
    std::string str = "hello world";
    std::string encoding_string = getEncodingString(str);
    std::cout << encoding_string << std::endl;
    std::unordered_map<char, std::string> encoding_table = getEncodingTable(str);
    std::string decoding_string = getDecodingString(encoding_string, encoding_table);
    std::cout << decoding_string << std::endl;
}

int main() {
    testHuffmanTree();
    return 0;
}