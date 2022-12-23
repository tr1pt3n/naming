import { useEffect, useState } from "react"
import Main from "./Main";

const NameList = ({ gen, thm, ori }) => {
  const [names, setNames] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setNames(data))
    }, [])
    return (
      <div className="w-full flex flex-col justify-center items-center mt-8">
        {names.map(name => (
          <Main key={name.id} name={name.name} />
        ))}
      </div>
    )
  }
  
  export default NameList