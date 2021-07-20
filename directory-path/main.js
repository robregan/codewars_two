// Returns the commom directory path for specified array of full filenames.

//  @param {array} pathes
//  @return {string}
// Examples:

//   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
//   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
//   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
//   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'

function getCommonDirectoryPath(paths) {
    let split = paths.map(path => path.split('/')), arr = [], idx = 0;
    while (true) {
      let p = split[0][idx];
      if (split.every(splitPath => splitPath[idx] === p)) {
        arr.push(p);
        idx += 1;
      } else break;
    }
    return arr.length === 0 ? '' : arr.join('/') + '/';
  } 

// or
function getCommonDirectoryPath(paths) {
    const dirs = paths.map(path => path.split("/"));
    const index = dirs[0].findIndex((folder, i) => dirs.some(dir => folder != dir[i]));
    return index ? dirs[0].slice(0, index).join("/") + "/" : "";
  }
// reg exp
function getCommonDirectoryPath(paths) {
  
    const str = paths.join('|')
    ,   match = str.match(/^([^|]*\/)[^|]*(\|\1[^|]*)*$/);
    
    return match ? match[1] : '';
    
  }
  