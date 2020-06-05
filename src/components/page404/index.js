import React from 'react';
import { Link } from 'react-router-dom';
import img from './404.png';
export default function PageNotFound() {
  return (
    <div className="bg-pagenotfound">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>404</h1>
            <h4>oups! Sorry, we could not find the page</h4>
            <Link to="/">go back</Link>
          </div>
        </div>
        <div className="bg-imagenotfount ">
          <img
            alt="page not found!"
            className="img-fluid"
            style={{ height: '400px' }}
            src={img}
          />
        </div>
      </div>
    </div>
  );
}
