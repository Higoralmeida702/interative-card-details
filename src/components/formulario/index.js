import './formulario.css'

const Formulario = () => {
    return (
<div>
    <div className="formularioContainer">
    <label>CARDHOLDER NAME</label>
    <input type="text" placeholder="e.g. Jane Applessed" />
        <label>CARD NUMBER</label>
        <input type="text" placeholder="e.g 1234 5678 9123 0000" />
            <label>EXP.DATE   (MM/YY)</label>
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YY" />
            <label>CVC</label>
            <input type="text" placeholder="e.g. 123"/>          
    </div>
            <div>
        <img className="cartao frente"src="./imagens/bg-card-front.png" alt="" />
        <img className="cartao verso"src="./imagens/bg-card-back.png" alt="" />
            </div>
</div>
    )
}

export default Formulario
