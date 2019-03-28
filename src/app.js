const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
web3.eth.defaultAccount = '0xb70B457da6524a0035C209F98CB9e70590326A2e';


const path = require('path');
const private_module=require('./js/private_module');
const public_module=require('./js/public_module');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));



app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    res.render('login.html', {
        page: 'login'
    })
});

app.get('/login', function (req, res) {
    res.redirect('/');
});


app.get('/signup', function (req, res) {
    res.render('signup.html', {
        page: 'signup'
    })
});



app.get('/userhome', function (req, res) {
    res.render('user_home.html', {
        page: 'user_home'
    })
});

app.get('/additem', function (req, res) {
    res.render('additem.html', {
        page: 'additem'
    })
});

app.get('/history', function (req, res) {
    res.render('history.html', {
        page: 'history'
    })
});

app.get('/tokens', function (req, res) {
    res.render('tokens.html', {
        page: 'tokens'
    })
});

app.get('/profile', function (req, res) {
    res.render('profile.html', {
        page: 'profile'
    })
});

app.get('/adminhome', function (req, res) {
    res.render('admin_home.html', {
        page: 'admin_home'
    })
});

app.get('/adminaccreq', function (req, res) {
    res.render('admin_accreq.html', {
        page: 'admin_accreq'
    })
});


app.get('/adminprofile', function (req, res) {
    res.render('admin_profile.html', {
        page: 'admin_profile'
    })
});



app.get('/blockchain/users', function (req, res) {
 
    
    var users;
    var username=req.body.username;
    var passname=req.body.password;
    
    users=private_module.loginUser(username,passname);
    setTimeout(function()
    {
        res.send(users);
    },520);

 
   

});



app.get('/blockchain/items', function (req, res) {
 
    
    var items=[];
    items=private_module.getItems();
    setTimeout(function()
    {
        res.send(items);
    },1000);
   

});


app.get('/blockchain/history/:username', function (req, res) {
 
    var currentUser=req.params.username;
   console.log(currentUser); 
    var buy=[];
    var sell=[];
    var items=[]
    buy=private_module.viewBuyHistory(currentUser);
    sell=private_module.viewSellHistory(currentUser);
    console.log(buy);
    console.log(sell);
    console.log("================================");
    
    setTimeout(function()
    {
        items=buy.concat(sell);
        res.send(items);
    },500);
   

});



app.get('/blockchain/pendreq', function (req, res) {
 
    
    var items=[];
    items=public_module.pendreq();
    console.log(items);
    
        res.send(items);
    
   

});



app.get('/blockchain/accreq', function (req, res) {
 
    
    var items=[];
    items=public_module.accreq();
    
   
        res.send(items);
   
   

});



app.use('/scripts', express.static(path.join(__dirname, 'node_modules/')));
app.use('/js', express.static(path.join(__dirname, 'js/')));
app.use('/css', express.static(path.join(__dirname, 'css/')));




app.listen(3913, () => console.log('App listen on port 3913')); 


