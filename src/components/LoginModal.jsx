import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', data);
      console.log('Usuario logueado:', response.data);
      onRequestClose();
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" required />
        <input {...register('password')} placeholder="Contraseña" type="password" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </Modal>
  );
};

export default LoginModal;