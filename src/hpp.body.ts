export default (className: string) => `#pragma once

class ${className} {
    private:

    public:
        ${className}();
        ${className}(const ${className} &other);
        ${className} &operator=(const ${className} &other);
        ~${className}();
};
`;
