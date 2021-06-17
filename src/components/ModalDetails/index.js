import React, {useState, useEffect} from 'react';
import {View, Text, Modal} from 'react-native';
import {Button} from 'react-native-paper';

export default function ModalDetails({
  setShowModal,
  showModal,
  pokemonsDetails,
}) {
  return (
    <Modal animationType="slide" transparent={false} visible={showModal}>
      <View>
        <Text style={{marginHorizontal: 150, marginVertical: 10}}>
          Habilidades
        </Text>
        {pokemonsDetails
          ? pokemonsDetails.abilities.map((hability, indexHability) => {
              return (
                <View
                  key={indexHability}
                  style={{
                    padding: 10,
                    margin: 4,
                    backgroundColor: '#105676',
                  }}>
                  <Text style={{marginHorizontal: 150, marginVertical: 10}}>
                    {hability.ability.name}
                  </Text>
                </View>
              );
            })
          : []}
        <Button
          onPress={() => setShowModal(false)}
          raised
          theme={{roundness: 3}}>
          Voltar
        </Button>
      </View>
    </Modal>
  );
}
