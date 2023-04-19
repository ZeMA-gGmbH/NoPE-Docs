const nope = require("nope-js-node");
const fs = require("fs/promises");

const replaceAll = nope.replaceAll;
const listFiles = nope.listFiles;

const readFile = fs.readFile;
const writeFile = fs.writeFile;

async function main(){

    const mds = await listFiles("./docs/api", ".md");

    const promises = [];

    for (const file of mds){
        // Read the Files:
        promises.push(
            readFile(file, {
                encoding: "utf-8"
            })
        )
    }
    const contents = await Promise.all(promises);

    const writing = [];

    for (let [idx, content] of contents.entries()){
        const path = mds[idx];

        // content = content.replaceAll(/(?<!\\)`</g, '`\\<');
        // content = content.replaceAll(/`\\>/g, '`\\\\>');
        content = content.replaceAll(/\\</g, '<');

        console.log("adapting ",path)
        
        
        writing.push(
            writeFile(
                path,
                content
            )
        )
    }

    await Promise.all(writing);

 
}

main().catch(console.error).then(_ => {

    // Done;
});