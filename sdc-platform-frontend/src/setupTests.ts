/**
 *  Copyright 2023 ASTRON
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
// import { cleanup } from "@testing-library/react";
// import { afterEach, vi } from "vitest";

// Element.prototype.scrollTo = () => {};
const originalConsoleError = console.error;
const spammedViTestErrorToSuppress = "Error: Could not parse CSS stylesheet";
console.error = function (...data) {
  if (typeof data[0]?.toString === "function" && data[0].toString().includes(spammedViTestErrorToSuppress)) return;
  originalConsoleError(...data);
};
