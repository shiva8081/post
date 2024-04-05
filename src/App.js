import { useEffect, useState } from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Table } from "./Table";




function App() {
  const API_URL='https://jsonplaceholder.typicode.com/'; 
const [reqType, setreqType] = useState('users');
const [items, setitems] = useState([]);

useEffect(()=>{
  const fetchitem=async()=>{
    try {
      const response= await fetch(`${API_URL}${reqType}`);
      if(!response) throw Error("response not ok or fail to fetch item")
      const listitem=await response.json();
       console.log(listitem)
       setitems(listitem)
    } catch (error) {
      console.log(error)
    }
  }
  setTimeout(() => {
    (async () => await fetchitem())();
  }, 2000);
  // console.log(items)
},[reqType ])

  return (
    <>

    <Form reqType={reqType} setreqType={setreqType} />
    {/* <List items={items}/> */}
    <Table items={items}/>
    






    </>
  );
}

export default App;
