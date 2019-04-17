const path = require("path");

const resolveMigrationsDirPath = migrationDir =>
  path.isAbsolute(migrationDir)
    ? migrationDir
    : path.join(process.cwd(), migrationDir);

module.exports = resolveMigrationsDirPath;
