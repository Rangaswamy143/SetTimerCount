import React, { useReducer, useEffect, useState } from "react";
const reducer = (state, action) => {
  if (action.type === "update_user_data") {
    return {
      ...state,
      usersData: action.payload,
    };
  }

  if (action.type == "loading") {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  if (action.type == "error") {
    return {
      ...state,
      isError: action.payload,
    };
  }
  if (action.type === "DELETE_USER") {
    const deleteItems = state.usersData.filter((eachItms) => {
      return eachItms.id !== action.payload;
    });
    return {
      ...state,
      usersData: deleteItems,
    };
  }

  if (action.type === "ONCLICK_EDIT") {
    return {
      ...state,
      isEditing: action.payload,
    };
  }

  if (action.type === "UPDATE_USER") {
    const newUsers = state.usersData.map((eachUser) => {
      if (eachUser.id === action.payload.id) {
        return {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        };
      } else {
        return eachUser;
      }
    });
    return {
      ...state,
      usersData: newUsers,
    };
  }

  return state;
};

function UseReducerToDo() {
  const url = "https://jsonplaceholder.typicode.com/users";

  // api fetching data;
  const fetchUserData = async (url) => {
    dispatch({ type: "loading", payload: true });
    dispatch({ type: "error", payload: { status: false, msg: "" } });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "update_user_data", payload: data });

      dispatch({ type: "loading", payload: false });
      dispatch({ type: "error", payload: { status: false, msg: "" } });
    } catch (error) {
      console.log(error);
      dispatch({ type: "loading", payload: false });
      dispatch({
        type: "error",
        payload: { status: true, msg: error.message },
      });
    }
  };
  // useEffect calling;
  useEffect(() => {
    fetchUserData(url);
  }, []);

  const initialState = {
    usersData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
    isEditing: { status: false, id: "", name: "", email: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };
  const handleEdit = (id, name, email) => {
    dispatch({
      type: "ONCLICK_EDIT",
      payload: { status: true, id: id, name: name, email },
    });
  };
  const updateData = (id, name, email) => {
    dispatch({
      type: "UPDATE_USER",
      payload: { id, name, email },
    });
    dispatch({
      type: "ONCLICK_EDIT",
      payload: { status: false, id: "", name: "", email: "" },
    });
  };

  return (
    <div className="main-container">
      <h1>Users Information:-</h1>
      {state.isEditing.status && (
        <EditFormContainer
          id={state.isEditing.id}
          comingTitle={state.isEditing.name}
          comingEmail={state.isEditing.email}
          updateData={updateData}
        />
      )}

      {state.isLoading && <h1 className="loading"></h1>}
      {state.isError.status && (
        <h1 style={{ color: "blue" }}>{state.isError.msg}</h1>
      )}
      <div className="container">
        {state.usersData.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <div key={id} className="card">
              <ul className="card-body">
                <li>{name}</li>
                <li>{email}</li>
                <button className="delete-btn" onClick={() => handleDelete(id)}>
                  delete
                </button>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(id, name, email)}
                >
                  edit
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const EditFormContainer = ({ id, comingTitle, comingEmail, updateData }) => {
  const [title, setTitle] = useState(comingTitle || "");
  const [email, setEmail] = useState(comingEmail || "");
  return (
    <div className="center">
      <form action="" className="center-card">
        <input
          className="form-input"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="update-btn"
          onClick={() => updateData(id, title, email)}
        >
          update data
        </button>
      </form>
    </div>
  );
};
export default UseReducerToDo;
