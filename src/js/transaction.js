let mContract = web3.eth.contract(config.cabi).at(config.caddress);
console.log(mContract);

let publicContract = web3.eth.contract(public_config.cabi).at(public_config.caddress);



var users=[];

function newUser()
{
 
    var fname=$("#fname").val();
    var uname=$("#uname").val();
    var pword=$("#pword").val();
    var pubkey=$("#pubkey").val();
    console.log(fname+uname+pword+pubkey);
    mContract.newUser(uname,fname,pword,pubkey,function(err,res){
        if(res!=null)
        {
            console.log("Response: "+res);
            alert("User created successfully...");
            window.location.href="http://localhost:3913";

          }
          else
              console.log("Error: "+err);
      });
}








function addNewItem()
{
  console.log("Insdide transaction.js");
  var itemName=$("#itemName").val();
  var itemPrice=$("#itemPrice").val();
  var arr=[];
arr=JSON.parse(sessionStorage.getItem('user'));


console.log(arr);
  var itemOwner=arr.username;
  console.log("name: "+itemName+",price: "+itemPrice+",owner: "+itemOwner);
  mContract.addItem(itemOwner,itemName,itemPrice,itemOwner,function(err,res){
    if(res!=null)
    {
      console.log("Response: "+res);
      alert("Item added successfully");
      window.location.href="http://localhost:3913/userhome";
      

      }
      else
      console.log(err);
         
  });

}



function buyItem(temp)
{

  var allItems=new Array();
  var flag=0;
  var itemToBuy;
  var arr=[];
  var t=sessionStorage.getItem('user');
  console.log(JSON.parse(t));
  arr=JSON.parse(t).username;
  console.log("inside buyitem");
  console.log("current user: "+arr);

  var data=[];
  data=temp.split(',');
  console.log(data);

  mContract.getNumberOfItems(data[0],function(err,res){
    if(res!=null)
    {
      var len=res.toJSON();
      
      var index=-1;
     for(var j=0;j<len;j++)
     {
       index++;
      mContract.getItems(data[0],j,function(err,res){
        if(res!=null)
        {
          allItems.push(res[1]);
          for(var i=0;i<allItems.length;i++)
        {
          if(allItems[i]==data[1])
          {
            console.log("Item found at: "+i+"  ofusername: "+data[0]);

            mContract.buyItem(data[0],i,arr,function(err,res){
              if(res!=null)
              {
                console.log("Response from contract buyitem: "+res);
               
                home();

                viewHistory();
              }
              else{
                console.log("Error: "+err);
              }


          });
        }
        }}
          else{
          console.log(err);
        }

 
        });
        
        
        
       }
      
     }
    
    
    });
 

}




function viewAdminProfile()
{

  var balance;

  var arr=[];
  arr=JSON.parse(sessionStorage.getItem('user'));
  console.log(arr);



  itemData='<br><h2 style="margin:10px">Profile</h2>';
  itemData+= '<div class="panel panel-default">';
            itemData+='<div class="panel-body">';
            itemData+='&nbsp;&nbsp;Full-Name: '+arr.fullname+'<br>&nbsp;&nbsp;User-name: '+arr.username+'<br>&nbsp;&nbsp;<b>Account: </b>'+arr.key;

            publicContract.balanceOf(arr.key,function(err,res){
              if(res!=null)
              {
                console.log(res.toJSON());
                balance=res.toJSON();
                 itemData+='<br>&nbsp;&nbsp;<b>Balance: </b>'+balance+' SHOP tokens<br>&nbsp&nbsp';    
                 itemData+='<br><br></div></div>';
            $("#adminProfile").append(itemData);    
              }
            });
          
            
            


}


function pendreq()
{
  
  var arr=[];
  var t=sessionStorage.getItem('username');
  arr=t.split(',');


function getReqUsingIndex(j)
{
  var itemData="";
  publicContract.getRequest(j,function(err,res){
    if(res!=null)
    {
      if(res[3]==false)
      {
      console.log("request response: "+res);
      itemData+= '<div class="panel panel-default">';
      itemData+='<div class="panel-body" style="border-style:solid;background-color: white;border-width:0.5px;border-radius:5px;margin:10px;">';
      itemData+='&nbsp;&nbsp;Username: '+res[0]+'<br>&nbsp;&nbsp;Amount: '+res[2]+'<br>&nbsp;&nbsp;<br>&nbsp&nbsp';
      itemData+='<button class="btn btn-primary" onClick="sendNewTokens(\''+res+'\');">Accept</button>';
     
     itemData+='<br><br></div></div>';
      $("#PendReq").append(itemData);
    }
    }

    
    else
    console.log(err);
    });
}



    publicContract.getRequestLength(function(err,res){
      if(res!=null)
      {
       console.log(res.toJSON());
       var leng=res.toJSON();
       for(var i=0;i<leng;i++)
       {
        getReqUsingIndex(i)
       }
        

      }
      else
        console.log(err);
    });
  
}




function sendreq()
{
  var noOfTokens=parseInt($("#noOfTokens").val());
  console.log(noOfTokens);

  var arr=[];
  var t=sessionStorage.getItem('username');
  arr=t.split(',');
  publicContract.request_token(arr[0],arr[3],noOfTokens,function(err,res){
    if(res!=null)
    {
     console.log(res);
    }
    else
      console.log(err);
  });

}

function sendNewTokens(temp)
{
  console.log(temp);
  var data=[]
  data=temp.split(',');
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
  console.log(data[3]);
  console.log(data[4]);

  
  publicContract.accept_token(data[0],data[1],data[2],data[4],function(err,res){
    if(res!=null)
    {
     console.log("Accept token: "+res);
     publicContract.transfer(data[1],data[2],function(err,res){
      if(res!=null)
      {
        console.log("transfer: "+res);
        pendreq();
      }
    
    });
    }
    else
      console.log(err);
  });
  
}







function transferTokens(res)
{


  var users=[];

$.ajax({
  url: "http://localhost:3913/blockchain/users",
  type: 'GET',
  dataType: 'json', // added data type
  success: function(res) {
    users=res;
    console.log(users);
      


  }
});


  var data=[];
  data=res.split(',');
  alert(res);
  var add;
  var _price=parseInt(data[2]);
    console.log(_price);
 
    console.log(data);
    for(var i=0;i<users.length;i++)
    {
      if(data[0]==users[i].username)
      {
        add=users[i].key;
        alert(add);
        break;
      }
    }

    console.log("Address: "+add);
    console.log("Price: "+_price);

    
  
  publicContract.transfer(add,_price,function(err,res){
    if(res!=null)
    {
      console.log("After buy:"+res);
      alert("Tokens transfered successfully...");
    }
    else
    console.log(err);
  });
}