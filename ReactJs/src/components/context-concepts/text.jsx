import { useContext } from "react";
import { GlobalContext } from "../context/index";

function ContextTextComponent() {
    const {theme} = useContext(GlobalContext);
    return <h1 style={{ fontSize : theme === 'light' ? "50px" : "100px", 
                        backgroundColor : theme === 'light' ? "blue" : "black",
                        color: theme === 'light' ? "yellow" : "blue"
    }}>Yaswanth Boddu</h1>
}

export default ContextTextComponent;