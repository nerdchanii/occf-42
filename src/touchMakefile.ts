import exp from "constants";
import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import { MakefileBody } from "./makefile.body";

const createMakefile = (exPath: string) => {
  if (!fs.existsSync(exPath) || fs.existsSync(path.join(exPath, "Makefile"))) {
    return;
  }
  if (!fs.existsSync(path.join(exPath, "Makefile"))) {
    fs.writeFileSync(path.join(exPath, "Makefile"), MakefileBody("a.out"));
  }
  return;
};

export default createMakefile;
