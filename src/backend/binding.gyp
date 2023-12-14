{
  "targets": [
    {
      "target_name": "addon",
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "sources": [
        "huffman-decoding.cpp",
        "huffman-encoding.cpp",
        "huffman-tree.cpp",
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
