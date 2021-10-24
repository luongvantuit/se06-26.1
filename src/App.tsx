import React from 'react';

function App() {
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <div className="header__logo__vector">
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="#FFFFFF">
              <path d="M 64 64 L 128 0 L 384 0 L 448 64 L 320 192 L 192 192 z" fill="#008254" stroke-width="0" />
              <path d="M 64 64 L 0 128 L 128 512 L 192 192 z" fill="#006642" stroke-width="0" />
              <path d="M 448 64 L 512 128 L 384 512 L 320 192 z" fill="#006642" stroke-width="0" />
              <path d="M 128 512 L 192 192 L 320 192 L 384 512 z" fill="#81D6B8" stroke-width="0" />
              <path d="M 64 64 L 192 192 L 128 512 L 64 64 z" fill="#40AD87" stroke-width="0" />
              <path d="M 320 192 L 448 64 L 384 512 L 320 192 z" fill="#40AD87" stroke-width="0" />
              <path d="M 64 64 L 192 192 L 320 192 L 448 64 L 320 256 L 192 256 L 64 64 z" fill="#006642" stroke-width="0" />
              <path d="M 64 320 L 32 448 L 128 512 L 64 320 z" fill="#008254" stroke-width="0" />
              <path d="M 448 320 L 480 448 L 384 512 L 448 320 z" fill="#008254" stroke-width="0" />
            </svg>
          </div>
          <div className="header__logo__text">
            <a href="#Home">SE06</a>
          </div>
        </div>
        <div className="header__nav">
          <ul className="nav-list">
            <li className="nav-list__item">Home</li>
            <li className="nav-list__item">Product</li>
            <li className="nav-list__item">Contact</li>
            <li className="nav-list__item">About</li>
          </ul>
        </div>
        <div className="header__nav">
          <ul className="nav-list">
            <li className="nav-list__item">Get Started</li>
            <li className="nav-list__item">Sign In</li>
            <li className="nav-list__item">Sign Up</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
