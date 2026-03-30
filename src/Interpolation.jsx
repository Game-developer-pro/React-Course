import InterpolationMain from "./interpolation.main"
function Interpolation() {
    const name = 'Ayo'
    const age = '29'
    const userInfo = {
        firstname: "Ayo",
        lastname: "John",
        age: 39,
        gender: 'male'
        
    }

    const users = [
        {
            firstname: "Ayo",
            lastname: "John",
            age: 39,
            gender: 'male'
        },
        {
            firstname: "bola",
            lastname: "bolu",
            age: 10,
            gender: 'female'
        },
        {
            firstname: "Layo",
            lastname: "Lolu",
            age: 21,
            gender: 'male'
        },
    ]
    return(
        <div>
            <h1>React Interpolation</h1>
            {/* <p>Name: {name}</p>
            <p>Age: {age}</p> */}
            <p>Name: {userInfo.firstname} {userInfo.lastname}</p>
            <p>Age: {userInfo.age}</p>
            <p>Gender: {userInfo.gender}</p>

            <InterpolationMain users={users}/>
        </div>
    )
}

export default Interpolation
