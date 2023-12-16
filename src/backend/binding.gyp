{
  "targets": [
    {
      "target_name": "addon",
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "sources": [
        "huffman-tree.h",
        "huffman-min-heap.h",
        "huffman-min-heap.cpp",
        "huffman-tree.cpp",
        "huffman-encoding.cpp",
        "huffman-decoding.cpp",
        "addon.cpp"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      "defines": ["NAPI_CPP_EXCEPTIONS"]
    }
  ]
}
