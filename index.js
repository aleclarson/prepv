let fs = require('fsx')

// Merge .npmignore into .gitignore
exports.npmignore = function() {
  if (!fs.isFile('.gitignore')) {
    return fs.rename('.npmignore', '.gitignore')
  }

  let npm = fs.readFile('.npmignore').trim().split('\n')
  let git = fs.readFile('.gitignore').trim().split('\n')

  // Negation in .npmignore overrides .gitignore
  git = git.filter(path => !npm.includes('!' + path))

  // Merge .npmignore into .gitignore without duplicates
  npm.forEach(path => git.includes(path) || git.push(path))

  // Use .gitignore instead of .npmignore
  fs.writeFile('.gitignore', git.join('\n'))
  fs.removeFile('.npmignore')
}
