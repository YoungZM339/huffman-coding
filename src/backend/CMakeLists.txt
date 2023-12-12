cmake_minimum_required(VERSION 3.27)
project(backend)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)

add_executable(backend
        heap.cpp
        heap.h
        huffman-decoding.cpp
        huffman-decoding.h
        huffman-encoding.cpp
        huffman-encoding.h
        huffman-tree.cpp
        huffman-tree.h
        element-node.cpp
        element-node.h
)
