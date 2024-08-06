import * as fs from "fs";
import * as path from "path";
import createMakefile from "./touchMakefile";
import { subjectMap, SubjectMapKey } from "./constants";

const createExercise = (subjectPath: string, subject: string) => {
  if (!fs.existsSync(subjectPath)) {
    throw new Error(`The subject ${subject} already exists`);
  }
  if (Object.keys(subjectMap).every((key) => key !== subject.toUpperCase())) {
    throw new Error(`The subject ${subject} is not valid`);
  }
  Object.keys(subjectMap).forEach((key) => {
    if (key === subject.toUpperCase()) {
      const exs = subjectMap[key as SubjectMapKey];
      exs.forEach((ex) => {
        const exPath = path.join(subjectPath, ex);
        if (!fs.existsSync(exPath)) {
          fs.mkdirSync(exPath);
          createMakefile(exPath);
        }
      });
    }
  });
};

export default createExercise;
