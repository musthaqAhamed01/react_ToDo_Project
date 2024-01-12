import { FaTrashAlt } from "react-icons/fa";
import { IconButton } from "rsuite";
export function List({ itemList, handleCheck, handleDelete }) {
  return (
    <div>
      {itemList.length > 0 &&
        itemList.map((ele, index) => (
          <div className="listItem">
            <input
              type="checkbox"
              checked={ele.isChecked}
              onChange={() => handleCheck(index)}
            ></input>
            <h3 className={ele.isChecked ? "Checked" : "UnChecked"}>
              {ele.item}
            </h3>
            <IconButton
              icon={<FaTrashAlt />}
              className="dlt-btn"
              onClick={() => {
                handleDelete(index);
              }}
            />
          </div>
        ))}
    </div>
  );
}
