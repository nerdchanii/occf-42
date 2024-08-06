export default (className: string) => `#include "${className}.hpp"

${className}::${className}(){

}

${className}::${className}(const ${className} &other){
    *this = other;
}

${className} &${className}::operator=(const ${className} &other){
    if (this != &other){
    }
    return *this;
}

${className}::~${className}(){

}

`;
