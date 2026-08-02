const fs = require('fs');
const path = require('path');

const taxonomyFile = path.join(__dirname, '../../taxonomy-tree.json');
const readmeFile = path.join(__dirname, '../../README.md');

const taxonomy = JSON.parse(fs.readFileSync(taxonomyFile, 'utf8'));

let treeMd = '### 🗺️ Architecture Taxonomy Tree\n\n';

taxonomy.level_2_and_3.concepts.forEach(concept => {
  treeMd += `- **${concept.name}**\n`;
  concept.clusters.forEach(cluster => {
    treeMd += `  - ${cluster.name}\n`;
    cluster.services.forEach(service => {
      treeMd += `    - ${service}\n`;
    });
  });
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
