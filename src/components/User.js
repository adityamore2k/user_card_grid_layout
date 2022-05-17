export default function User(props) {
  return (
    <div className="users">
      <img src={props.avatar} alt="user-avatar" />
      <h2>
        {props.first_name} {props.last_name}
      </h2>
      <span>{props.email}</span>
    </div>
  );
}
