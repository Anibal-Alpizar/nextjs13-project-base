"use client";

import { useEffect } from "react";

function Users() {
  useEffect(() => {
    alert("Hello from Users");
  }, []);
  return <div>Users</div>;
}

export default Users;
