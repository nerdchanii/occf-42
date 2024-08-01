import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

type SubjectMapKey =
  | "CPP00"
  | "CPP01"
  | "CPP02"
  | "CPP03"
  | "CPP04"
  | "CPP05"
  | "CPP06"
  | "CPP07"
  | "CPP08"
  | "CPP09";

const subjectMap = {
  CPP00: ["ex00", "ex01", "ex02"],
  CPP01: ["ex00", "ex01", "ex02", "ex03", "ex04", "ex05", "ex06"],
  CPP02: ["ex00", "ex01", "ex02", "ex03"],
  CPP03: ["ex00", "ex01", "ex02", "ex03"],
  CPP04: ["ex00", "ex01", "ex02", "ex03"],
  CPP05: ["ex00", "ex01", "ex02", "ex03"],
  CPP06: ["ex00", "ex01", "ex02"],
  CPP07: ["ex00", "ex01", "ex02"],
  CPP08: ["ex00", "ex01", "ex02"],
  CPP09: ["ex00", "ex01", "ex02"],
};

const createExercise = (currPath: string, subject: string) => {
  const subjectPath = path.join(currPath, subject);
  if (!fs.existsSync(subjectPath)) {
    throw new Error(`The subject ${subject} already exists`);
  }
  if (Object.keys(subjectMap).every((key) => key !== subject.toUpperCase()))
    throw new Error(`The subject ${subject} is not valid`);

  Object.keys(subjectMap).forEach((key) => {
    if (key === subject.toUpperCase()) {
      const exs = subjectMap[key as SubjectMapKey];
      exs.forEach((ex) => {
        const exPath = path.join(subjectPath, ex);
        fs.mkdirSync(exPath);
      });
    }
  });
};

export default createExercise;
