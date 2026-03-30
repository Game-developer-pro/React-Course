import { randomFillSync } from "crypto"

function InterpolationMain(users) {
    return (
       <div>
            {users.map((users, i) => (
                <div key={i}>
                    <p>{i + 1}</p>
                    <ul style={{border: "thin solid black", margin: "10px"}}>
                        <li>{users.firstname}</li>
                        <li>{users.lastname}</li>
                        <li>{users.gender}</li>
                        <li>{users.age}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default InterpolationMain

