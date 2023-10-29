import scan from "scan-dir-recursive";

const source = "/mnt/c/Users/vahid/Videos/Captures";



scan(source, function (files) {
    console.log("Files:\n", files);
});
