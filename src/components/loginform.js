import React from "react";

export default class LoginForm extends React.Component{
    render() { 
         return (
            <div className="input-group-mb-3">
                <span className="input-group-text">Please Enter Username:</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username"></input>
                <div className="input-group-mb-3">
                    <span className="input-group-text">Please Enter Password:</span>
                    <input type="text" className="form-control" placeholder="Password" aria-label="Password"></input>
                </div>
            </div>
         )
    }
}