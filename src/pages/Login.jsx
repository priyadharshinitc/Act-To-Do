import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
    const [tuser, setTUser] = useState("");
    const [tpass, setTPass] = useState("");
    const [ruser, setRUser] = useState(true);

    const users = props.users;
    let userFound = false;
    // console.log(users);

    const navigate = useNavigate();

    function getUsername(evt) {
        setTUser(evt.target.value);
    }

    function getPassword(evt) {
        setTPass(evt.target.value);
    }

    function checkUser() {
        users.forEach(function(item) {
            if(item.username === tuser && item.password === tpass) {
                // console.log("Login S");
                userFound = true;
                setRUser(true);
                // return; // Using return here only returns from this current iteration. To return from the whole loop, you can use for loop and break.
                navigate("/landing", {state: {user: tuser}});
            }
        });

        if(userFound === false) {
            // console.log("Login F");
            setRUser(false);
        }
    }

    return (
        <>
            <div className="bg-black p-10 md:p-16">
                <div className="bg-[#EFEFEF] p-5 md:p-10 border rounded-md">
                    <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
                    {ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up before you Login!</p>}
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
                    </div>
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login