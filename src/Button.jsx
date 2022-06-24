import "./Button.css"
function Button({txt}) {
    function clickMouse(){
        atualiza(contador+1);
    }
    return(
        <button className="botao" >
        Order Now
        </button>
    ); 
};
export default Button;