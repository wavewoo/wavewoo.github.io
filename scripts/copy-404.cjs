const fs = require('fs');
const path = require('path');

// Read the built index.html
let indexContent = fs.readFileSync('dist/index.html', 'utf8');

// Replace the script with the 404 redirect script
const newScript = `<script type="text/javascript">
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>`;

// Replace the existing script
indexContent = indexContent.replace(
  /<script type="text\/javascript">[\s\S]*?<\/script>/,
  newScript
);

// Write 404.html
fs.writeFileSync('dist/404.html', indexContent);
console.log('404.html created successfully!');