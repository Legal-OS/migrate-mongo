const path = require("path");
const resolveMigrationsDirPath = require("./resolveMigrationsDirPath");

const loadMigration = (migrationsDirPath, fileName) => {
  if (!migrationsDirPath) {
    throw new Error("No migrations path found");
  }

  const filePath = path.join(
    resolveMigrationsDirPath(migrationsDirPath),
    fileName
  );

  return require(filePath);
};

module.exports = loadMigration;
