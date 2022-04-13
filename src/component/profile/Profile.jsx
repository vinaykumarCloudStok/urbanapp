import React from 'react'

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <>
    <div className="conatiner">
      <div className="flex items-center bg-blue-500 p-5">
      <div className="">
      <h1> dashboard</h1>
        <img src="" alt="" />
      </div>
      <div className="" onClick={handleMenu}>
        <h1>menu</h1>
      </div>
      <div className=""     anchorEl={anchorEl} 
              open={open}
              onClose={handleClose}>
        hello
      </div>
      <div className="" onClick={handleLogout}>
        logout
      </div>
      </div>
    </div>
    </>
  )
}

export default Profile