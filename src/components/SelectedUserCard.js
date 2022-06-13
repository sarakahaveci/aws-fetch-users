const SelectedUserCard = ({ checkedUser, onSelectedCardClick }) => {
  return (
    <div onClick={() => onSelectedCardClick(checkedUser.id)}>
      <p>{checkedUser.username}</p>
      <p>{checkedUser.email}</p>
      <p>{checkedUser.phone}</p>
    </div>
  );
};
export default SelectedUserCard;
