import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { server } from "../index";
import {
  Container,
  HStack,
  Heading,
  Image,
  Radio,
  Text,
  VStack,
  RadioGroup,
  Button
} from "@chakra-ui/react";
import ErrorComponent from "./ErrorComponent";
import { Link } from "react-router-dom";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  }

  const bts = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency,page]);

  if (error)
    return (
      <ErrorComponent
        message={"Something Went Wrong While Fetching Coins..."}
      />
    );

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
           <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                price={i.current_price}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack overflowX={"auto"} m={"8"}>  
            {
              bts.map((item,index)=>(
                <Button key={index} bgColor={"black"} color={"white"} onClick={()=>changePage(index+1)}>{index + 1}</Button>
              ))
            }
          </HStack>
        </>
      )}
    </Container>
  );
};

const CoinCard = ({ id, name, img, price, symbol, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={"52"}
      shadow={"xl"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"} />
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol} ${price}` : "NA"}</Text>
    </VStack>
  </Link>
);

export default Coins;
