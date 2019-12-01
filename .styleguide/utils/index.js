export function capitalizeFirstLetter(string) {
  if (string.length < 3) {
    return string.toUpperCase();
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeString(string) {
  return string
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');
}

export function replaceDashWithSpace(string) {
  return string.replace('-', ' ');
}

export function getPageName(fileName) {
  const [pageName] = fileName.split('.');
  return pageName;
}

export function getAnchor(pageName) {
  return `#${pageName}`;
}

export function importAllImages() {
  function importAll(r) {
    return r.keys().forEach(r);
  }

  importAll(require.context('../../assets/images/', false, /\.(png|jpe?g|svg)$/));
}

export function isParentCategory(categoryName) {
  return categoryName === 'parent';
}
