/**
 * readFile('package.json', 'utf8', (err, data) => {
    console.log(data);
    });
    // ==========
    const data = await promiseify(readFile)('package.json');
    console.log(data);

    function promiseify(){
    // coding
    }
 */

function promiseify(func) {
  return function (path) {
    return new Promise((resolve, reject) => {
      readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}
