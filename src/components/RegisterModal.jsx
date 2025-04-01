import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterModal = ({ isOpen, onRequestClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/register', data);
      console.log('Usuario registrado:', response.data);
      onRequestClose();
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Nombre" required />
        <input {...register('email')} placeholder="Email" required />
        <input {...register('password')} placeholder="Contraseña" type="password" required />
        <button type="submit">Registrarse</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;