import { Grid, LinearProgress } from "@material-ui/core";
import { useState } from "react";
import { useQuery } from "react-query";
import { Wrapper } from "./App.styles";
import Item from "./components/Item";
import { CartItemType } from "./types/CartItemType";

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  console.log(data);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
