import { useState } from 'react';
import emailjs from '@emailjs/browser'
import './styles.css';

function Formulario() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [cpf, setCPF] = useState('')
  const [profissao, setProfissao] = useState('')
  const [pergunta, setPAdotou] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [bairro, setBairro] = useState('')
  const [pergunta2, setPergunta2] = useState('')
  const [pergunta3, setPergunta3] = useState('')
  const [pergunta4, setPergunta4] = useState('')
  const [pergunta6, setPergunta6] = useState('')
  const [pergunta7, setPergunta7] = useState('')
  const [pergunta8, setPergunta8] = useState('')
  const [pergunta9, setPergunta9] = useState('')
  const [pergunta10, setPergunta10] = useState('')


  function sendEmail(e){
    e.preventDefault();

    if(name === ''  || email === '' || message === '' || cpf === '' || profissao === '' || pergunta === '' ||
    telefone === '' || cidade === '' || estado === '' || bairro === '' || pergunta2 === '' || pergunta3 === '' ||
    pergunta4 === '' || pergunta6 === '' || pergunta7 === '' || pergunta8 === '' || pergunta9 === '' ||
    pergunta10 === ''){
      alert("Preencha todos os campos")
      return;
    }

    const templateParms = {
      from_name: name,
      message: message,
      email: email,
      cpf: cpf,
      pergunta: pergunta,
      profissao: profissao,
      telefone: telefone,
      cidade: cidade,
      estado: estado,
      bairro: bairro,
      pergunta2: pergunta2,
      pergunta3: pergunta3,
      pergunta4: pergunta4,
      pergunta6: pergunta6,
      pergunta7: pergunta7,
      pergunta8: pergunta8,
      pergunta9: pergunta9,
      pergunta10: pergunta10,
    }

    emailjs.send("service_knlq1du", "template_d146svl", templateParms, "nUss8v7961AJqsbua")
    .then((response) =>{
        console.log("Email enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        setCPF('')
        setProfissao('')
        setPAdotou('')
        setTelefone('')
        setCidade('')
        setEstado('')
        setBairro('')
        setPergunta2('')
        setPergunta3('')
        setPergunta4('')
        setPergunta6('')
        setPergunta7('')
        setPergunta8('')
        setPergunta9('')
        setPergunta10('')

    }, (err)=>{
      console.log("erro", err)
    })

  }
  return (
    <div className="corpo">
        <h1>Formulário de Adoção</h1>
        <h5>Preencha suas informações corretamentes</h5>
        <div style={{ marginTop: '50px' }}/>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
        
        className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input 
          className="input"
          type="text"
          placeholder="Digite seu CPF"
          onChange={(e) => setCPF(e.target.value)}
          value={cpf}
        />

        <input 
          className="input"
          type="text"
          placeholder="Digite sua profissão"
          onChange={(e) => setProfissao(e.target.value)}
          value={profissao}
        />

        <input 
          className="input"
          type="text"
          placeholder="Já adotou algum animal antes?"
          onChange={(e) => setPAdotou(e.target.value)}
          value={pergunta}
        />

        <input 
          className="input"
          type="text"
          placeholder="Telefone"
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
        />

        <input 
          className="input"
          type="text"
          placeholder="Cidade"
          onChange={(e) => setCidade(e.target.value)}
          value={cidade}
        />

        <input 
          className="input"
          type="text"
          placeholder="Estado"
          onChange={(e) => setEstado(e.target.value)}
          value={estado}
        />

        <input 
          className="input"
          type="text"
          placeholder="Bairro"
          onChange={(e) => setBairro(e.target.value)}
          value={bairro}
        />

        <input 
          className="input"
          type="text"
          placeholder="Sua casa é apartamento?"
          onChange={(e) => setPergunta2(e.target.value)}
          value={pergunta2}
        />

        <input 
          className="input"
          type="number"
          placeholder="Número de adultos na casa"
          onChange={(e) => setPergunta3(e.target.value)}
          value={pergunta3}
        />

        <input 
          className="input"
          type="number"
          placeholder="Número de crianças na casa"
          onChange={(e) => setPergunta4(e.target.value)}
          value={pergunta4}
        />


        <input 
          className="input"
          type="text"
          placeholder="Já teve outros animais? Se sim, quais?"
          onChange={(e) => setPergunta6(e.target.value)}
          value={pergunta6}
        />

        <input 
          className="input"
          type="text"
          placeholder="Há quanto tempo planeja essa adoção?"
          onChange={(e) => setPergunta7(e.target.value)}
          value={pergunta7}
        />

        <input 
          className="input"
          type="text"
          placeholder="Alguém na sua casa tem alérgia?"
          onChange={(e) => setPergunta8(e.target.value)}
          value={pergunta8}
        />

        <input 
          className="input"
          type="text"
          placeholder="O que fará se não conseguir cuidar do animal?"
          onChange={(e) => setPergunta9(e.target.value)}
          value={pergunta9}
        />

        <input 
          className="input"
          type="text"
          placeholder="O que fará se precisar se mudar?"
          onChange={(e) => setPergunta10(e.target.value)}
          value={pergunta10}
        />

        <textarea 
          className="textarea"
          placeholder="Motivos do desejo de adoção"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        
        <p><span>IMPORTANTE</span>: Abandonar, soltar, deixar fugir, não alimentar, acorrentar, bater, amedrontar e deixar acasalar indiscriminadamente são formas de maus tratos com pena prevista na lei. 
            O PetAdote atuará conforme artigo 164 do Código Penal, artigo 32 da Lei Federal 9.605, de 12 de fevereiro de 1998 (Lei de Crimes Ambientais), e da Lei Municipal 13.131, de 18 de maio de 2001 (Lei de Posse Responsável), contra qualquer um que descumpra as determinações previstas, sejam estes adotantes ou não. 
            Em caso de dúvidas, busque informações e auxílios de profissionais veterinários e nunca de curiosos ou da internet.</p>
            
        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}


export default Formulario;
