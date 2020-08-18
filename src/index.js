import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props){
  return (
    <img className="Avatar" 
      src={props.user.avatarUrl} 
      alt={props.user.name} />
  );
}

function UserInfo(props){
  return(
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
  );
}

function Comment(props){
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">{props.text}</div>
      <div className="comment-date"> {props.date} </div>
    </div>
  );
}

const data = {
  date: "20-02-2002",
  text: 'everything is component',
  user: {
    name: 'maddy',
    avatarUrl: 'https://placekitten.com/200/300',
  },
};

ReactDOM.render(
  <Comment date={data.date} text={data.text} author={data.user} />, 
  document.getElementById("root")
);