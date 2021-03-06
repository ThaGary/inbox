import React from 'react';
import '../App.css';

const Toolbar = (props) => {
    return (
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">2</span>
              unread messages
            </p>

            <a class="btn btn-danger">
              <i class="fa fa-plus"></i>
            </a>

            <button className="btn btn-default">
              <i className={true ? "fa fa-minus-square-o" : "fa fa-check-square-o"}></i>
            </button>

            <button onClick={props.markAsRead} className="btn btn-default">
              Mark As Read
            </button>

            <button className="btn btn-default">
              Mark As Unread
            </button>

            <select className="form-control label-select">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
    );
  }


export default Toolbar;
