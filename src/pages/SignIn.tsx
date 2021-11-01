import React from 'react'

const SignIn = () => {
    return (
        <>
            <div className="main">
          <div className="shows">
            <div className="anchor"><a href="#">Home</a></div> 
            <div id="icon_1"><i className="fas fa-chevron-right" /></div>
            <div className="anchor"> <a href="#">Sign In</a> </div>
          </div>
          <h1>Customer Sign In</h1>
          <div className="wrap">
            <div className="aside">
              <div className="regis">
                <div className="ele">
                  <p id="ele_head">Registered Customers </p>
                  If you have an account, sign in with your email address. <br />
                  <form action="#">
                    <p id="pInput">Email <span className="symbol">*</span></p>
                    <input type="text" name="email or phone" placeholder="Your Email" />
                    <p id="pInput">Password <span className="symbol">*</span></p>
                    <input type="password" name="Password" placeholder="Your Password" /><br />
                    <button id="sign">Sign In</button>
                    <a href="#">Forgot Your Password?</a>
                  </form>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="newCustom">
                <div className="ele">
                  <p id="ele_head">New Customer?</p>
                  Creating an account has many benefits
                  <ul>
                    <li>Check out faster</li>
                    <li>Keep more than one address</li>
                    <li>Track order and more</li>
                  </ul>
                  <button id="create">Create An Account</button>
                </div>
              </div>
            </div>
          </div>
          <div className="table_1">
            <table>
              <tbody><tr>
                  <td><i className="fas fa-headset" /></td>
                  <td><i className="far fa-user-circle" /></td>
                  <td><i className="fas fa-tag" /></td>
                </tr>
                <tr>
                  <th id="title">Product Support</th>
                  <th id="title">Personal Account</th>
                  <th id="title">Amazing Savings</th>
                </tr>
                <tr>
                  <td>Up to 3 years one site warranty</td>
                  <td>With big discount, free delivery and</td>
                  <td>Up to 70% to new Products, you can</td>
                </tr>
                <tr>
                  <td> available for your peace of mind</td>
                  <td>a dedicated support specialist </td>
                  <td> be sure os the best price</td>
                </tr>
              </tbody></table>
          </div>
        </div>
        </>
    );
}

export default SignIn
