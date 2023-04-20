import { useState, useEffect } from 'react';
import './App.css';
import {getCampeonato} from './services/api.js';

function App() {
  const [brasileirao, setBrasileirao] = useState([]);

  async function fetchData(){
    const response = await getCampeonato("tabela");
    setBrasileirao(response);
  }

  useEffect(()=>{
    if(brasileirao?.length === 0){
      fetchData();
    }
  },[brasileirao]);


  return (
    <div className="App">
      <header>
        <h1> BRASILEIRAO 2023 </h1>
        <div className='row'>
          <label>TABELA DE CLASSIFICAÇÃO</label>
          <label> asdasd</label>

        </div>
      </header>
      { 
        brasileirao.length === 0 ? 
        (
          <div className='loading'>Carregando...</div>
        ):(
          <>
          
          <table>
            <thead>
              <tr>  
                <th />
                <th />
                <th className='txtLeft'>Clube</th>
                <th>Pts</th>
                <th>Partidas</th>
                <th>Vitórias</th>
                <th>Empates</th>
                <th>Derrotas</th>
                <th>GM</th>
                <th>GC</th>
                <th>SG</th>
                <th>AP (%)</th>
              </tr>
            </thead>
            <tbody>
              {brasileirao.map((time,index) => (
                <tr
                  key={index}
                  className={`
                    ${index % 2 === 0 ? "even" : "odd" }
                    ${index < 4 && "libertadores"}
                    ${index >=4 && index <=5 && "pre-libertadores"}
                    ${index >=6 && index <=11 && "sula"}
                    ${index >=16 && index <=19 && "z4"}
                  `}
                >
                  <td>
                    <img src={time.time.escudo} 
                      alt={time.nome}
                      width="30"  heigth="30" 
                    />
                  </td>
                  <td>{time.posicao}</td>
                  <td className='txtLeft'>{time.time.nome_popular}</td>
                  <td>{time.pontos}</td>
                  <td>{time.jogos}</td>
                  <td>{time.vitorias}</td>
                  <td>{time.empates}</td>
                  <td>{time.derrotas}</td>
                  <td>{time.gols_pro}</td>
                  <td>{time.gols_contra}</td>
                  <td>{time.saldo_gols}</td>
                  <td>{time.aproveitamento}</td>

                </tr>
              ))}
            </tbody>
          </table>

          <footer
            style={{
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            <ul style={{
                display: "flex",
                justifyContent: "center",
                listStyle: "none",
                gap: "20px",
              }}
            >
              <li style={{
                display: "flex",
                alignItems: "center",
                
              }}>
                <span
                  style={{
                    backgroundColor: "#00b16a",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                ></span>
                <span> Fase de grupos da Copa Libertadores</span>  
              </li>
              <li style={{ display: "flex", alignItems: "center", }}>
                <span
                  style={{
                    backgroundColor: "#0c2dec",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                ></span>
                <span> Pré-classificados para Libertadores</span>  
              </li>
              <li style={{ display: "flex", alignItems: "center", }}>
                <span
                  style={{
                    backgroundColor: "#eba82c",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                ></span>
                <span>Fase de grupos da Libertadores</span>  
              </li>
              <li style={{ display: "flex", alignItems: "center", }}>
                <span
                  style={{
                    backgroundColor: "#e74c35",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                ></span>
                <span>Rebaixamento</span>  
              </li>
            </ul>
          </footer>
          </>
        )
      }

    </div>
  )
}

export default App
