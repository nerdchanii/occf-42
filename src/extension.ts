// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import createExercise from "./exercise";

const ENTER_SUBJECT_NAME = "Enter the name of the subject";
const CPP_SUBJECTS = [
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
];

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // console.log('Congratulations, your extension "occf-42" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  vscode.window.showInformationMessage("Hello VsCode Extension!");
  const disposable = vscode.commands.registerCommand("cpp-scaffold", () => {
    vscode.window.showQuickPick(CPP_SUBJECTS).then((subject) => {
      if (!subject) return;
      subject = subject.toLowerCase();
      const currPath = vscode.workspace?.workspaceFolders?.[0]?.uri.fsPath;
      if (currPath === undefined) {
        vscode.window.showErrorMessage(
          "please open a folder that you want to create the subject as workspace\n like ~/cpp00 or ~/cpp01"
        );
        return;
      }
      const currFolder = path.dirname(currPath);
      if (currFolder !== subject) {
        vscode.window.showErrorMessage(
          "please open a folder that you want to create the subject as workspace\n like ~/cpp00 or ~/cpp01"
        );
        return;
      }
      if (fs.existsSync(currPath)) {
        createExercise(currPath, subject);
      }
    });
  });
  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
