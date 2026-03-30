// import React, {useState} from "react";
// import z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// export const About = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         age: ""
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData({
//             ...data,
//             [name]: value,
//         });
//     };

    
//         const loginSchema = z.object({
//             email: z.email().nonempty(),
//             password: z.string().nonempty().min(6, "password must be atleast 6 characters long")
//         })

//         const { register, handleSubmit, formState: { errors } } = useForm(
//             {
//                 resolver: zodResolver(loginSchema)
//             }
//         )

//     return (
//         <div style={{ marginTop: "50px" }}>
//             <h1>Register</h1>
//             <form action="">
//                 <input type="text" placeholder="Name" onChange={handleChange} />
//                 <input type="email" placeholder="Email" onChange={handleChange} />
//                 <input type="password" placeholder="Password" onChange={handleChange} />
//                 <input type="number" placeholder="Age" onChange={handleChange} />
//                 <button>Register</button>
//             </form>
//         </div>
//     )
// }
import React from 'react'
import { ReacHookForm } from '../components/ReactHookForm'

export const About = () => {
    return (
        <div>
            <ReacHookForm />
        </div>
    )
}
