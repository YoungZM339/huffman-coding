cmake_minimum_required(VERSION 3.27)
project(huffman-coding)

add_executable(test-program test-program.cpp huffman-tree.cpp huffman-decoding.cpp huffman-encoding.cpp
        huffman-tree.cpp
        huffman-min-heap.h
        huffman-min-heap.cpp)
include_directories("<!@(node -p \"require('node-addon-api').include\")")