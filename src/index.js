import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, TextField, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './assets/images/logo.jpeg';
import './index.css';


function App() {
  return (
    <div>
       <div className="app">
            <header className="header">
                <img src={logo} alt="Logo da Empresa" className="logo-image" />
            </header>
            {/* Resto do seu código */}
        </div>

ReactDOM.render(<App />, document.getElementById('root'));

      <AppBar position="static">
        <Toolbar>
          <MenuIcon edge="start" color="inherit" aria-label="menu" />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            UAI DRIVER - Sua Mobilidade Urbana
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={{ padding: 20, marginTop: 20 }}>
              <Typography variant="h4">Bem-vindo ao UAI DRIVER</Typography>
              <Typography>Sua solução de mobilidade urbana em Assis, SP.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
                Baixe nosso aplicativo
              </Button>
            </Paper>
          </Grid>

         {/* Seção Sobre Nós */}
<Grid item xs={12}>
  <Paper style={{ padding: 20, marginTop: 20 }}>
    <Typography variant="h4">Sobre Nós</Typography>
    <Typography paragraph>
      Conheça a história e a missão do UAI DRIVER. Bem-vindo ao Uai Driver, o seu parceiro de confiança em transporte urbano. Somos mais do que uma plataforma de mobilidade; somos uma comunidade dedicada a conectar motoristas e passageiros, proporcionando experiências de viagem excepcionais em cada trajeto.
    </Typography>
    <Typography variant="h5">Nossa História</Typography>
    <Typography paragraph>
      O Uai Driver nasceu da visão de transformar a maneira como as pessoas se deslocam nas cidades. Fundada em 2023, na cidade de Assis interior de São Paulo, nossa empresa começou com um grupo de apaixonados por mobilidade que acreditavam que o transporte urbano poderia ser mais conveniente, acessível e sustentável. Desde então, crescemos e evoluímos, mantendo nossa dedicação à inovação e ao serviço excepcional.
    </Typography>
    {/* ... Outros parágrafos e subseções ... */}
  </Paper>
</Grid>

{/* Seção Política de Privacidade */}
<Grid item xs={12}>
  <Paper style={{ padding: 20, marginTop: 20 }}>
    <Typography variant="h4">Política de Privacidade</Typography>
    <Typography paragraph>
      A política de privacidade é um documento que informa aos usuários do aplicativo UAI DRIVER como seus dados pessoais são coletados, tratados e protegidos, de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018¹.
    </Typography>
    {/* ... Detalhes sobre a política de privacidade ... */}
  </Paper>
</Grid>

{/* Seção Sobre Nós */}
<Grid item xs={12}>
  <Paper style={{ padding: 20, marginTop: 20 }}>
    <Typography variant="h4">Sobre Nós</Typography>
    <Typography paragraph>
      Conheça a história e a missão do UAI DRIVER. Bem-vindo ao Uai Driver, o seu parceiro de confiança em transporte urbano. Somos mais do que uma plataforma de mobilidade; somos uma comunidade dedicada a conectar motoristas e passageiros, proporcionando experiências de viagem excepcionais em cada trajeto.
    </Typography>
    <Typography variant="h5">Nossa História</Typography>
    <Typography paragraph>
      O Uai Driver nasceu da visão de transformar a maneira como as pessoas se deslocam nas cidades. Fundada em 2023, na cidade de Assis interior de São Paulo, nossa empresa começou com um grupo de apaixonados por mobilidade que acreditavam que o transporte urbano poderia ser mais conveniente, acessível e sustentável. Desde então, crescemos e evoluímos, mantendo nossa dedicação à inovação e ao serviço excepcional.
    </Typography>
    {/* ... Outros parágrafos e subseções ... */}
    <Typography variant="h5">Nossa Missão</Typography>
    <Typography paragraph>
      Nossa missão é simplificar a sua vida, fornecendo soluções de transporte que atendam às suas necessidades. Quer você esteja indo para o trabalho, para casa, para uma reunião ou para qualquer lugar, estamos comprometidos em tornar cada viagem uma experiência segura, confortável e eficiente.
    </Typography>
    <Typography variant="h5">O Que Nos Diferencia</Typography>
    <Typography paragraph>
      No Uai Driver, acreditamos que o sucesso está em nossa abordagem centrada no cliente e na qualidade do nosso serviço. Aqui estão alguns dos elementos que nos diferenciam: Comunidade Confiável, Tecnologia Avançada, Preços Competitivos e Compromisso com a Segurança.
    </Typography>
  </Paper>
</Grid>

{/* Seção Política de Privacidade */}
<Grid item xs={12}>
  <Paper style={{ padding: 20, marginTop: 20 }}>
    <Typography variant="h4">Política de Privacidade</Typography>
    <Typography paragraph>
      A política de privacidade é um documento que informa aos usuários do aplicativo UAI DRIVER como seus dados pessoais são coletados, tratados e protegidos, de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018¹.
    </Typography>
    {/* ... Detalhes sobre a política de privacidade ... */}
    <Typography variant="h5">Como protegemos os seus dados?</Typography>
    <Typography paragraph>
      Adotamos medidas técnicas e administrativas para proteger os seus dados contra perda, roubo, uso indevido, acesso não autorizado, divulgação ou alteração. Entre essas medidas estão: Criptografia dos dados transmitidos pelo aplicativo, Controle de acesso aos dados armazenados pelo aplicativo, Treinamento dos funcionários e colaboradores sobre as boas práticas de proteção de dados e Monitoramento das atividades realizadas pelo aplicativo.
    </Typography>
  </Paper>
</Grid>

{/* Seção Nossos Serviços */}
<Grid item xs={12}>
  <Paper style={{ padding: 20, marginTop: 20 }}>
    <Typography variant="h4">Nossos Serviços</Typography>
    <Typography paragraph>
      Descreva aqui os serviços oferecidos pelo UAI DRIVER.
    </Typography>
    {/* ... Detalhes sobre os serviços ... */}
    <Typography paragraph>
      Oferecemos uma variedade de serviços para atender às suas necessidades de transporte, incluindo viagens urbanas, interurbanas e turísticas. Com uma plataforma intuitiva e eficiente, você pode facilmente solicitar um carro, acompanhar sua viagem em tempo real e pagar de forma segura e conveniente.
    </Typography>
    <Typography paragraph>
      Além disso, temos uma comunidade de motoristas treinados e dedicados, garantindo que cada viagem seja uma experiência agradável e segura.
    </Typography>
  </Paper>
</Grid>


{/* Seção Download do App */}
<Grid item xs={12}>
  <Paper style={{ padding: 20, marginTop: 20 }}>
    <Typography variant="h4">Download do App</Typography>
    <Typography paragraph>
      Baixe nosso aplicativo e comece a viajar com facilidade.
    </Typography>
    <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
      Download para Android
    </Button>
    <Button variant="contained" color="primary">
      Download para iOS
    </Button>
  </Paper>
</Grid>


          <Grid item xs={12}>
            <Paper style={{ padding: 20, marginTop: 20 }}>
              <Typography variant="h4">Contato</Typography>
              <Typography>Entre em contato conosco para dúvidas e informações.</Typography>
              <form style={{ marginTop: 20 }}>
                <TextField fullWidth label="Nome" variant="outlined" style={{ marginBottom: 20 }} />
                <TextField fullWidth label="Email" variant="outlined" style={{ marginBottom: 20 }} />
                <TextField fullWidth label="Mensagem" variant="outlined" multiline rows={4} style={{ marginBottom: 20 }} />
                <Button variant="contained" color="primary" type="submit">
                  Enviar
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
