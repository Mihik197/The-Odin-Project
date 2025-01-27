import { useEffect, useState } from "react";

function Greeting() {
    return <h2>My first React component (Not really though)</h2>
}

function Intro() {
    return (
        <>
            <h1>Test title</h1>
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
                <input type="text" />
            </form>

        </>
    );
}

function Clock() {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
        const key = setInterval(() => {
          setCounter(count => count + 1)
        }, 1000);

        return () => {
            clearInterval(key);
        };
      }, [])
  
    return (
      <p>{counter} seconds have passed.</p>
    );
  }
  

const today = new Date();

function FavouriteFood() {
    return (
        <>
            <p>My favourite food is:</p>
            <br/>
            <img src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"></img>
        </>
    );
}

export { Greeting, Intro, FavouriteFood, Clock };