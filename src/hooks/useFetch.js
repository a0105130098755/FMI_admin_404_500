import { useState, useEffect } from "react";
import api from "../services/api"; // axios 인스턴스

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data from URL:", url);
      try {
        console.log("Fetching data from URL:", url); // URL 확인
        const response = await api.get(url); // GET 요청으로 변경
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error); // 오류 메시지 출력
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]); // 의존성 배열에 url만 포함

  return { data, loading, error };
};

export default useFetch;
