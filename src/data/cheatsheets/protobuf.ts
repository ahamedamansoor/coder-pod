import { Package } from 'lucide-react';

export const protobufCheatsheet = {
    id: 'protobuf',
    name: 'Protocol Buffers',
    description: 'Master Protocol Buffers from basics to advanced: syntax, compilation, serialization, gRPC integration, optimization, and best practices',
    icon: Package,
    colorTheme: 'orange' as const,
    sections: [
        // BEGINNER LEVEL
        {
            title: 'Getting Started with Protocol Buffers',
            commands: [
                {
                    command: 'Basic Message Definition',
                    description: 'Define a simple protobuf message',
                    usage: 'syntax, message, field numbers, types',
                    example: `syntax = "proto3";

message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
  bool is_active = 4;
}`,
                },
                {
                    command: 'Field Rules Example',
                    description: 'Different field rules in protobuf',
                    usage: 'regular, repeated, optional fields',
                    example: `// Field rules
message Product {
  int32 id = 1;           // regular field
  string name = 2;        // regular field
  repeated string tags = 3; // repeated field
  optional string desc = 4; // optional field (proto3)
}`,
                },
                {
                    command: 'Numeric Data Types',
                    description: 'All numeric types in protobuf',
                    usage: 'int32, int64, uint32, uint64, etc.',
                    example: `message DataTypes {
  // Numbers
  int32 int32_val = 1;
  int64 int64_val = 2;
  uint32 uint32_val = 3;
  uint64 uint64_val = 4;
  sint32 sint32_val = 5;
  sint64 sint64_val = 6;
  fixed32 fixed32_val = 7;
  fixed64 fixed64_val = 8;
  sfixed32 sfixed32_val = 9;
  sfixed64 sfixed64_val = 10;
  float float_val = 11;
  double double_val = 12;
}`,
                },
                {
                    command: 'Basic Data Types',
                    description: 'String, bool, and bytes types',
                    usage: 'bool, string, bytes',
                    example: `  // Other types
  bool bool_val = 13;
  string string_val = 14;
  bytes bytes_val = 15;
  
  // Custom types
  Status status = 16;
  repeated int32 numbers = 17;
}`,
                },
                {
                    command: 'Basic Enum Definition',
                    description: 'Define simple enumeration',
                    usage: 'enum with values',
                    example: `enum Status {
  UNKNOWN = 0;
  ACTIVE = 1;
  INACTIVE = 2;
  SUSPENDED = 3;
  
  // Allow aliases
  reserved 4, 5;
  DEPRECATED = 6 [deprecated = true];
}`,
                },
                {
                    command: 'Enum Usage in Message',
                    description: 'Use enum in message definition',
                    usage: 'enum field type',
                    example: `message User {
  int32 id = 1;
  string name = 2;
  Status status = 3;
}`,
                },
                {
                    command: 'Enum with Aliases',
                    description: 'Define enum with aliases',
                    usage: 'enum alias values',
                    example: `// Enum with aliases
enum PhoneType {
  PHONE_TYPE_UNSPECIFIED = 0;
  PHONE_TYPE_MOBILE = 1;
  PHONE_TYPE_HOME = 2;
  PHONE_TYPE_WORK = 3;
  
  // Aliases
  MOBILE = 1;
  HOME = 2;
  WORK = 3;
}`,
                },
                {
                    command: 'Nested Message Definition',
                    description: 'Define messages within messages',
                    usage: 'nested message structure',
                    example: `message Person {
  string name = 1;
  int32 age = 2;
  
  message Address {
    string street = 1;
    string city = 2;
    string country = 3;
    string postal_code = 4;
  }
  
  Address address = 3;
  repeated Address previous_addresses = 4;`,
                },
                {
                    command: 'Nested Phone Number Message',
                    description: 'Define nested phone number structure',
                    usage: 'nested message with enum',
                    example: `  message PhoneNumber {
    string number = 1;
    PhoneType type = 2;
  }
  
  repeated PhoneNumber phones = 5;
}`,
                },
                {
                    command: 'External Nested Message Access',
                    description: 'Access nested messages externally',
                    usage: 'Outer.Inner reference',
                    example: `// Can also reference nested messages externally
Person.Address addr = Person.Address.newBuilder()
  .setStreet("123 Main St")
  .setCity("New York")
  .build();`,
                },
            ],
        },
        {
            title: 'Basic Protobuf Operations',
            commands: [
                {
                    command: 'Field Number Ranges',
                    description: 'Understanding field numbering efficiency',
                    usage: 'Field numbers 1-15 vs 16-2047',
                    example: `message User {
  // Field numbers 1-15 use 1 byte in encoding
  string name = 1;           // required field
  string email = 2;          // required field
  
  // Field numbers 16-2047 use 2 bytes
  repeated string tags = 16; // repeated field
  optional string bio = 17;  // optional field`,
                },
                {
                    command: 'Field Rules Examples',
                    description: 'Different field rule examples',
                    usage: 'regular, repeated, optional',
                    example: `  // Field rules
  int32 id = 3;              // regular field
  repeated int32 scores = 4; // repeated field
  optional int32 age = 5;    // optional field (proto3)
}`,
                },
                {
                    command: 'Built-in Default Values',
                    description: 'Default values for basic types',
                    usage: 'string, int, bool, double, bytes defaults',
                    example: `message Settings {
  string name = 1;          // default: ""
  int32 count = 2;          // default: 0
  bool enabled = 3;         // default: false
  double rate = 4;          // default: 0.0
  bytes data = 5;           // default: empty bytes`,
                },
                {
                    command: 'Enum Default Values',
                    description: 'Default values for enum fields',
                    usage: 'First enum value as default',
                    example: `  // Custom default values
  enum Status {
    UNKNOWN = 0;
    ACTIVE = 1;
    INACTIVE = 2;
  }
  Status status = 6;        // default: UNKNOWN
}`,
                },
                {
                    command: 'Nested Person Message',
                    description: 'Complete nested message example',
                    usage: 'Person with Address and PhoneNumber',
                    example: `message Person {
  string name = 1;
  int32 age = 2;
  
  message Address {
    string street = 1;
    string city = 2;
    string country = 3;
    string postal_code = 4;
  }
  
  Address address = 3;
  repeated Address previous_addresses = 4;
  
  message PhoneNumber {
    string number = 1;
    PhoneType type = 2;
  }
  
  repeated PhoneNumber phones = 5;
}`,
                },
                {
                    command: 'PhoneType Enum',
                    description: 'Phone type enumeration',
                    usage: 'enum for phone number types',
                    example: `enum PhoneType {
  PHONE_TYPE_UNSPECIFIED = 0;
  PHONE_TYPE_MOBILE = 1;
  PHONE_TYPE_HOME = 2;
  PHONE_TYPE_WORK = 3;
}`,
                },
            ],
        },
        // INTERMEDIATE LEVEL
        {
            title: 'Protobuf Compilation & Code Generation',
            commands: [
                {
                    command: 'Install Protobuf on macOS',
                    description: 'Install protoc on macOS using Homebrew',
                    usage: 'brew install protobuf',
                    example: `# macOS (Homebrew)
brew install protobuf`,
                },
                {
                    command: 'Install Protobuf on Ubuntu',
                    description: 'Install protoc on Ubuntu/Debian',
                    usage: 'apt-get install protobuf-compiler',
                    example: `# Ubuntu/Debian
sudo apt-get install protobuf-compiler`,
                },
                {
                    command: 'Install Protobuf on CentOS',
                    description: 'Install protoc on CentOS/RHEL',
                    usage: 'yum install protobuf-compiler',
                    example: `# CentOS/RHEL
sudo yum install protobuf-compiler`,
                },
                {
                    command: 'Install Protobuf Binary',
                    description: 'Download and install protoc binary',
                    usage: 'Download from GitHub releases',
                    example: `# Download binary
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.21.0/protoc-3.21.0-linux-x86_64.zip
unzip protoc-3.21.0-linux-x86_64.zip
sudo cp bin/protoc /usr/local/bin/

# Verify installation
protoc --version`,
                },
                {
                    command: 'Basic Python Compilation',
                    description: 'Compile .proto to Python',
                    usage: 'protoc --python_out',
                    example: `# Basic compilation
protoc --python_out=. user.proto`,
                },
                {
                    command: 'Basic Go Compilation',
                    description: 'Compile .proto to Go',
                    usage: 'protoc --go_out',
                    example: `protoc --go_out=. user.proto`,
                },
                {
                    command: 'Basic Java Compilation',
                    description: 'Compile .proto to Java',
                    usage: 'protoc --java_out',
                    example: `protoc --java_out=. user.proto`,
                },
                {
                    command: 'Basic C++ Compilation',
                    description: 'Compile .proto to C++',
                    usage: 'protoc --cpp_out',
                    example: `protoc --cpp_out=. user.proto`,
                },
                {
                    command: 'Multiple Output Directories',
                    description: 'Compile to multiple languages at once',
                    usage: 'Multiple --lang_out flags',
                    example: `# Multiple output directories
protoc --python_out=python --go_out=go --java_out=java user.proto`,
                },
                {
                    command: 'Include Paths',
                    description: 'Specify include paths for imports',
                    usage: '-I flag for proto_path',
                    example: `# Include paths
protoc -I. -Iproto --python_out=. proto/user.proto`,
                },
                {
                    command: 'Generate All Languages',
                    description: 'Compile to all supported languages',
                    usage: 'Multiple language flags',
                    example: `# Generate all languages
protoc --python_out=. --go_out=. --java_out=. --cpp_out=. --ruby_out=. user.proto`,
                },
                {
                    command: 'gRPC Python Plugin',
                    description: 'Generate gRPC Python code',
                    usage: 'grpc_python_out flag',
                    example: `# gRPC plugins
protoc --grpc_python_out=. --python_out=. user.proto`,
                },
                {
                    command: 'gRPC Go Plugin',
                    description: 'Generate gRPC Go code',
                    usage: 'go-grpc_out flag',
                    example: `protoc --go-grpc_out=. --go_out=. user.proto`,
                },
                {
                    command: 'gRPC Java Plugin',
                    description: 'Generate gRPC Java code',
                    usage: 'grpc_java_out flag',
                    example: `protoc --grpc_java_out=. --java_out=. user.proto`,
                },
                {
                    command: 'gRPC C++ Plugin',
                    description: 'Generate gRPC C++ code',
                    usage: 'grpc_cpp_out flag',
                    example: `protoc --grpc_cpp_out=. --cpp_out=. user.proto`,
                },
                {
                    command: 'TypeScript Plugin',
                    description: 'Generate TypeScript code',
                    usage: 'ts_out with plugin',
                    example: `# TypeScript plugin
protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \\
  --ts_out=. user.proto`,
                },
                {
                    command: 'Custom Plugin',
                    description: 'Use custom protoc plugin',
                    usage: 'plugin and custom_out flags',
                    example: `# Custom plugin
protoc --plugin=protoc-gen-custom=./custom-plugin \\
  --custom_out=. user.proto`,
                },
                {
                    command: 'Install Go Plugins',
                    description: 'Install Go protoc plugins',
                    usage: 'go install commands',
                    example: `# Install Go plugins
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest`,
                },
                {
                    command: 'Verbose Output with Descriptor',
                    description: 'Generate descriptor set with verbose output',
                    usage: 'descriptor_set_out flag',
                    example: `# Verbose output
protoc --python_out=. --descriptor_set_out=user.desc user.proto`,
                },
                {
                    command: 'Include Source Info',
                    description: 'Include source info in descriptors',
                    usage: 'include_imports and include_source_info',
                    example: `# Include source info in descriptors
protoc --include_imports --include_source_info \\
  --descriptor_set_out=user.desc user.proto`,
                },
                {
                    command: 'Custom Proto Path',
                    description: 'Specify custom proto path',
                    usage: 'proto_path flag',
                    example: `# Custom options file
protoc --python_out=. --proto_path=protos user.proto`,
                },
                {
                    command: 'Experimental Proto3 Optional',
                    description: 'Enable experimental proto3 optional',
                    usage: 'experimental_allow_proto3_optional',
                    example: `# Generate with custom options
protoc --python_out=. --experimental_allow_proto3_optional user.proto`,
                },
                {
                    command: 'Multiple Proto Files',
                    description: 'Compile multiple proto files',
                    usage: 'Multiple .proto files',
                    example: `# Multiple proto files
protoc --python_out=. user.proto order.proto product.proto`,
                },
                {
                    command: 'Recursive Compilation',
                    description: 'Find and compile all proto files',
                    usage: 'find command with protoc',
                    example: `# Recursive compilation
find . -name "*.proto" -exec protoc --python_out=. {} \\;`,
                },
            ],
        },
        {
            title: 'Serialization & Deserialization',
            commands: [
                {
                    command: 'Python Create Message',
                    description: 'Create protobuf message in Python',
                    usage: 'Import and set fields',
                    example: `import user_pb2

# Create message
user = user_pb2.User()
user.id = 123
user.name = "John Doe"
user.email = "john@example.com"
user.is_active = True`,
                },
                {
                    command: 'Python Serialize to Bytes',
                    description: 'Serialize protobuf to bytes in Python',
                    usage: 'SerializeToString method',
                    example: `# Serialize to bytes
serialized = user.SerializeToString()
print(f"Serialized size: {len(serialized)} bytes")`,
                },
                {
                    command: 'Python Deserialize from Bytes',
                    description: 'Deserialize protobuf from bytes in Python',
                    usage: 'ParseFromString method',
                    example: `# Deserialize from bytes
new_user = user_pb2.User()
new_user.ParseFromString(serialized)

print(f"ID: {new_user.id}")
print(f"Name: {new_user.name}")
print(f"Email: {new_user.email}")`,
                },
                {
                    command: 'Python Check Field Set',
                    description: 'Check if protobuf field is set in Python',
                    usage: 'HasField method',
                    example: `# Check if field is set
if new_user.HasField("email"):
    print("Email is set")`,
                },
                {
                    command: 'Python Clear Field',
                    description: 'Clear protobuf field in Python',
                    usage: 'ClearField method',
                    example: `# Clear field
new_user.ClearField("email")`,
                },
                {
                    command: 'Go Create Message',
                    description: 'Create protobuf message in Go',
                    usage: 'Struct literal syntax',
                    example: `package main

import (
  "fmt"
  "google.golang.org/protobuf/proto"
  "your/package/userpb"
)

func main() {
  // Create message
  user := &userpb.User{
    Id:       123,
    Name:     "John Doe",
    Email:    "john@example.com",
    IsActive: true,
  }`,
                },
                {
                    command: 'Go Marshal Message',
                    description: 'Serialize protobuf in Go',
                    usage: 'proto.Marshal function',
                    example: `  // Serialize
  data, err := proto.Marshal(user)
  if err != nil {
    panic(err)
  }
  
  fmt.Printf("Serialized size: %d bytes\\n", len(data))`,
                },
                {
                    command: 'Go Unmarshal Message',
                    description: 'Deserialize protobuf in Go',
                    usage: 'proto.Unmarshal function',
                    example: `  // Deserialize
  newUser := &userpb.User{}
  err = proto.Unmarshal(data, newUser)
  if err != nil {
    panic(err)
  }
  
  fmt.Printf("ID: %d\\n", newUser.Id)
  fmt.Printf("Name: %s\\n", newUser.Name)
  fmt.Printf("Email: %s\\n", newUser.Email)`,
                },
                {
                    command: 'Go Custom Marshal Options',
                    description: 'Use custom marshal options in Go',
                    usage: 'proto.MarshalOptions',
                    example: `  // Use custom options
  opts := proto.MarshalOptions{
    Deterministic: true,
  }
  data, _ = opts.Marshal(user)
}`,
                },
                {
                    command: 'Java Create Message',
                    description: 'Create protobuf message in Java',
                    usage: 'Builder pattern',
                    example: `import your.package.User;
import com.google.protobuf.InvalidProtocolBufferException;

public class ProtobufExample {
    public static void main(String[] args) {
        // Create message
        User user = User.newBuilder()
            .setId(123)
            .setName("John Doe")
            .setEmail("john@example.com")
            .setIsActive(true)
            .build();`,
                },
                {
                    command: 'Java Serialize Message',
                    description: 'Serialize protobuf in Java',
                    usage: 'toByteArray method',
                    example: `        // Serialize
        byte[] data = user.toByteArray();
        System.out.println("Serialized size: " + data.length + " bytes");`,
                },
                {
                    command: 'Java Deserialize Message',
                    description: 'Deserialize protobuf in Java',
                    usage: 'parseFrom method with exception handling',
                    example: `        // Deserialize
        try {
            User newUser = User.parseFrom(data);
            System.out.println("ID: " + newUser.getId());
            System.out.println("Name: " + newUser.getName());
            System.out.println("Email: " + newUser.getEmail());`,
                },
                {
                    command: 'Java Check Field Set',
                    description: 'Check if field is set in Java',
                    usage: 'hasField methods',
                    example: `            // Check if field is set
            if (newUser.hasEmail()) {
                System.out.println("Email is set");
            }
        } catch (InvalidProtocolBufferException e) {
            e.printStackTrace();
        }`,
                },
                {
                    command: 'Binary Format Analysis Function',
                    description: 'Analyze protobuf binary format structure',
                    usage: 'Parse wire format and varint',
                    example: `# Analyze protobuf binary format
import struct

def analyze_protobuf(data):
    offset = 0
    while offset < len(data):
        # Read key (field number + wire type)
        key = data[offset]
        offset += 1
        
        field_number = key >> 3
        wire_type = key & 0x07
        
        print(f"Field: {field_number}, Wire Type: {wire_type}")`,
                },
                {
                    command: 'Analyze Varint Encoding',
                    description: 'Parse varint encoded values',
                    usage: 'Varint decoding logic',
                    example: `        if wire_type == 0:  # varint
            value = 0
            shift = 0
            while True:
                byte = data[offset]
                offset += 1
                value |= (byte & 0x7F) << shift
                if not (byte & 0x80):
                    break
                shift += 7
            print(f"  Varint value: {value}")`,
                },
                {
                    command: 'Analyze Length Delimited',
                    description: 'Parse length-delimited values',
                    usage: 'Length-prefixed data parsing',
                    example: `        elif wire_type == 2:  # length-delimited
            length = 0
            shift = 0
            while True:
                byte = data[offset]
                offset += 1
                length |= (byte & 0x7F) << shift
                if not (byte & 0x80):
                    break
                shift += 7
            
            value = data[offset:offset+length]
            offset += length
            print(f"  Length: {length}, Value: {value}")`,
                },
                {
                    command: 'Binary Analysis Usage',
                    description: 'Example of binary format analysis',
                    usage: 'Read and analyze protobuf file',
                    example: `# Usage
with open("user.bin", "rb") as f:
    data = f.read()
analyze_protobuf(data)`,
                },
            ],
        },
        // Continue with more sections...
    ],
};
