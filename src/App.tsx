import { LinearProgress } from "@material-ui/core";
import { useState } from "react";
import { useQuery } from "react-query";
import { Wrapper } from "./App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  console.log(data);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;
  return <div className="App">Hello!</div>;
}

export default App;
