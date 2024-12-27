import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signup (props) {
    const users = props.users;
    const setUsers = props.setUsers;
    const [tuser, setTUser] = useState("");
    const [tpass, setTPass] = useState("");
    let cpass = "";
    const [message, setMessage] = useState(true);
    const navigate = useNavigate();

    function getUsername(evt) {
        setTUser(evt.target.value);
    }

    function getPassword(evt) {
        setTPass(evt.target.value);
    }

    function checkPassword(evt) {
        cpass = evt.target.value;
        if(tpass !== cpass) {
            setMessage(false);
        } else{
            setMessage(true);
        }
    }

    function addUser() {
        setUsers([...users, {username: tuser, password: tpass}]);
        navigate("/");
    }

    return (
        <>
            <div className="bg-black p-10 md:p-16">
                <div className="bg-[#EFEFEF] p-5 md:p-10 border rounded-md">
                    <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
                    <p>You can Signup here :)</p>
                    <div className="flex flex-col gap-2 my-2">
                        <input type="text"
                         placeholder="username"
                         className="w-52 border border-black p-1 bg-transparent rounded-md"
                         onChange={getUsername}
                         />

                        <input type="text"
                         placeholder="password"
                         className="w-52 border border-black p-1 bg-transparent rounded-md"
                         onChange={getPassword}
                         />

                        <input type="text"
                         placeholder="confirm password"
                         className="w-52 border border-black p-1 bg-transparent rounded-md"
                         onChange={checkPassword}
                         /> {message ? "" : <span className="text-red-500">Password Mismatch</span>}
                    </div>
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </>
    )
}

export default Signup