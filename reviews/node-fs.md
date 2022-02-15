# Review 2/15/22 - Node File System Module

Initilize/run JS files in Node with `node path/to/file.js`

## CommonJS

Node was released in 2009 before ESM syntax for importing and exporting modules, so it was built around _CommonJS_ for JS module structure.

Example: `const fs = require("fs")`

## File Manipulation Methods

Import the _fs_ module: `const fs = require("fs")`

### Files

- `readFile` - read
- `writeFile` - create
- `appendFile` - update
- `unlink` - delete
- `rename` - rename or move

### Folders

- `readdir` - read
- `mkdir` - create
- `existsSync` - check if folder exists
- `rm(folderName, { recursive: true, force: true }, callback)` - delete
- `rename` - rename or move

## Conventions

All _fs_ methods take a callback function to be executed after the action is completed

By convention, the first param is always an error if thrown (if not, the param value is `null`)

## Path Module

Use the global variable `__dirname` to access the absolute path of the current file

File Path Methods:

- `join` - joins two file paths together
- `filename` - returns the filename
- `dirname` - returns the directory name
- `extname` - returns the file extension
- `parse` - returns an object with dirname, basename, extname, filename
