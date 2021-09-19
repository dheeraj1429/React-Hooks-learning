import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffectFive() {
  const [Data, setData] = useState([]);
  const [id, Setid] = useState(1);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.results);
      })
      .catch((err) => console.log(err))
      .finally(console.log("complete"));
  }, [id]);

  return (
    <div>
      <button type="button" onClick={() => Setid(id + 1)}>
        click{id}
      </button>
      {Data.map((el) => (
        <p key={el.title}>{el.title}</p>
      ))}
    </div>
  );
}

export default UseEffectFive;
