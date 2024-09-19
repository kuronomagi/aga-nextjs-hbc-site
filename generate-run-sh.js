const fs = require('fs');
const path = require('path');

// run.sh の内容
const runShContent = `#!/bin/bash

[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache

HOSTNAME=0.0.0.0 exec node server.js
`;

const outputDir = path.join(__dirname, 'dist', 'standalone'); // dist/standalone ディレクトリ
const outputPath = path.join(outputDir, 'run.sh');

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// run.sh ファイルを生成
fs.writeFileSync(outputPath, runShContent, { mode: 0o755 });

console.log('run.sh file has been generated.');
