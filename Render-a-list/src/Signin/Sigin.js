import React, { Component } from 'react';
class Signin extends Component{
    render(){
        return(
            <div className="TongSignin">
                <h2>Sign in</h2>
                <form>
                    <label>
                    UserName:
                    <input type="text" name="name" />
                    </label>
                    <label>
                    PassWord:
                    <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Signin to CodersX" />
                    <label>
                        Keep Me Sign in
                        <input type="checkbox" hecked="checked" name="remember"/> 
                    </label>
                    <a href=" ">Forgot Username?</a>
                    <a href=" ">Forgot password?</a>
               </form>
            </div>
        )
    }
}
export default Signin