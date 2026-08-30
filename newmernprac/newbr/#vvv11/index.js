/*
  Revision how we made Dynamic Side Navbar

  Working more on Dynamic Side Navbar

  Login differently on User/Admin Panel: Try to understand the following code:

        if (response.status == "200") {
          toast.success(data.msg);
          if(data.user.role == 'user'){
            router.push("/dashboard");
          }else{
            router.push("/admin-dashboard");
          }
        } else {
          toast.error(data.msg);
        }

  Learning to store the user details after login in the redux:

  Working More on Sidebar:
  
  Designing Avatar Dropdown (with profile, account settings and logout)

  Learning to logout User::
      const logOutUser = () => {
        dispatch(logoutUser());
        router.push('/');
      }

    In userslice, make one function which resets all values to the initial value:
          logoutUser(state, actions) {
            return initialState
          }

  Learning to MAKE UI dynamic: means different for admin and different for user











*/