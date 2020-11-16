import React, { useEffect } from 'react';
import { axios } from "@/util";

const Home = () => {
  useEffect(() => {
    axios.get("/schedule/detail/list")
  }, [])
  return (
    <div>11</div>
  )
}

export default Home;