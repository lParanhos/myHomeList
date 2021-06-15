import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {AntDesign} from '@expo/vector-icons';
import {inject, observer} from 'mobx-react';
import {Alert} from 'react-native';

import {Input} from '../../components';

import {setItem} from '../../services/api';

import Store from '../../store';

import {
  FormButton,
  FormCloseButton,
  FormContainer,
  FormWrapper,
} from './styles';
interface Props {
  store?: typeof Store;
}

const Form = ({store}: Props) => {
  const {goBack} = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const clearForm = () => {
    setTitle('');
    setDescription('');
  };

  const handleSubmit = async () => {
    if (title.trim()) {
      const newItem = {title, description, completed: false};
      const itemID = await setItem(newItem);
      if (itemID) {
        store?.addNewItem({...newItem, id: itemID});
        Alert.alert('Adicionado com sucesso!');
        clearForm();
        return;
      }

      Alert.alert('Erro ao adicionar');
      return;
    }
    Alert.alert('O título é um campo obrigatório');
  };

  return (
    <FormContainer>
      <FormCloseButton onPress={() => goBack()}>
        <AntDesign name="close" size={24} color="black" />
      </FormCloseButton>
      <FormWrapper>
        <Input
          label="Titulo"
          placeholder="Frigideira"
          value={title}
          onChangeText={value => setTitle(value)}
        />
        <Input
          label="Descrição"
          placeholder="Vou ganhar de presente"
          value={description}
          onChangeText={value => setDescription(value)}
        />
        <FormButton title="Salvar" onPress={handleSubmit} />
        <FormButton title="Cancelar" onPress={() => goBack()} color="orange" />
      </FormWrapper>
    </FormContainer>
  );
};

export default inject('store')(observer(Form));
