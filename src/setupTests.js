// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

test("renders task list", () => {
  const tasks = [{ id: 1, title: "Sample Task" }];
  render(<TaskList tasks={tasks} updateTask={() => {}} deleteTask={() => {}} />); 
  const taskElement = screen.getByText(/Sample Task/i);
  expect(taskElement).toBeInTheDocument();
});