import { useSelector } from "react-redux"

const Number = () => {
  const numberStore = useSelector((state) => state.number)

  return(
    <h2>{numberStore}</h2>
  )
}

export default Number