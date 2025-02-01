import { useState } from "react";

const FormAddFriend = ({ onAddFriend, setAddFriend }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !url) return;
    let id = crypto.randomUUID();
    let newFriend = {
      id:id,
      name: name,
      image: `${url}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setUrl("https://i.pravatar.cc/48");
    setAddFriend(false);
  }
  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

      <input type="submit" className="button" value="add" />
    </form>
  );
};

export default FormAddFriend;
