import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setvalue] =useState(defaultValue);

    // const handleChange = e =>{
    //     setvalue(e.target.value);
    // }
    const onChange = e =>{
        setvalue(e.target.value);
    }
    // return [value, handleChange]
    return{
        value,
        onChange
    }
}

export default useInputState;