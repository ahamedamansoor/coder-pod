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
                    example: 'syntax = "proto3";\n\nmessage User {\n  int32 id = 1;\n  string name = 2;\n  string email = 3;\n  bool is_active = 4;\n}\n\n// Field rules\nmessage Product {\n  int32 id = 1;           // regular field\n  string name = 2;        // regular field\n  repeated string tags = 3; // repeated field\n  optional string desc = 4; // optional field (proto3)\n}',
                },
                {
                    command: 'Data Types',
                    description: 'Available protobuf data types',
                    usage: 'Scalar types, enums, messages',
                    example: 'message DataTypes {\n  // Numbers\n  int32 int32_val = 1;\n  int64 int64_val = 2;\n  uint32 uint32_val = 3;\n  uint64 uint64_val = 4;\n  sint32 sint32_val = 5;\n  sint64 sint64_val = 6;\n  fixed32 fixed32_val = 7;\n  fixed64 fixed64_val = 8;\n  sfixed32 sfixed32_val = 9;\n  sfixed64 sfixed64_val = 10;\n  float float_val = 11;\n  double double_val = 12;\n  \n  // Other types\n  bool bool_val = 13;\n  string string_val = 14;\n  bytes bytes_val = 15;\n  \n  // Custom types\n  Status status = 16;\n  repeated int32 numbers = 17;\n}',
                },
                {
                    command: 'Enumerations',
                    description: 'Define enum types in protobuf',
                    usage: 'enum, enum values, aliases',
                    example: 'enum Status {\n  UNKNOWN = 0;\n  ACTIVE = 1;\n  INACTIVE = 2;\n  SUSPENDED = 3;\n  \n  // Allow aliases\n  reserved 4, 5;\n  DEPRECATED = 6 [deprecated = true];\n}\n\nmessage User {\n  int32 id = 1;\n  string name = 2;\n  Status status = 3;\n}\n\n// Enum with aliases\nenum PhoneType {\n  PHONE_TYPE_UNSPECIFIED = 0;\n  PHONE_TYPE_MOBILE = 1;\n  PHONE_TYPE_HOME = 2;\n  PHONE_TYPE_WORK = 3;\n  \n  // Aliases\n  MOBILE = 1;\n  HOME = 2;\n  WORK = 3;\n}',
                },
                {
                    command: 'Nested Messages',
                    description: 'Define messages within messages',
                    usage: 'Nested message definitions',
                    example: 'message Person {\n  string name = 1;\n  int32 age = 2;\n  \n  message Address {\n    string street = 1;\n    string city = 2;\n    string country = 3;\n    string postal_code = 4;\n  }\n  \n  Address address = 3;\n  repeated Address previous_addresses = 4;\n  \n  message PhoneNumber {\n    string number = 1;\n    PhoneType type = 2;\n  }\n  \n  repeated PhoneNumber phones = 5;\n}\n\n// Can also reference nested messages externally\nPerson.Address addr = Person.Address.newBuilder()\n  .setStreet("123 Main St")\n  .setCity("New York")\n  .build();',
                },
            ],
        },
        {
            title: 'Basic Protobuf Operations',
            commands: [
                {
                    command: 'Field Numbers & Rules',
                    description: 'Understanding field numbering and rules',
                    usage: 'Field numbers, required, optional, repeated',
                    example: 'message User {\n  // Field numbers 1-15 use 1 byte in encoding\n  string name = 1;           // required field\n  string email = 2;          // required field\n  \n  // Field numbers 16-2047 use 2 bytes\n  repeated string tags = 16; // repeated field\n  optional string bio = 17;  // optional field\n  \n  // Field rules\n  int32 id = 3;              // regular field\n  repeated int32 scores = 4; // repeated field\n  optional int32 age = 5;    // optional field (proto3)\n}',
                },
                {
                    command: 'Default Values',
                    description: 'Default values for protobuf fields',
                    usage: 'Built-in defaults, custom defaults',
                    example: 'message Settings {\n  string name = 1;          // default: ""\n  int32 count = 2;          // default: 0\n  bool enabled = 3;         // default: false\n  double rate = 4;          // default: 0.0\n  bytes data = 5;           // default: empty bytes\n  \n  // Custom default values\n  enum Status {\n    UNKNOWN = 0;\n    ACTIVE = 1;\n    INACTIVE = 2;\n  }\n  Status status = 6;        // default: UNKNOWN\n}',
                },
                {
                    command: 'Message Nesting',
                    description: 'Create nested message structures',
                    usage: 'Nested messages, inner classes',
                    example: 'message Person {\n  string name = 1;\n  int32 age = 2;\n  \n  message Address {\n    string street = 1;\n    string city = 2;\n    string country = 3;\n    string postal_code = 4;\n  }\n  \n  Address address = 3;\n  repeated Address previous_addresses = 4;\n  \n  message PhoneNumber {\n    string number = 1;\n    PhoneType type = 2;\n  }\n  \n  repeated PhoneNumber phones = 5;\n}\n\nenum PhoneType {\n  PHONE_TYPE_UNSPECIFIED = 0;\n  PHONE_TYPE_MOBILE = 1;\n  PHONE_TYPE_HOME = 2;\n  PHONE_TYPE_WORK = 3;\n}',
                },
            ],
        },

        // INTERMEDIATE LEVEL
        {
            title: 'Protobuf Compilation & Code Generation',
            commands: [
                {
                    command: 'Install Protobuf Compiler',
                    description: 'Install protoc compiler',
                    usage: 'Package managers, binary installation',
                    example: '# macOS (Homebrew)\nbrew install protobuf\n\n# Ubuntu/Debian\nsudo apt-get install protobuf-compiler\n\n# CentOS/RHEL\nsudo yum install protobuf-compiler\n\n# Download binary\ncurl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.21.0/protoc-3.21.0-linux-x86_64.zip\nunzip protoc-3.21.0-linux-x86_64.zip\nsudo cp bin/protoc /usr/local/bin/\n\n# Verify installation\nprotoc --version',
                },
                {
                    command: 'Basic Compilation',
                    description: 'Compile .proto files to source code',
                    usage: 'protoc command, output directories',
                    example: '# Basic compilation\nprotoc --python_out=. user.proto\nprotoc --go_out=. user.proto\nprotoc --java_out=. user.proto\nprotoc --cpp_out=. user.proto\n\n# Multiple output directories\nprotoc --python_out=python --go_out=go --java_out=java user.proto\n\n# Include paths\nprotoc -I. -Iproto --python_out=. proto/user.proto\n\n# Generate all languages\nprotoc --python_out=. --go_out=. --java_out=. --cpp_out=. --ruby_out=. user.proto',
                },
                {
                    command: 'Language-Specific Plugins',
                    description: 'Use plugins for different languages',
                    usage: 'gRPC plugins, custom plugins',
                    example: '# gRPC plugins\nprotoc --grpc_python_out=. --python_out=. user.proto\nprotoc --go-grpc_out=. --go_out=. user.proto\nprotoc --grpc_java_out=. --java_out=. user.proto\nprotoc --grpc_cpp_out=. --cpp_out=. user.proto\n\n# TypeScript plugin\nprotoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \\\n  --ts_out=. user.proto\n\n# Custom plugin\nprotoc --plugin=protoc-gen-custom=./custom-plugin \\\n  --custom_out=. user.proto\n\n# Install Go plugins\ngo install google.golang.org/protobuf/cmd/protoc-gen-go@latest\ngo install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest',
                },
                {
                    command: 'Compilation Options',
                    description: 'Advanced compilation options',
                    usage: 'Flags, includes, custom options',
                    example: '# Verbose output\nprotoc --python_out=. --descriptor_set_out=user.desc user.proto\n\n# Include source info in descriptors\nprotoc --include_imports --include_source_info \\\n  --descriptor_set_out=user.desc user.proto\n\n# Custom options file\nprotoc --python_out=. --proto_path=protos user.proto\n\n# Generate with custom options\nprotoc --python_out=. --experimental_allow_proto3_optional user.proto\n\n# Multiple proto files\nprotoc --python_out=. user.proto order.proto product.proto\n\n# Recursive compilation\nfind . -name "*.proto" -exec protoc --python_out=. {} \\;',
                },
            ],
        },
        {
            title: 'Serialization & Deserialization',
            commands: [
                {
                    command: 'Python Serialization',
                    description: 'Serialize/deserialize in Python',
                    usage: 'ParseFromString, SerializeToString',
                    example: 'import user_pb2\n\n# Create message\nuser = user_pb2.User()\nuser.id = 123\nuser.name = "John Doe"\nuser.email = "john@example.com"\nuser.is_active = True\n\n# Serialize to bytes\nserialized = user.SerializeToString()\nprint(f"Serialized size: {len(serialized)} bytes")\n\n# Deserialize from bytes\nnew_user = user_pb2.User()\nnew_user.ParseFromString(serialized)\n\nprint(f"ID: {new_user.id}")\nprint(f"Name: {new_user.name}")\nprint(f"Email: {new_user.email}")\n\n# Check if field is set\nif new_user.HasField("email"):\n    print("Email is set")\n\n# Clear field\nnew_user.ClearField("email")',
                },
                {
                    command: 'Go Serialization',
                    description: 'Serialize/deserialize in Go',
                    usage: 'Marshal, Unmarshal, proto.MarshalOptions',
                    example: 'package main\n\nimport (\n  "fmt"\n  "google.golang.org/protobuf/proto"\n  "your/package/userpb"\n)\n\nfunc main() {\n  // Create message\n  user := &userpb.User{\n    Id:       123,\n    Name:     "John Doe",\n    Email:    "john@example.com",\n    IsActive: true,\n  }\n  \n  // Serialize\n  data, err := proto.Marshal(user)\n  if err != nil {\n    panic(err)\n  }\n  \n  fmt.Printf("Serialized size: %d bytes\\n", len(data))\n  \n  // Deserialize\n  newUser := &userpb.User{}\n  err = proto.Unmarshal(data, newUser)\n  if err != nil {\n    panic(err)\n  }\n  \n  fmt.Printf("ID: %d\\n", newUser.Id)\n  fmt.Printf("Name: %s\\n", newUser.Name)\n  fmt.Printf("Email: %s\\n", newUser.Email)\n  \n  // Use custom options\n  opts := proto.MarshalOptions{\n    Deterministic: true,\n  }\n  data, _ = opts.Marshal(user)\n}',
                },
                {
                    command: 'Java Serialization',
                    description: 'Serialize/deserialize in Java',
                    usage: 'toByteArray, parseFrom, Builder',
                    example: 'import your.package.User;\nimport com.google.protobuf.InvalidProtocolBufferException;\n\npublic class ProtobufExample {\n    public static void main(String[] args) {\n        // Create message\n        User user = User.newBuilder()\n            .setId(123)\n            .setName("John Doe")\n            .setEmail("john@example.com")\n            .setIsActive(true)\n            .build();\n        \n        // Serialize\n        byte[] data = user.toByteArray();\n        System.out.println("Serialized size: " + data.length + " bytes");\n        \n        // Deserialize\n        try {\n            User newUser = User.parseFrom(data);\n            System.out.println("ID: " + newUser.getId());\n            System.out.println("Name: " + newUser.getName());\n            System.out.println("Email: " + newUser.getEmail());\n            \n            // Check if field is set\n            if (newUser.hasEmail()) {\n                System.out.println("Email is set");\n            }\n        } catch (InvalidProtocolBufferException e) {\n            e.printStackTrace();\n        }\n    }\n}',
                },
                {
                    command: 'Binary Format Analysis',
                    description: 'Understand protobuf binary format',
                    usage: 'Wire format, varint, zigzag encoding',
                    example: '# Analyze protobuf binary format\nimport struct\n\ndef analyze_protobuf(data):\n    offset = 0\n    while offset < len(data):\n        # Read key (field number + wire type)\n        key = data[offset]\n        offset += 1\n        \n        field_number = key >> 3\n        wire_type = key & 0x07\n        \n        print(f"Field: {field_number}, Wire Type: {wire_type}")\n        \n        if wire_type == 0:  # varint\n            value = 0\n            shift = 0\n            while True:\n                byte = data[offset]\n                offset += 1\n                value |= (byte & 0x7F) << shift\n                if not (byte & 0x80):\n                    break\n                shift += 7\n            print(f"  Varint value: {value}")\n            \n        elif wire_type == 2:  # length-delimited\n            length = 0\n            shift = 0\n            while True:\n                byte = data[offset]\n                offset += 1\n                length |= (byte & 0x7F) << shift\n                if not (byte & 0x80):\n                    break\n                shift += 7\n            \n            value = data[offset:offset+length]\n            offset += length\n            print(f"  Length: {length}, Value: {value}")\n\n# Usage\nwith open("user.bin", "rb") as f:\n    data = f.read()\nanalyze_protobuf(data)',
                },
            ],
        },
        {
            title: 'Advanced Message Features',
            commands: [
                {
                    command: 'Oneof Fields',
                    description: 'Use oneof for mutually exclusive fields',
                    usage: 'oneof keyword, field selection',
                    example: 'message ContactInfo {\n  oneof contact {\n    string email = 1;\n    string phone = 2;\n    string social_media = 3;\n  }\n}\n\nmessage Payment {\n  oneof payment_method {\n    CreditCard credit_card = 1;\n    PayPal paypal = 2;\n    BankTransfer bank_transfer = 3;\n    Crypto crypto = 4;\n  }\n}\n\nmessage CreditCard {\n  string number = 1;\n  string expiry = 2;\n  string cvv = 3;\n}\n\n// Python usage\ncontact = ContactInfo()\ncontact.email = "user@example.com"  # Sets email\nprint(contact.WhichOneof("contact"))  # "email"\n\ncontact.phone = "+1234567890"  # Clears email, sets phone\nprint(contact.WhichOneof("contact"))  # "phone"',
                },
                {
                    command: 'Maps',
                    description: 'Use map fields for key-value pairs',
                    usage: 'map<key_type, value_type>',
                    example: 'message User {\n  int32 id = 1;\n  string name = 2;\n  \n  map<string, string> attributes = 3;\n  map<int32, string> scores = 4;\n  map<string, int32> counts = 5;\n}\n\nmessage Config {\n  map<string, bool> flags = 1;\n  map<string, double> settings = 2;\n  map<string, repeated<string>> lists = 3;\n}\n\n// Python usage\nuser = User()\nuser.id = 123\nuser.name = "John"\nuser.attributes["role"] = "admin"\nuser.attributes["department"] = "engineering"\nuser.scores[101] = "A+"\nuser.scores[102] = "B-"\n\n# Access maps\nfor key, value in user.attributes.items():\n    print(f"{key}: {value}")\n\nif "role" in user.attributes:\n    print(f"Role: {user.attributes[\'role\']}")',
                },
                {
                    command: 'Extensions & Reserved',
                    description: 'Reserve fields and use extensions',
                    usage: 'reserved, extensions, extend',
                    example: 'message User {\n  reserved 2, 15, 9 to 11;\n  reserved "email", "age";\n  \n  int32 id = 1;\n  string name = 3;\n  \n  extensions 100 to 199;\n}\n\nextend User {\n  optional string email = 100;\n  optional int32 age = 101;\n}\n\n// Proto3 alternative - use reserved for future fields\nmessage User {\n  int32 id = 1;\n  string name = 2;\n  \n  // Reserved for future use\n  reserved 3 to 10;\n  reserved "old_field", "deprecated_field";\n  \n  // New fields can use numbers after 10\n  string new_field = 11;\n}\n\n// When updating messages:\nmessage User {\n  int32 id = 1;\n  string name = 2;\n  string email = 3;  // Using previously reserved\n  int32 age = 4;\n}',
                },
                {
                    command: 'Custom Options',
                    description: 'Define and use custom options',
                    usage: 'extend options, custom option types',
                    example: 'import "google/protobuf/descriptor.proto";\n\nextend google.protobuf.FieldOptions {\n  optional string validation = 50001;\n  optional bool sensitive = 50002;\n  optional int32 max_length = 50003;\n}\n\nextend google.protobuf.MessageOptions {\n  optional string entity_name = 50001;\n  optional bool cacheable = 50002;\n}\n\nmessage User {\n  option (entity_name) = "user";\n  option (cacheable) = true;\n  \n  int32 id = 1;\n  string name = 2 [(validation) = "required", (max_length) = 100];\n  string email = 3 [(validation) = "email", (sensitive) = true];\n  string password = 4 [(sensitive) = true];\n}\n\n// Access custom options in code\n# Python\nfrom google.protobuf import descriptor_pb2\n\nfield_options = user_pb2.User.DESCRIPTOR.fields_by_name["name"].GetOptions()\nvalidation = field_options.Extensions[user_pb2.validation]\nmax_length = field_options.Extensions[user_pb2.max_length]',
                },
            ],
        },

        // ADVANCED LEVEL
        {
            title: 'gRPC Integration',
            commands: [
                {
                    command: 'Define gRPC Service',
                    description: 'Define RPC services in .proto files',
                    usage: 'service, rpc, request/response types',
                    example: 'syntax = "proto3";\n\npackage userservice;\n\nimport "google/protobuf/timestamp.proto";\nimport "google/protobuf/empty.proto";\n\n// Simple RPC\nservice UserService {\n  rpc GetUser(GetUserRequest) returns (GetUserResponse);\n  rpc CreateUser(CreateUserRequest) returns (CreateUserResponse);\n  rpc UpdateUser(UpdateUserRequest) returns (UpdateUserResponse);\n  rpc DeleteUser(DeleteUserRequest) returns (google.protobuf.Empty);\n}\n\n// Streaming RPC\nservice StreamingService {\n  rpc ListUsers(ListUsersRequest) returns (stream User);\n  rpc UploadUsers(stream UploadUserRequest) returns (UploadUsersResponse);\n  rpc Chat(stream ChatMessage) returns (stream ChatMessage);\n}\n\nmessage GetUserRequest {\n  int32 user_id = 1;\n  repeated string fields = 2;  // Field selection\n}\n\nmessage GetUserResponse {\n  User user = 1;\n  google.protobuf.Timestamp fetched_at = 2;\n}',
                },
                {
                    command: 'gRPC Server Implementation',
                    description: 'Implement gRPC server',
                    usage: 'Service implementation, server setup',
                    example: '# Python gRPC server\nimport grpc\nfrom concurrent import futures\nimport user_pb2\nimport user_pb2_grpc\n\nclass UserServiceImpl(user_pb2_grpc.UserServiceServicer):\n    def GetUser(self, request, context):\n        # Business logic to get user\n        user = user_pb2.User(\n            id=request.user_id,\n            name="John Doe",\n            email="john@example.com"\n        )\n        return user_pb2.GetUserResponse(user=user)\n    \n    def CreateUser(self, request, context):\n        # Create user logic\n        user = user_pb2.User(\n            id=generate_id(),\n            name=request.name,\n            email=request.email\n        )\n        return user_pb2.CreateUserResponse(user=user)\n\ndef serve():\n    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))\n    user_pb2_grpc.add_UserServiceServicer_to_server(\n        UserServiceImpl(), server\n    )\n    server.add_insecure_port("[::]:50051")\n    server.start()\n    server.wait_for_termination()',
                },
                {
                    command: 'gRPC Client Implementation',
                    description: 'Implement gRPC client',
                    usage: 'Channel creation, service calls',
                    example: '# Python gRPC client\nimport grpc\nimport user_pb2\nimport user_pb2_grpc\n\ndef run():\n    # Create channel\n    channel = grpc.insecure_channel("localhost:50051")\n    stub = user_pb2_grpc.UserServiceStub(channel)\n    \n    # Simple RPC call\n    try:\n        request = user_pb2.GetUserRequest(user_id=123)\n        response = stub.GetUser(request)\n        print(f"User: {response.user.name}")\n        print(f"Email: {response.user.email}")\n    except grpc.RpcError as e:\n        print(f"RPC failed: {e.code()}: {e.details()}")\n    \n    # Streaming call\n    try:\n        request = user_pb2.ListUsersRequest(limit=10)\n        for user in stub.ListUsers(request):\n            print(f"User: {user.name}")\n    except grpc.RpcError as e:\n        print(f"Streaming failed: {e.code()}: {e.details()}")\n    \n    channel.close()\n\n# Go gRPC client\nconn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())\nif err != nil {\n    log.Fatalf("did not connect: %v", err)\n}\ndefer conn.Close()\n\nclient := userpb.NewUserServiceClient(conn)\nctx, cancel := context.WithTimeout(context.Background(), time.Second)\ndefer cancel()\n\nresp, err := client.GetUser(ctx, &userpb.GetUserRequest{UserId: 123})\nif err != nil {\n    log.Fatalf("could not get user: %v", err)\n}\nfmt.Printf("User: %s\\n", resp.User.Name)',
                },
                {
                    command: 'gRPC Interceptors',
                    description: 'Use interceptors for cross-cutting concerns',
                    usage: 'Unary interceptors, streaming interceptors',
                    example: '# Python gRPC interceptors\nimport time\nimport logging\nfrom grpc import UnaryUnaryClientInterceptor, UnaryUnaryServerInterceptor\n\nclass LoggingInterceptor(UnaryUnaryServerInterceptor):\n    def intercept_service(self, continuation, handler_call_details):\n        logging.info(f"Method called: {handler_call_details.method}")\n        start_time = time.time()\n        \n        response = continuation(handler_call_details)\n        \n        duration = time.time() - start_time\n        logging.info(f"Method completed in {duration:.2f}s")\n        \n        return response\n\nclass AuthInterceptor(UnaryUnaryServerInterceptor):\n    def intercept_service(self, continuation, handler_call_details):\n        metadata = dict(handler_call_details.invocation_metadata)\n        token = metadata.get("authorization")\n        \n        if not self.validate_token(token):\n            context.set_code(grpc.StatusCode.UNAUTHENTICATED)\n            context.set_details("Invalid token")\n            return grpc.unary_unary_rpc_method_handler(lambda request, context: None)\n        \n        return continuation(handler_call_details)\n    \n    def validate_token(self, token):\n        # Token validation logic\n        return token == "valid-token"\n\n# Apply interceptors\nserver = grpc.server(\n    futures.ThreadPoolExecutor(max_workers=10),\n    interceptors=[LoggingInterceptor(), AuthInterceptor()]\n)',
                },
            ],
        },
        {
            title: 'Performance & Optimization',
            commands: [
                {
                    command: 'Field Number Optimization',
                    description: 'Optimize field numbers for size',
                    usage: 'Field number ranges, varint encoding',
                    example: '// Field number optimization guidelines\nmessage OptimizedMessage {\n  // 1-15: 1 byte in tag + 1 byte for value\n  int32 small_field1 = 1;  // Most frequently used\n  int32 small_field2 = 2;\n  string small_field3 = 3;\n  bool small_field4 = 4;\n  \n  // 16-2047: 2 bytes in tag + 1 byte for value\n  int32 medium_field1 = 16;\n  string medium_field2 = 17;\n  \n  // 2048+: 3+ bytes in tag\n  int32 large_field1 = 2048;  // Rarely used\n  string large_field2 = 2049;\n}\n\n// Size comparison:\n// Field 1: tag = 0x08 (1 byte)\n// Field 16: tag = 0x80 0x01 (2 bytes)\n// Field 2048: tag = 0x80 0x80 0x10 (3 bytes)\n\nmessage SizeOptimized {\n  // Use smallest appropriate type\n  int32 id = 1;           // Instead of int64 if range allows\n  sint32 signed = 2;      // Better for negative numbers\n  fixed32 fixed = 3;      // Better for large positive numbers\n  bool flag = 4;          // Smallest possible\n  string text = 5;        // Variable length\n  bytes data = 6;         // For binary data',
                },
                {
                    command: 'Repeated Fields Optimization',
                    description: 'Optimize repeated fields and arrays',
                    usage: 'Packed encoding, field order',
                    example: 'message OptimizedArrays {\n  // Packed repeated fields (proto3 default)\n  repeated int32 numbers = 1 [packed=true];\n  repeated string tags = 2;\n  repeated bool flags = 3;\n  \n  // For better locality, group related fields\n  message Point {\n    double x = 1;\n    double y = 2;\n    double z = 3;\n  }\n  \n  repeated Point points = 4;  // Better than separate arrays\n  \n  // Use bytes for string arrays when possible\n  repeated bytes binary_data = 5;\n}\n\n// Packed vs unpacked size comparison:\n// Unpacked: [tag][value][tag][value][tag][value]...\n// Packed: [tag][length][value][value][value]...\n//\n// Packed is more efficient for:\n// - More than 2-3 elements\n// - Small primitive types\n// - Sequential access patterns',
                },
                {
                    command: 'Memory Pool Patterns',
                    description: 'Use memory pools for high-performance',
                    usage: 'Object reuse, pooling strategies',
                    example: '# Python memory pool for protobuf\nimport queue\n\nclass ProtobufPool:\n    def __init__(self, message_type, max_size=100):\n        self.message_type = message_type\n        self.pool = queue.Queue(maxsize=max_size)\n        self.max_size = max_size\n    \n    def get(self):\n        try:\n            return self.pool.get_nowait()\n        except queue.Empty:\n            return self.message_type()\n    \n    def return_to_pool(self, message):\n        message.Clear()  # Reset to default state\n        try:\n            self.pool.put_nowait(message)\n        except queue.Full:\n            pass  # Discard if pool is full\n\n# Usage\nuser_pool = ProtobufPool(user_pb2.User)\n\n# Fast message creation\nuser = user_pool.get()\nuser.id = 123\nuser.name = "John"\n# ... use message\nuser_pool.return_to_pool(user)\n\n# Go sync.Pool for protobuf\nvar userPool = sync.Pool{\n    New: func() interface{} {\n        return &userpb.User{}\n    },\n}\n\nfunc GetUserFromPool() *userpb.User {\n    user := userPool.Get().(*userpb.User)\n    user.Reset()  // Clear previous data\n    return user\n}\n\nfunc ReturnUserToPool(user *userpb.User) {\n    userPool.Put(user)\n}',
                },
                {
                    command: 'Compression Strategies',
                    description: 'Compress protobuf messages',
                    usage: 'Gzip, Snappy, custom compression',
                    example: '# Python compression\nimport gzip\nimport snappy\n\ndef compress_protobuf(data, method="gzip"):\n    if method == "gzip":\n        return gzip.compress(data)\n    elif method == "snappy":\n        return snappy.compress(data)\n    else:\n        return data\n\ndef decompress_protobuf(compressed_data, method="gzip"):\n    if method == "gzip":\n        return gzip.decompress(compressed_data)\n    elif method == "snappy":\n        return snappy.decompress(compressed_data)\n    else:\n        return compressed_data\n\n# Usage\nuser = user_pb2.User(id=123, name="John")\nserialized = user.SerializeToString()\ncompressed = compress_protobuf(serialized, "gzip")\n\n# Size comparison\nprint(f"Original: {len(serialized)} bytes")\nprint(f"Compressed: {len(compressed)} bytes")\n\n# Go compression\nfunc compressProtobuf(data []byte) ([]byte, error) {\n    var buf bytes.Buffer\n    writer := gzip.NewWriter(&buf)\n    _, err := writer.Write(data)\n    if err != nil {\n        return nil, err\n    }\n    writer.Close()\n    return buf.Bytes(), nil\n}',
                },
            ],
        },

        // EXPERT LEVEL
        {
            title: 'Production & Best Practices',
            commands: [
                {
                    command: 'Versioning Strategy',
                    description: 'Handle protobuf schema evolution',
                    usage: 'Backward compatibility, field deprecation',
                    example: '// Versioning best practices\nmessage User {\n  // Never reuse field numbers\n  reserved 2, 3, 4 to 10;\n  reserved "old_field", "deprecated_name";\n  \n  // Use optional for new fields (proto3)\n  string email = 1;\n  optional string phone = 11;  // New field\n  optional string address = 12;  // New field\n  \n  // Mark deprecated fields\n  int32 legacy_id = 13 [deprecated = true];\n  string old_format = 14 [deprecated = true];\n  \n  // Use default values carefully\n  int32 status = 15;  // 0 = unknown, good default\n}\n\n// Migration strategies:\n// 1. Add new fields as optional\n// 2. Keep old fields for backward compatibility\n// 3. Use reserved to prevent reuse\n// 4. Document breaking changes\n// 5. Provide migration tools',
                },
                {
                    command: 'Validation Patterns',
                    description: 'Implement validation for protobuf messages',
                    usage: 'Custom validation, constraints',
                    example: '# Python validation\ndef validate_user(user):\n    errors = []\n    \n    if not user.HasField("id"):\n        errors.append("ID is required")\n    elif user.id <= 0:\n        errors.append("ID must be positive")\n    \n    if not user.HasField("name"):\n        errors.append("Name is required")\n    elif len(user.name) < 2:\n        errors.append("Name must be at least 2 characters")\n    elif len(user.name) > 100:\n        errors.append("Name must be less than 100 characters")\n    \n    if user.HasField("email"):\n        if "@" not in user.email:\n            errors.append("Invalid email format")\n    \n    if errors:\n        raise ValueError("; ".join(errors))\n    \n    return True\n\n# Go validation with protobuf options\nfunc (u *User) Validate() error {\n    if u == nil {\n        return errors.New("user is nil")\n    }\n    \n    if u.Id <= 0 {\n        return errors.New("ID must be positive")\n    }\n    \n    if len(u.Name) < 2 {\n        return errors.New("name must be at least 2 characters")\n    }\n    \n    if u.Email != "" && !strings.Contains(u.Email, "@") {\n        return errors.New("invalid email format")\n    }\n    \n    return nil\n}',
                },
                {
                    command: 'Error Handling',
                    description: 'Robust error handling for protobuf',
                    usage: 'Status codes, error messages',
                    example: '# Python gRPC error handling\nimport grpc\nfrom grpc_status import rpc_status\nfrom google.rpc import error_details_pb2\n\ndef handle_grpc_error(error):\n    if isinstance(error, grpc.RpcError):\n        status = rpc_status.from_call(error)\n        \n        if status:\n            for detail in status.details:\n                if isinstance(detail, error_details_pb2.ErrorInfo):\n                    print(f"Error: {detail.reason}")\n                    print(f"Domain: {detail.domain}")\n                    print(f"Metadata: {detail.metadata}")\n                elif isinstance(detail, error_details_pb2.BadRequest):\n                    print(f"Field violations: {detail.field_violations}")\n        \n        print(f"RPC Error: {error.code()}: {error.details()}")\n        return error.code()\n    \n    return grpc.StatusCode.UNKNOWN\n\n# Go error handling\nfunc (s *userServiceServer) GetUser(ctx context.Context, req *pb.GetUserRequest) (*pb.GetUserResponse, error) {\n    if req.UserId <= 0 {\n        return nil, status.Error(codes.InvalidArgument, "user ID must be positive")\n    }\n    \n    user, err := s.repository.GetUser(req.UserId)\n    if err != nil {\n        if errors.Is(err, ErrNotFound) {\n            return nil, status.Error(codes.NotFound, "user not found")\n        }\n        return nil, status.Error(codes.Internal, "internal error")\n    }\n    \n    return &pb.GetUserResponse{User: user}, nil\n}',
                },
                {
                    command: 'Testing Strategies',
                    description: 'Test protobuf-based applications',
                    usage: 'Unit tests, integration tests, fuzzing',
                    example: '# Python protobuf testing\nimport unittest\nimport user_pb2\nfrom user_service import UserService\n\nclass TestUserService(unittest.TestCase):\n    def setUp(self):\n        self.service = UserService()\n    \n    def test_create_user(self):\n        request = user_pb2.CreateUserRequest(\n            name="John Doe",\n            email="john@example.com"\n        )\n        \n        response = self.service.CreateUser(request, None)\n        \n        self.assertIsNotNone(response.user)\n        self.assertEqual(response.user.name, "John Doe")\n        self.assertEqual(response.user.email, "john@example.com")\n        self.assertGreater(response.user.id, 0)\n    \n    def test_serialization_roundtrip(self):\n        original = user_pb2.User(\n            id=123,\n            name="John",\n            email="john@example.com"\n        )\n        \n        serialized = original.SerializeToString()\n        deserialized = user_pb2.User()\n        deserialized.ParseFromString(serialized)\n        \n        self.assertEqual(original, deserialized)\n    \n    def test_invalid_user_validation(self):\n        invalid_user = user_pb2.User()  # Missing required fields\n        \n        with self.assertRaises(ValueError):\n            validate_user(invalid_user)\n\n# Go protobuf testing\nfunc TestUserService_GetUser(t *testing.T) {\n    service := NewUserService(mockRepository{})\n    \n    tests := []struct {\n        name    string\n        request *pb.GetUserRequest\n        want    *pb.GetUserResponse\n        wantErr bool\n    }{\n        {\n            name: "valid user",\n            request: &pb.GetUserRequest{UserId: 123},\n            want: &pb.GetUserResponse{\n                User: &pb.User{Id: 123, Name: "John"},\n            },\n            wantErr: false,\n        },\n        {\n            name: "invalid user id",\n            request: &pb.GetUserRequest{UserId: -1},\n            want:    nil,\n            wantErr: true,\n        },\n    }\n    \n    for _, tt := range tests {\n        t.Run(tt.name, func(t *testing.T) {\n            got, err := service.GetUser(context.Background(), tt.request)\n            if (err != nil) != tt.wantErr {\n                t.Errorf("GetUser() error = %v, wantErr %v", err, tt.wantErr)\n                return\n            }\n            if !reflect.DeepEqual(got, tt.want) {\n                t.Errorf("GetUser() = %v, want %v", got, tt.want)\n            }\n        })\n    }\n}',
                },
            ],
        },
    ],
};
