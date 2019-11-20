export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function replaceDashWithSpace(string) {
  return string.replace('-', ' ');
}

export function getPageName(fileName) {
  const [pageName] = fileName.split('.');
  return pageName;
}

export function getPagesByCategory(pages) {
  const pagesByCategory = {};

  pages.forEach(page => {
    const { folderName } = page;
    if (pagesByCategory[folderName]) {
      pagesByCategory[folderName].push(page);
    } else {
      pagesByCategory[folderName] = [page];
    }
  });

  return pagesByCategory;
}

export function getAnchor(pageName) {
  return `#${pageName}`;
}

export function importAllImages() {
  function importAll(r) {
    return r.keys().forEach(r);
  }

  importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));
}

export function isParentCategory(categoryName) {
  return categoryName === 'parent';
}
