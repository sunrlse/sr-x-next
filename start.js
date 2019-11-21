var cmd = require('node-cmd');

// cmd.run('npm start'); // pm2 启动可用，但是会自动打开一个win自带的cmd窗口，关掉会无限自动打开

// 解决方案：   https://github.com/Unitech/pm2/issues/2808

var exec = require('child_process').exec;

exec('npm start', { windowsHide: true });

/*   
*  但是无法查看Logs  查看如下：
*
$ pm2 log
[TAILING] Tailing last 15 lines for [all] processes (change the value with --lines option)
C:\Users\cm\.pm2\pm2.log last 15 lines:
PM2        | 2019-11-21T15:23:03: PM2 log: Stopping app:start id:0
PM2        | 2019-11-21T15:23:04: PM2 log: App [start:0] exited with code [1] via signal [SIGINT]
PM2        | 2019-11-21T15:23:04: PM2 log: pid=228244 msg=process killed
PM2        | 2019-11-21T15:23:33: PM2 log: App [start:0] starting in -fork mode-
PM2        | 2019-11-21T15:23:33: PM2 log: App [start:0] online
PM2        | 2019-11-21T15:23:48: PM2 log: Stopping app:start id:0
PM2        | 2019-11-21T15:23:48: PM2 log: App [start:0] exited with code [1] via signal [SIGINT]
PM2        | 2019-11-21T15:23:48: PM2 log: pid=225200 msg=process killed
PM2        | 2019-11-21T15:27:32: PM2 log: App [start:0] starting in -fork mode-
PM2        | 2019-11-21T15:27:32: PM2 log: App [start:0] online
PM2        | 2019-11-21T15:32:29: PM2 log: Stopping app:start id:0
PM2        | 2019-11-21T15:32:30: PM2 log: App [start:0] exited with code [1] via signal [SIGINT]
PM2        | 2019-11-21T15:32:30: PM2 log: pid=234248 msg=process killed
PM2        | 2019-11-21T15:34:43: PM2 log: App [start:0] starting in -fork mode-
PM2        | 2019-11-21T15:34:43: PM2 log: App [start:0] online

C:\Users\cm\.pm2\logs\start-out.log last 15 lines:
C:\Users\cm\.pm2\logs\start-error.log last 15 lines:
0|start    | C:\Users\cm\AppData\Roaming\nvm\v10.15.3\NPM.CMD:1
0|start    | (function (exports, require, module, __filename, __dirname) { :: Created by npm, please don't edit manually.
0|start    |                                                               ^
0|start    |
0|start    | SyntaxError: Unexpected token :
0|start    |     at new Script (vm.js:80:7)
0|start    |     at createScript (vm.js:274:10)
0|start    |     at Object.runInThisContext (vm.js:326:10)
0|start    |     at Module._compile (internal/modules/cjs/loader.js:664:28)
0|start    |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
0|start    |     at Module.load (internal/modules/cjs/loader.js:600:32)
0|start    |     at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
0|start    |     at Function.Module._load (internal/modules/cjs/loader.js:531:3)
0|start    |     at Object.<anonymous> (C:\Users\cm\AppData\Roaming\nvm\v10.15.3\node_modules\pm2\lib\ProcessContainerFork.js:27:21)
0|start    |     at Module._compile (internal/modules/cjs/loader.js:701:30)

*/