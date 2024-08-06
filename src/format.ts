import * as fs from "fs";
import * as path from "path";
import CppBody from "./cpp.body";
import HppBody from "./hpp.body";

const createCppClass = (currPath: string, className: string) => {
  const classPath = path.join(currPath, `${className}.cpp`);

  if (fs.existsSync(classPath)) {
    return;
  }

  fs.writeFileSync(classPath, CppBody(className));
};

const createHppClass = (currPath: string, className: string) => {
  const headerPath = path.join(currPath, `${className}.hpp`);

  if (fs.existsSync(headerPath)) {
    return;
  }
  fs.writeFileSync(headerPath, HppBody(className));
};

export { createCppClass, createHppClass };
