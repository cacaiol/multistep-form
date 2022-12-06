
import "./Thanks.css";

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opnião é muito importante para melhorarmos nossos atendimentos. Nosso projeto só é possivel por causa de pessoas como você!</p>
      <h3>Muito obrigado {data.name}!</h3>
      <p>Para concluir sua avaliação, basta clicar no botão de enviar abaixo. Caso queira fazer alguma alteração é só clicar no botão voltar e modificar o que deseja.</p>
    </div>
  )
}

export default Thanks;