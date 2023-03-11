import React, {useState,useRef} from 'react'
import ErrorModal from './ErrorModal';
const InputForm = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isError, setIsError] = useState(false)
    const nameRef = useRef();
    const ageRef = useRef();
    const user = {};
    const addUser = ()=> {
        user.id = Date.now();
        user.name = name.trim();
        user.age = age.trim();
        if(user.name.length ===0) {
            setErrorMsg("Please provide valid name");
            nameRef.current.focus();
            setIsError(true);
            return;
        }
        if(+user.age<=0) {
            setErrorMsg("age should be more than 0")
            ageRef.current.focus();
            setIsError(true);
            return;
        }
        props.updateUser(user);
        setAge("");
        setName("");
        setErrorMsg("")
     }

     const closeError = () => {
        setIsError(false)
     }
    return (
        <div>
            <label>User Name</label>
            <input ref={nameRef} type='text' value={name} onChange={(e)=>{setIsError(false); setName(e.target.value)}}/>
            <br/>
            <label>Age (in Years)</label>
            <input ref={ageRef} type='number' value={age} onChange={(e)=>{setIsError(false); setAge(e.target.value)}}/>
            <br/>
            <input type='button' value="Add" onClick={addUser}/>
            <div style={{display:'block'}}>
                {isError && <ErrorModal title="Error occured" error={errorMsg} closeError={closeError}/>}
            </div>
        </div>
    )
}
export default InputForm