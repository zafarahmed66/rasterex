const fs = require("fs");
const path = require("path");

const name = process.argv[2];

const imgDir = path.join(__dirname, `/img/${name}`); // Directory where your images are located
const outputFile = path.join(__dirname, `${name}.mdx`); // File to write the imports

// Read the files in the 'img' directory
fs.readdir(imgDir, (err, files) => {
  if (err) {
    console.error("Error reading the directory:", err);
    return;
  }

  const importStatements = files
    .filter((file) => /\.(png|jpg|jpeg|gif|svg)$/i.test(file)) // Filter for image files
    .map((file) => {
      const variableName = file
        .replace(/\.(png|jpg|jpeg|gif|svg)$/i, "") // Remove extension
        .replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters
      return `import ${variableName} from "./img/${name}/${file}";`;
    })
    .join("\n");

  // Write the import statements to the output file
  fs.writeFile(outputFile, importStatements, (err) => {
    if (err) {
      console.error("Error writing the file:", err);
    } else {
      console.log("Import statements generated successfully!");
    }
  });
});
