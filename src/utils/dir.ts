import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

async function selectDirectoryRecursively(
  currentPath: string
): Promise<string | undefined> {
  const directories = getDirectories(currentPath);
  const items: vscode.QuickPickItem[] = [
    { label: "$(check) Choose this folder", description: currentPath },
    {
      label: "$(arrow-up) Go to parent folder",
      description: path.dirname(currentPath),
    },
    ...directories.map((dir) => ({
      label: dir,
      description: path.join(currentPath, dir),
    })),
  ];

  const selection = await vscode.window.showQuickPick(items, {
    placeHolder: "Select a directory",
  });

  if (!selection) {
    return undefined;
  }

  switch (selection.label) {
    case "$(check) Choose this folder":
      return currentPath;
    case "$(arrow-up) Go to parent folder":
      return selectDirectoryRecursively(path.dirname(currentPath));
    default:
      return selectDirectoryRecursively(
        path.join(currentPath, selection.label)
      );
  }
}

function getDirectories(sourcePath: string): string[] {
  return fs
    .readdirSync(sourcePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

export default selectDirectoryRecursively;
