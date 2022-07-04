const {app, BrowserWindow} = require('electron');
    const appIcon = __dirname+"./src/images/icon.png"
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
        resizable: false,
        frame:false,
        width: 400,
        height: 450,
    });

    
    
        login.addListener('closed', () => {
            janela.maximize()

            
            // if(loginAuth === true){
            //     janela.maximize()
            // } else{
            //     janela.close()
            // }
            
            
        })        

        login.loadURL(`file://${__dirname}/src/html/login.html`)
        login.show()
        janela.loadURL(`file://${__dirname}/src/html/index.html`);

});