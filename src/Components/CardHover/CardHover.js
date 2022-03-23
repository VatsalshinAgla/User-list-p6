import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../Avtar/Avtar";
import Email from "../Email/Email";
import Name from "../Name/Name";
import "./cardhover.css";
function CardHover() {
  const user = useSelector((state) => state.reducer.selectedUser);
  if (user) {
    return (
      <div className="card-container">
        <div className="card hover-card shadow-lg p-3 mb-5 bg-body">
          <div className="hover-card-img">
            <Avatar avatar={user.avatar} />
          </div>
          <div className="card-body">
            <h6 className="card-title d-flex m-0 justify-content-center">
              <Name first_name={user.first_name} last_name={user.last_name} />
              {user.status === "Active" ? (
                <sup className="green-btn">.</sup>
              ) : (
                ""
              )}
            </h6>
            <Email email={user.email} />
            <h6>Your Plan: Standard</h6>
            <div className="status">{user.status} User</div>
            <div className="plan-uses">Plan Uses:</div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <h2>2000</h2>
                <p className="text-muted">
                  <small>Clicks reviewed</small>
                </p>
              </div>
              <div className="col">
                <h2>5000</h2>
                <p className="text-muted">
                  <small>Monthly clicks</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-container" style={{height:'400px'}}>
        <div className="card hover-card shadow p-3 mb-5 bg-body">
          <div className="card-body" >
          <img src='https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126879__340.png' alt='hoverimg' style={{height:'120px' }}/>
            <h4 >
              Please Hover On
              
              the User to see
              
              User's Full Information.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default CardHover;
