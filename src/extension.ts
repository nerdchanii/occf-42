// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import ScaffoldFn from "./cmds/scaffold";
import createClassCommand from "./cmds/createClassCommand";

export function activate(context: vscode.ExtensionContext) {
  const scaffoldCommandDisposable = vscode.commands.registerCommand(
    "occf-42.scaffold-cpp-module",
    ScaffoldFn
  );

  const createClassCommandDisposable = vscode.commands.registerCommand(
    "occf-42.createClass",
    createClassCommand
  );

  context.subscriptions.push(scaffoldCommandDisposable);
}

export function deactivate() {}
