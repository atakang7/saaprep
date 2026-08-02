const fs = require('fs');
const path = require('path');

const taxonomyFile = path.join(__dirname, '../../taxonomy-tree.json');
const readmeFile = path.join(__dirname, '../../README.md');

const taxonomy = JSON.parse(fs.readFileSync(taxonomyFile, 'utf8'));

const baseUrl = 'https://atakang7.github.io/saaprep';

function getTopicSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getCanonicalServiceId(serviceName) {
  return serviceName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

let treeMd = '### 🗺️ Architecture Taxonomy Tree\n\n';

taxonomy.level_2_and_3.concepts.forEach(concept => {
  const conceptId = getTopicSlug(concept.name);
  treeMd += `<details>\n`;
  treeMd += `  <summary><b><a href="${baseUrl}/concepts#${conceptId}">${concept.name}</a></b></summary>\n`;
  treeMd += `  <ul>\n`;
  
  concept.clusters.forEach(cluster => {
    const topicSlug = getTopicSlug(cluster.name);
    treeMd += `    <li>\n`;
    treeMd += `      <details>\n`;
    treeMd += `        <summary><a href="${baseUrl}/topics/${topicSlug}">${cluster.name}</a></summary>\n`;
    treeMd += `        <ul>\n`;
    
    cluster.services.forEach(service => {
      const serviceSlug = getCanonicalServiceId(service);
      treeMd += `          <li><a href="${baseUrl}/services/${serviceSlug}">${service}</a></li>\n`;
    });
    
    treeMd += `        </ul>\n`;
    treeMd += `      </details>\n`;
    treeMd += `    </li>\n`;
  });
  
  treeMd += `  </ul>\n`;
  treeMd += `</details>\n\n`;
});

let readme = fs.readFileSync(readmeFile, 'utf8');

const startMarker = '<!-- TREE_START -->';
const endMarker = '<!-- TREE_END -->';

const startIndex = readme.indexOf(startMarker);
const endIndex = readme.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  readme = readme.substring(0, startIndex + startMarker.length) + '\n\n' + treeMd + '\n' + readme.substring(endIndex);
  fs.writeFileSync(readmeFile, readme);
  console.log('README updated with taxonomy tree.');
} else {
  console.error('Could not find TREE_START and TREE_END markers in README.');
  process.exit(1);
}
