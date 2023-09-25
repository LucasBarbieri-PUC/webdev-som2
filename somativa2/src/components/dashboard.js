import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const Dashboard = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        } else {
          console.log('Usuário não encontrado no Firestore.');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <p>Nome: {userData.nome}</p>
          <p>Sobrenome: {userData.sobrenome}</p>
          <p>Data de Nascimento: {userData.dataNascimento}</p>
        </div>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
};

export default Dashboard;