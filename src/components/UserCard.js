const UserCard = ({ user, onCheckboxChange }) => {
  return (
    <div className="card my-2 d-flex p-3 justify-content-between align-items-center flex-row">
      <input
        id="user-card"
        className="form-check-input"
        type="checkbox"
        onChange={(e) => onCheckboxChange(e, user.id)}
        checked={user.isChecked}
      />
      <div>
        <h3>{user.username}</h3>
      </div>
    </div>
  );
};
export default UserCard;
