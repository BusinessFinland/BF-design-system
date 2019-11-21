import fs from 'fs';
import path from 'path';
import { getPageName } from '../utils';
import htmlRenderer from './renderers/htmlRenderer';

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
        folderName,
        fileName: fileName.toLowerCase(),
        body: htmlRenderer.render(fileContent),
        path: pages.length ? `/${getPageName(fileName).toLowerCase()}` : '/'
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
