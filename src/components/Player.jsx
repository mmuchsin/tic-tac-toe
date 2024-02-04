import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing((editing) => !editing);
  };
  const changeHandler = (event) => {
    setPlayerName(event.target.value);
  }


  return (
    <li className={isActive ? 'active' : null}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            id="player-name"
            name="player-name"
            placeholder="player name"
            value={playerName}
            onChange={changeHandler}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
