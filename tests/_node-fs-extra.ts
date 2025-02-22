import { runInRepo } from "../utils";
import { RunOptions } from "../types";

export async function test(options: RunOptions) {
  await runInRepo({
    ...options,
    repo: "jprichardson/node-fs-extra",
    branch: "master",
    build: [],
    test: ["unit", "unit:esm"],
  });
}
