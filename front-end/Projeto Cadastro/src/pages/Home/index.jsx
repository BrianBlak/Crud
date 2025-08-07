import { useRef } from 'react'
import api from '../../services/api'
import { Container, Form, ContainerInput, Input, InputLabel } from './styles'
import  Button  from '../../components/Button'
import  Title  from '../../components/Title'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from "react-router-dom";
function Home() {
  
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerUser(){
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })
  }

  return (
    <Container>
      <Form>
        <TopBackground/>
        <Title>Cadastro de Usuários</Title>
        <ContainerInput>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type='text' placeholder='Nome de Usuário' ref={inputName}/>
            </div>
            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
            </div>
          
        </ContainerInput>

        <div style={{width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type='email' placeholder='Email do usuário' ref={inputEmail}/>
        </div>

        <Button type='button' onClick={registerUser} theme='primary'>Cadastrar Usuário</Button>
        <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver a lista de usuários</Button>
      </Form>
    </Container>
  )
}

export default Home
