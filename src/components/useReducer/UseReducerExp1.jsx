import React, { useReducer } from "react";

const UseReducerExp1 = () => {
  const reducer = (state, action) => {
    if (action.type === "DELETE_PERSON") {
      const newPerson = state.data.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        data: newPerson,
        length: state.length - 1,
      };
    }
  };

  const initialState = {
    data: [
      {
        id: "678907676incharas",
        name: "rangaswamy",
        mailid: "ranga@gmail.com",
      },
      { id: "8985678799", name: "inchara", mailid: "incharas@gmail.com" },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };
  return (
    <div>
      <h1>current users length{state.length}</h1>
      {state.data.map((item) => {
        const { id, name, mailid } = item;
        return (
          <div key={id}>
            <table>
              <tr>
                <th>{name}</th>
              </tr>
              <tr>
                <td>{mailid}</td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => handleDelete(id)}>delete</button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducerExp1;
