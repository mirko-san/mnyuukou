import { compress } from "zip";
import { format } from "datetime";
import { exists } from "fs/exists.ts";
import { emptyDir } from 'fs/empty_dir.ts';

const date = format(new Date(), 'yyyy-MM-dd_hh-mm-ss');

if (!await exists("data/work_dir")) {
  throw new Error("Must exists 'work_dir'.");
}

if (!await exists("dist")) {
  await emptyDir("dist");
}

await compress("data/work_dir", `dist/${date}.zip`);
