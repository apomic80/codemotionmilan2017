const { app, BrowserWindow, Menu, Tray, nativeImage } = require('electron')

let win;

const name = app.getName();
let template = [{
        label: name,
        submenu: [{
                label: `About name`,
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'Cmd+Q',
                click: function() { app.quit() }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [{
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            {
                role: 'pasteandmatchstyle'
            },
            {
                role: 'delete'
            },
            {
                role: 'selectall'
            }
        ]
    },
    {
        label: 'View',
        submenu: [{
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click(item, focusedWindow) {
                    if (focusedWindow) focusedWindow.reload()
                }
            },
            {
                label: 'Toggle Developer Tools',
                accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
                click(item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.toggleDevTools()
                }
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'window',
        submenu: [{
                role: 'minimize'
            },
            {
                role: 'close'
            }
        ]
    },
    {
        role: 'help',
        submenu: [{
            label: 'Learn More',
            click() { require('electron').shell.openExternal('http://electron.atom.io') }
        }]
    }
]

function createWindow() {

    win = new BrowserWindow({
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    });

    win.loadURL('file://' + __dirname + '/dist/index.html');

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    const appIcon = new Tray(nativeImage.createEmpty());
    var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ]);
    appIcon.setToolTip('This is my application.');
    appIcon.setContextMenu(contextMenu);
}

app.on('ready', createWindow);