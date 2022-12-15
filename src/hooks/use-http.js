import { useEffect, useState } from "react";

const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

const useHttp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data); // truyền dữ liệu lấy được vào data
      setIsLoading(false);
    } catch (error) {
      setError("Some thing went wrong");
      console.log("Some thing went wrong!");
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return { data, isLoading, error };
};

export default useHttp;
