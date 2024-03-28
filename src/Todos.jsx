import axios from "axios";
import { useEffect, useState } from "react";
import { useFetch } from "./helpers/hooks/useFetch";

export const Todos = () => {
  const [todos] = useFetch("https://jsonplaceholder.typicode.com/todos", []);
  return <div>Todos</div>;
};
