import * as vscode from "vscode";
import * as format from "../format";
import selectDirectoryRecursively from "../utils/dir";

const createClassCommand = async () => {
  const rootPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
  if (!rootPath) {
    vscode.window.showErrorMessage("Please open a folder as workspace");
    return;
  }

  const result = await selectDirectoryRecursively(rootPath);
  if (result) {
    const className = await vscode.window.showInputBox({
      prompt: "Enter the name of the class to create!",
      placeHolder: "MyClassName",
    });
    if (!className) {
      return;
    }
    format.createCppClass(result, className);
    format.createHppClass(result, className);
  }
};

export default createClassCommand;
