import "./App.css";
import { useEffect, useState, useRef } from "react";
import { List } from "./List";
import { procrastinationQuotes } from "./quoteData";
import { Quote } from "./Quote";
import { Form } from "./Form";
import { Header } from "./Header";
function App() {
  const title = "TO-DO LIST";
  const [item, setItem] = useState("");
  const [quote, setQuote] = useState("");
  const inputRef = useRef(null);
  const [itemList, setItemList] = useState(() => {
    //Getting the ItemList from local Storage if not emopty array
    const storedItems = localStorage.getItem("itemList");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    //UseEffect for generating new quote for each refresh
    const getrandomQuote = () => {
      const randomIndex = Math.floor(
        Math.random() * procrastinationQuotes.length
      );
      const randomQuote = procrastinationQuotes[randomIndex];
      return randomQuote;
    };
    inputRef.current.focus();
    setQuote(getrandomQuote());
  }, []);

  useEffect(() => {
    //UseEffect for usimg localstorage so that we can have the list after refresh
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [itemList]);
  function handleSubmit(e) {
    e.preventDefault();
    if (item !== "") {
      const newItem = { item, isChecked: false };
      const newList = [...itemList, newItem];
      setItemList(newList);
      setItem("");
      inputRef.current.focus();
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setItem(e.target.value);
  }

  function handleCheck(index) {
    const updatedList = itemList.map((item, i) =>
      i === index ? { ...item, isChecked: !item.isChecked } : item
    );
    setItemList(updatedList);
  }

  function handleDelete(index) {
    let remainingList = [];
    itemList.map((ele, i) => i !== index && remainingList.push(ele));
    setItemList(remainingList);
  }

  return (
    <div className="App">
      <Header title={title} />
      <Form
        handleChange={handleChange}
        item={item}
        setItem={setItem}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
      <List
        className="listItem-container"
        itemList={itemList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Quote quote={quote} />
    </div>
  );
}
export default App;
