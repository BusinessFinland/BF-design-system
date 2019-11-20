const fs = require('fs');
const path = require('path');
const htmlRenderer = require('./renderers/htmlRenderer');

// Handles only two levels deep
// Enhance if deep nesting needed
function createPages(filesPath = '', pages = [], folderName = 'parent') {
  const fileNames = fs.readdirSync(filesPath);

  fileNames.forEach(fileName => {
    const filePath = path.resolve(filesPath, fileName);

    if (isDirectory(filePath)) {
      createPages(filePath, pages, fileName);
    } else {
      const fileContent = fs.readFileSync(filePath, {
        encoding: 'UTF-8'
      });

      pages.push({
        fileName,
        folderName,
        body: htmlRenderer.render(fileContent)
      });
    }
  });

  function isDirectory(filePath) {
    return fs.lstatSync(filePath).isDirectory();
  }

  return pages;
}

const pages = createPages(path.resolve(__dirname, '../..', 'pages'));
fs.writeFileSync(path.join(__dirname, '..', 'pages.json'), JSON.stringify(pages));
