export const ENTER_SUBJECT_NAME = "Enter the name of the subject";
export const CPP_SUBJECTS = [
  "CPP00",
  "CPP01",
  "CPP02",
  "CPP03",
  "CPP04",
  "CPP05",
  "CPP06",
  "CPP07",
  "CPP08",
  "CPP09",
] as const;

export type SubjectMapKey = (typeof CPP_SUBJECTS)[number];

export const subjectMap = {
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
} as const;
