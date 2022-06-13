const SelectedUserCard = ({ checkedUser, onSelectedCardClick }) => {
  return (
    <div onClick={() => onSelectedCardClick(checkedUser.id)}>
      <div
        className="users"
        style={{ display: "flex", marginTop: "3vw", width: "70vh" }}
      >
        <p>{checkedUser.username}</p>
        <h6>{checkedUser.email}</h6>
        <p>{checkedUser.phone}</p>
      </div>
    </div>
  );
};
export default SelectedUserCard;
