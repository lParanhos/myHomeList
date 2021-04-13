import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {AntDesign} from '@expo/vector-icons';

import {Input} from '../../components';

import {
  FormButton,
  FormCloseButton,
  FormContainer,
  FormWrapper,
} from './styles';
import {setItem} from '../../services/api';
import {Alert} from 'react-native';

const Form = () => {
  const {goBack} = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const clearForm = () => {
    setTitle('');
    setDescription('');
  };

  const handleSubmit = () => {
    if (title.trim()) {
      setItem({title, description, completed: false});
      Alert.alert('Adicionado com sucesso!');
      clearForm();
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

export default Form;
