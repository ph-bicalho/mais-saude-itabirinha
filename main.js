const {app, BrowserWindow} = require('electron');
    const appIcon = __dirname+"/icon.png"
    let login = null;
    let janela = null;
    
app.on('ready', () => {
   
    const janela = new BrowserWindow({
        icon: appIcon ,
        show: false,
   
    })
   
    const login = new BrowserWindow({
        parent: janela,
        icon: appIcon ,
        modal: true,
        resizable: false,
       

        width: 400,
        height: 450,
    });

   

    janela.loadURL(`file://${__dirname}/src/html/index.html`);
    janela.maximize();
    janela.on('ready-to-show' , () => {janela.show()});
    login.loadURL(`file://${__dirname}/src/html/login.html`)
    
});