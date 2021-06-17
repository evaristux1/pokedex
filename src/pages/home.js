// ? Home da listagem principal
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-paper';
import {View, Text, ScrollView} from 'react-native';
import ModalDetails from '../components/ModalDetails';
import FabButton from '../components/FabButton';

import api from '../services/api';

function Home({navigation}) {
  const [pokemons, setPokemons] = useState();
  const [pokemonsDetails, setPokemonsDetails] = useState();
  const [showModal, setShowModal] = useState(false);

  // ! Requisição que traz todos os pokemons

  async function requests() {
    const pokemonsApi = await api.get('/pokemon?limit=100&offset=200');
    setPokemons(pokemonsApi?.data?.results);
  }

  // Função para mostrar o Modal/pop-up com os detalhes do pokemon
  async function showDetails(name) {
    const pokemonsApi = await api.get(`${name}`);

    setPokemonsDetails(pokemonsApi.data);

    setShowModal(true);
  }

  useEffect(() => {
    requests();
  }, []);

  return (
    <>
      <ModalDetails
        showModal={showModal}
        setShowModal={setShowModal}
        pokemonsDetails={pokemonsDetails}
      />
      <View>
        <ScrollView style={{backgroundColor: '#123145'}}>
          {pokemons
            ? pokemons.map(poke => {
                return (
                  <View
                    key={poke.name}
                    style={{
                      padding: 10,
                      margin: 2,
                      backgroundColor: '#105676',
                    }}>
                    <Text style={{marginHorizontal: 150, marginVertical: 10}}>
                      {poke.name}
                    </Text>
                    <Button
                      raised
                      theme={{roundness: 3}}
                      onPress={() => showDetails(poke.url)}>
                      DETALHES
                    </Button>
                  </View>
                );
              })
            : []}
        </ScrollView>
        <FabButton />
      </View>
    </>
  );
}

export default Home;
