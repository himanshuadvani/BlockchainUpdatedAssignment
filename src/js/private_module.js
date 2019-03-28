let config = {
    "caddress": "0x3993708ac85132D83DE0eE51af2678898f254188",
    "cabi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "name": "user_name",
            "type": "string"
          },
          {
            "name": "full_name",
            "type": "string"
          },
          {
            "name": "pass_word",
            "type": "string"
          },
          {
            "name": "public_key",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x365b98b2"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalusers",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x657d1471"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          },
          {
            "name": "_fullname",
            "type": "string"
          },
          {
            "name": "_password",
            "type": "string"
          },
          {
            "name": "_publickey",
            "type": "address"
          }
        ],
        "name": "newUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x9262ddfb"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          }
        ],
        "name": "getUserFromUsername",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x26aabd0e"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getUserFromIndex",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x5f6b2405"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getNoOfUsers",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x34f5138e"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          },
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_price",
            "type": "uint256"
          },
          {
            "name": "_owner",
            "type": "string"
          }
        ],
        "name": "addItem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x13df81d6"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          },
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getItems",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xcfa5e471"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          },
          {
            "name": "index",
            "type": "uint256"
          },
          {
            "name": "_newOwner",
            "type": "string"
          }
        ],
        "name": "updateItem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xc9374b84"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          },
          {
            "name": "index",
            "type": "uint256"
          },
          {
            "name": "_newOwner",
            "type": "string"
          }
        ],
        "name": "buyItem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xa569320c"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          }
        ],
        "name": "getNumberOfItems",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xe506db35"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          },
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getBuyItems",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x43fda9dc"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          },
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getSellItems",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x1ff6cd04"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          }
        ],
        "name": "getBuyLength",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xefcf3d1e"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_username",
            "type": "string"
          }
        ],
        "name": "getSellLength",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x81654bee"
      }
    ]
}




const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
web3.eth.defaultAccount = '0xb70B457da6524a0035C209F98CB9e70590326A2e';

let mContract = web3.eth.contract(config.cabi).at(config.caddress);



exports.loginUser=function(username,passname)
{
       
  var users=[];




if(username=="admin")
{
  if(passname=="admin")
  {
    var admin=["admin","Admin","admin","0x3BAAa86674d6cED61bc4ff56dE482111EAE78C50"];
    var temp={username:admin[0],fullname:admin[1],password:admin[2],key:admin[3]}
    users.push(temp);
    

  }

}
else{
  mContract.getNoOfUsers(function(err,res){
    if(res!=null)
    {
      console.log("num of users: "+res);
      noOfUsers=res;
      console.log(typeof(noOfUsers));
      for(var i=0;i<noOfUsers;i++)
      {
        console.log("inside for loop");
        mContract.getUserFromIndex(i,function(err,res){
          console.log("User :"+res);
          var temp={username:res[0],fullname:res[1],password:res[2],key:res[3]}
          users.push(temp);



             
          });
          

            
        }

      }

      else 
    console.log(err);
    });
    
}

return users;
}


exports.getItems=function(){

  var users=[];
  var items=[];
  function getItemUsingIndex(_username,_index)
  {
  
    var itemData="";
   


    mContract.getItems(_username,_index,function(err,res){
      if(res!=null)
      {
        
        console.log(res);
        if(res[4]==false)
        {
         
          items.push(res)
          //console.log("res: "+res);
        
      }

        else
        console.log(err);
    }
        
      });
    
  
  }
  

  mContract.getNoOfUsers(function(err,res1){

    if(res1!=null)
    {
      console.log("No of users: "+res1);
      var len=res1;
      for(var i=0;i<len;i++)
      {
        mContract.getUserFromIndex(i,function(err,res2){
          if(res2!=null)
          {
            
            users.push(res2);
            var user=res2[0];
            console.log("From home: "+user);
            mContract.getNumberOfItems(res2[0],function(err,res3){
            if(res3!=null)
            {
              var len=res3.toJSON();
          
            for(var j=0;j<len;j++)
            {
              
              
              getItemUsingIndex(user,j);
              //console.log(j);
              
                
              }
              
            }
            
            
            });

          }
        });
      }

    }
    
  });
  
  return items;

}


exports.viewBuyHistory=function(currentUser)
{
  
  var buy=[];
  
  var loggedInUser=currentUser;
  console.log(loggedInUser);

  mContract.getBuyLength(loggedInUser,function(err,res){
    if(res!=null)
    {
      console.log("buy history: "+res.toJSON());
      var len=res.toJSON();
      for(var i=0;i<len;i++)
      {


        buy.push(displayBuy(loggedInUser,i));
        
      }

    }
    else{
      
    }


});

return buy;


}




function displayBuy(loggedInUser,i)
{
  var buy=[];
  //var itemData="";
  mContract.getBuyItems(loggedInUser,i,function(err,res){
    if(res!=null)
    {
      console.log("item: "+res[1]+",bought from : "+res[3]);
      
        buy.push(res);

    }
    else
    console.log(err);
    });

    return buy;

}



exports.viewSellHistory=function(currentUser)
{
 
  var sell=[];
  var loggedInUser=currentUser;
  console.log(loggedInUser);
  mContract.getSellLength(loggedInUser,function(err,res){
    if(res!=null)
    {
      console.log("sell history: "+res.toJSON());

      var len=res.toJSON();
      for(var i=0;i<len;i++)
      {

        sell.push(displaySell(loggedInUser,i)); 
      
      }

    }
    else{
      console.log(err);
      
    }

    });

    return sell;
}

function displaySell(loggedInUser,i)
{
  var sell=[];
  //var itemData="";
  mContract.getSellItems(loggedInUser,i,function(err,res){
    if(res!=null)
    {
      console.log("item: "+res[1]+",sold to : "+res[3]);
      
    
      sell.push(res);
    }
    else
    console.log(err);
    });

    return sell;

}


