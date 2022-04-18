import React, { Component } from 'react';
import api from '../../api';
import { PlayEpisode, EpisodeNumber, EpisodeTitle, AllInfos, DivImagem, ContainerDiv } from '../StyleTemporadas';
import Play from '../../assets/images/icons/Play.svg'

class Star extends Component {

    state = {
      filmes: [],
    }

    state2 = {

    }
  
    async componentDidMount() {
      const response = await api.get('/episodes/SHOW123.json');

      console.log(response.data);
  
      this.setState({ filmes: response.data });
    }
  
    render() {
  
      let { filmes } = this.state

      if(filmes) {
        filmes = filmes.filter(element => {
          console.log(element)
          return element !== null;
        });
      }

      return (
        <>
          {filmes.map(filme => (
            <AllInfos key={filme?.Duration}>
              <ContainerDiv>
              <EpisodeNumber>{filme?.EpisodeNumber}</EpisodeNumber>
              
              <EpisodeTitle>{filme?.Title}</EpisodeTitle>
              
              <DivImagem>
                <PlayEpisode src={Play}/>
              </DivImagem>
              </ContainerDiv>
            </AllInfos>
          ))}
        </>
      );
    };
  };
  
  export default Star;