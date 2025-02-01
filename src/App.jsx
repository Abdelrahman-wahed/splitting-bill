import { useState } from "react";
import initialFriends from "./App.js";
import Friends from "./components/Friends.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import FormSplitBill from "./components/FormSplitBill";
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [bill, setBill] = useState("");
  const [paiedUser, setPaiedUser] = useState("");
  const [selectUser, setSelectUser] = useState("user");
  function hanldeAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }
  function handleRemoveFriend(id) {
    setFriends((friend) => friend.filter((friend) => friend.id !== id));
  }

  function handleSelection(friend) {
    setSelectedFriend((prev) => (prev?.id !== friend.id ? friend : null));
    setAddFriend(false);
    setBill("");
    setPaiedUser("");
    setSelectUser("user")
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          {friends.map((friend) => {
            return (
              <Friends
                key={friend.id}
                friend={friend}
                onRemoveFriend={handleRemoveFriend}
                selectedFriend={selectedFriend}
                onSelection={handleSelection}
              />
            );
          })}
        </ul>

        {addFriend && (
          <FormAddFriend
            onAddFriend={hanldeAddFriend}
            setAddFriend={setAddFriend}
          />
        )}
        <button className="button" onClick={() => setAddFriend(!addFriend)}>
          {addFriend ? "Close" : "Add Friend"}
        </button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          handleSplitBill={handleSplitBill}
          bill={bill}
          setBill={setBill}
          paiedUser={paiedUser}
          setPaiedUser={setPaiedUser}
          selectUser={selectUser}
          setSelectUser={setSelectUser}
        />
      )}
    </div>
  );
}

export default App;
