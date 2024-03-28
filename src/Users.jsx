import axios from "axios";
import { useEffect, useState } from "react";
import { useFetch } from "./helpers/hooks/useFetch";

export const Users = () => {
 
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users", [])

  return <div>Users</div>;
};
