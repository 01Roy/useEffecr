import React, { useEffect, useState } from "react";

export default function Profile({ userId }) {
  const [comment, setComment] = useState("");

  return (
    <div>
      <h1>
        this is a profile page and user name is: {userId} and comment is :
        {comment}{" "}
      </h1>
      <input type="text" onChange={(e) => setComment(e.target.value)} />
    </div>
  );
}
