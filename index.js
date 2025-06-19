const log = message => console.log(`[${(performance.now() / 1000).toFixed(2)}] ${message}`);

/*const fs = require('fs').promises;
const path = require('path');
const JsConfuser = require('js-confuser');
const obfuscatedJsCache = new Map();
const publicDir = path.join(__dirname, 'public');
const jsConfuserConfig = {
  "target": "browser",
  "preset": "low",
  "calculator": false,
  "compact": false,
  "hexadecimalNumbers": true,
  "deadCode": 0.05,
  "dispatcher": 0.0,
  "duplicateLiteralsRemoval": 0.0,
  "identifierGenerator": "randomized",
  "minify": true,
  "movedDeclarations": true,
  "objectExtraction": true,
  "renameVariables": true,
  "renameGlobals": false,
  "stringConcealing": true,
  "astScrambler": false
};
async function obfuscateDirectory(dir) {
    log(`Starting obfuscation scan for directory: ${dir}`);
    const files = await fs.readdir(dir, {
      withFileTypes: true
    });
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        await obfuscateDirectory(fullPath);
      } else if (file.isFile() && path.extname(file.name) === '.js') {
        const requestPath = '/' + path.relative(publicDir, fullPath).replace(/\\/g, '/');
        try {
          log(`Obfuscating: ${requestPath} (from ${fullPath})`);
          const originalCode = await fs.readFile(fullPath, 'utf-8');
          const obfuscatedCode = (await JsConfuser.obfuscate(originalCode, jsConfuserConfig)).code;
          obfuscatedJsCache.set(requestPath, obfuscatedCode);
          log(`Cached obfuscated code for: ${requestPath}`);
        } catch (error) {
          console.error(`[ERROR] Failed to obfuscate ${fullPath}:`, error);
        }
      }
    }
  }
  (async () => {
    try {
      await obfuscateDirectory(publicDir);
      log(`Initial obfuscation complete. ${obfuscatedJsCache.size} JS files cached.`);
    } catch (err) {
      log("[FATAL] Obfuscation process failed during startup.");
      console.error(err);
      process.exit(1);
    }
    log("Starting Web Application setup...");
    const express = require("express");
    const minify = require("express-minify");
    const cors = require("cors");
    const web = express();
    const compression = require("compression");
    const port = process.env.PORT ?? 3001;
    web.use(compression());
    web.use((req, res, next) => {
      if (req.method === 'GET' && req.path.endsWith('.js')) {
        const cachedCode = obfuscatedJsCache.get(req.path);
        if (cachedCode) {
          log(`Serving obfuscated JS from memory: ${req.path}`);
          res.type('application/javascript');
          return res.send(cachedCode);
        }
      }
      next();
    });
    //web.use(minify());
    web.use(cors());
    web.use("/preview", express.static("skutsu"));
    web.use("/dev", express.static("dev"));
    web.use(express.static(publicDir));
    web.use(express.json());
    web.listen(port, () => log(`Web Application is live and listening on port ${port}.`));
  })().catch(err => {
    log("[FATAL] Error during server startup.");
    console.error(err);
    process.exit(1);
  });*/



const webApplication = (function () {
	log("Starting Web Application...");
	const express = require("express");
	const minify = require("express-minify");
	const cors = require("cors");
	const web = express();
	const compression = require("compression");
	const port = process.env.PORT ?? 3001;
	web.use(compression());
	web.use(minify());
	web.use(cors());
	web.use(express.static("docs"));
	web.use(express.json());
	web.listen(port, () => log(`Web Application is live and listening on port ${port}.`));
	return web;
})();
