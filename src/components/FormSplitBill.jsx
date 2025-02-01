
const FormSplitBill = ({
  selectedFriend,
  setSelectedFriend,
  handleSplitBill,
  bill,
  setBill,
  paiedUser,
  setPaiedUser,
  selectUser,
  setSelectUser,
}) => {
  let expense = bill ? bill - paiedUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paiedUser) return;
    handleSplitBill(selectUser === "user" ? expense : -paiedUser);
    setBill("");
    setPaiedUser("");
    setSelectUser("user");
    setSelectedFriend(null);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend?.name}</h2>
      <label htmlFor="">💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paiedUser}
        onChange={(e) =>
          setPaiedUser(
            Number(e.target.value) > bill ? paiedUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="">👫 {selectedFriend?.name}&apos; s expense</label>
      <input type="text" disabled value={expense} />
      <label htmlFor="">🤑 Who is paying the bill</label>
      <select
        value={selectUser}
        onChange={(e) => setSelectUser(e.target.value)}
      >
        <option value="You">You</option>
        <option value="nameFriend">{selectedFriend?.name}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
};

export default FormSplitBill;
