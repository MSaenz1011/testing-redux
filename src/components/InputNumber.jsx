import { useDispatch, useSelector } from "react-redux"
import { CHANGE_NUMBER } from "../store"

const InputNumber = () => {
  const dispatch = useDispatch()
  const numberStore = useSelector(state => state.number) 

  return(
    <input
      type='number'
      onChange={ (event) => dispatch({ type:  CHANGE_NUMBER, payload: event.target.value})}
      value={numberStore}
    />
  )
}

export default InputNumber