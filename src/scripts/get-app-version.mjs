// import { readdir } from "node:fs/promises";
import { readdirSync } from "node:fs";
// import path from "path";

const getAppVersion = () => {
    // const dirname = path.dirname(new URL(import.meta.url).pathname);
    // const filePath = path.resolve(dirname, "../../apps");
    // console.log("Path: ", filePath);
    const files = readdirSync(new URL("../../apps", import.meta.url));
    const fileName = files.filter((file) => file.endsWith(".zip"))[0];
    const version = fileName.slice(10, 17);
    return version;
};

const x = getAppVersion();
console.log(x);
