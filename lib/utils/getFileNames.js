const path = require("path");
const fs = require("fs");
const resolveMigrationsDirPath = require("./resolveMigrationsDirPath");

const getFileNames = async migrationsDirPath => {
  const migrationsDir = resolveMigrationsDirPath(migrationsDirPath);
  const files = await new Promise((resolve, reject) =>
    fs.readdir(migrationsDir, (err, fileList) => {
      if (!err) {
        resolve(fileList);
      } else {
        reject(err);
      }
    })
  );
  return files.filter(file => path.extname(file) === ".js");
};

module.exports = getFileNames;
