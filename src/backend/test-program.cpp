//
// Created by YoungZM on 2023/12/13.
//
//
#include <iostream>
#include "huffman-encoding.h"
#include "huffman-decoding.h"
#include "huffman-min-heap.h"

int main() {
    std::string data = "Hello World, I am YoungZM!";
    std::unordered_map<char, std::string> encoding_table = getEncodingTable(data);
    std::string compressed_data = compressData(data, encoding_table);
    std::cout << "Compressed data: " << compressed_data << std::endl;
    std::string decompressed_data = decompressData(compressed_data, encoding_table);
    std::cout << "Decompressed data: " << decompressed_data << std::endl;
    return 0;
}