//
// Created by YoungZM on 2023/12/13.
//

#include "addon.h"

Napi::Value DecompressData(const Napi::CallbackInfo &info) {
    Napi::Env env = info.Env();

    // 解析JavaScript传递的参数
    std::string compressed_data = info[0].As<Napi::String>().Utf8Value();
    // 解析encoding_table参数，这里假设它是一个对象，键为字符，值为字符串
    Napi::Object encoding_table_obj = info[1].As<Napi::Object>();
    std::unordered_map<char, std::string> encoding_table;
    Napi::Array keys = encoding_table_obj.GetPropertyNames();
    for (uint32_t i = 0; i < keys.Length(); i++) {
        char key = keys.Get(i).ToString().Utf8Value()[0];
        std::string value = encoding_table_obj.Get(keys.Get(i)).ToString().Utf8Value();
        encoding_table[key] = value;
    }

    // 调用解压缩函数
    std::string result = decompressData(compressed_data, encoding_table);

    // 将结果转换为JavaScript字符串并返回
    return Napi::String::New(env, result);
}

Napi::Value CompressData(const Napi::CallbackInfo &info) {
    Napi::Env env = info.Env();

    // 解析JavaScript传递的参数
    std::string original_data = info[0].As<Napi::String>().Utf8Value();
    // 解析encoding_table参数，这里假设它是一个对象，键为字符，值为字符串
    Napi::Object encoding_table_obj = info[1].As<Napi::Object>();
    std::unordered_map<char, std::string> encoding_table;
    Napi::Array keys = encoding_table_obj.GetPropertyNames();
    for (uint32_t i = 0; i < keys.Length(); i++) {
        char key = keys.Get(i).ToString().Utf8Value()[0];
        std::string value = encoding_table_obj.Get(keys.Get(i)).ToString().Utf8Value();
        encoding_table[key] = value;
    }

    // 调用压缩函数
    std::string result = compressData(original_data, encoding_table);

    // 将结果转换为JavaScript字符串并返回
    return Napi::String::New(env, result);
}

Napi::Value GetEncodingTable(const Napi::CallbackInfo &info) {
    Napi::Env env = info.Env();

    // Ensure the correct number of arguments are passed
    if (info.Length() != 1 || !info[0].IsString()) {
        Napi::TypeError::New(env, "String argument expected").ThrowAsJavaScriptException();
        return env.Null();
    }

    // Extract the original_data from JavaScript argument
    std::string original_data = info[0].As<Napi::String>().Utf8Value();

    // Call your existing getEncodingTable function
    std::unordered_map<char, std::string> huffman_table = getEncodingTable(original_data);

    // Convert the C++ unordered_map to a JavaScript object
    Napi::Object result = Napi::Object::New(env);
    for (const auto &entry : huffman_table) {
        result.Set(Napi::String::New(env, std::string(1, entry.first)), Napi::String::New(env, entry.second));
    }

    return result;
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    // 将JavaScript函数导出到C++中
    exports.Set("decompressData", Napi::Function::New(env, DecompressData));
    exports.Set("compressData", Napi::Function::New(env, CompressData));
    exports.Set("getEncodingTable", Napi::Function::New(env, GetEncodingTable));
    return exports;
}

NODE_API_MODULE(addon, Init)
