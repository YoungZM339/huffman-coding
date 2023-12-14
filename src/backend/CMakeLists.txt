add_executable(test-program test-program.cpp huffman-tree.cpp huffman-decoding.cpp huffman-encoding.cpp
        huffman-tree.cpp)
include_directories("<!@(node -p \"require('node-addon-api').include\")")