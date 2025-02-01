const Friends = ({ friend, onRemoveFriend,selectedFriend, onSelection }) => {
  let select= selectedFriend?.id === friend.id;
  return (
    <li className={select? "selected":""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">{`You owe ${friend.name} ${Math.abs(
          friend.balance
        )}€`}</p>
      )}

      {friend.balance > 0 && (
        <p className="green">{`${friend.name} owe you ${Math.abs(
          friend.balance
        )}€`}</p>
      )}

      {friend.balance === 0 && <p> {`You and ${friend.name} are even`}</p>}
      <button className="button" onClick={()=>onSelection(friend)}>
        {select? "Close": "Select"}
      </button>
      <button className="button" onClick={() => onRemoveFriend(friend.id)}>
        Remove
      </button>
    </li>
  );
};

export default Friends;
