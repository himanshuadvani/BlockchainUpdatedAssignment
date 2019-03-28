function addItem()
{
    window.location.href="http://localhost:3913/additem";
}

function viewHistory()
{
    window.location.href="http://localhost:3913/history";
}

function viewreqTokens()
{
    window.location.href="http://localhost:3913/tokens";
}

function viewProfile()
{
    window.location.href="http://localhost:3913/profile";
}


function logoutUser()
{
  sessionStorage.clear();
  window.location.href="http://localhost:3913";
}

function home()
{
    window.location.href="http://localhost:3913/userhome";
}

function signup()
{
    window.location.href="http://localhost:3913/signup";
}

function back()
{
    window.location.href="http://localhost:3913/login";
}

function pendreq()
{
    window.location.href="http://localhost:3913/adminhome";
}

function accreq()
{
    window.location.href="http://localhost:3913/adminaccreq";
}

function viewAdminProfile()
{
    window.location.href="http://localhost:3913/adminprofile";
}