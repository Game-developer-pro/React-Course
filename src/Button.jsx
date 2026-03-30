import buttonStyles from "./button.module.css"
function Button(props) {
    return (
        <div className={buttonStyles.contain}>
            <button onClick={props.calculate} className={buttonStyles.but} style={{backgroundColor: props.backgroundColor}}>{props.text}</button>
        </div>
    )
}

export default Button