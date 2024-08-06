import vscode from "vscode";
import fs from "fs";
import path from "path";
import createExercise from "../exercise";
import { CPP_SUBJECTS } from "../constants";

const ScaffoldFn = () => {
  const currPath = vscode.workspace?.workspaceFolders?.[0]?.uri.fsPath;
  if (!currPath) {
    vscode.window.showErrorMessage("Please open a fodler as workspace");
    return;
  }
  const currFolder = path.basename(currPath);
  console.log(currFolder.toUpperCase());
  if (CPP_SUBJECTS.some((subject) => subject === currFolder.toUpperCase())) {
    createExercise(currPath, currFolder.toUpperCase());
    return;
  }
  vscode.window.showQuickPick(CPP_SUBJECTS).then((subject) => {
    if (!subject) {
      return;
    }
    subject = subject.toUpperCase();
    vscode.window
      .showQuickPick(["Create Subject Folder", "Do not create Subject Folder"])
      .then((result) => {
        if (!result) {
          return;
        }
        if (result === "Create Subject Folder") {
          fs.mkdirSync(path.join(currPath, subject.toLocaleLowerCase()));
          createExercise(
            path.join(currPath, subject.toLocaleLowerCase()),
            subject
          );
          return;
        }
        createExercise(currPath, subject);
        return;
      });
  });
};

export default ScaffoldFn;
