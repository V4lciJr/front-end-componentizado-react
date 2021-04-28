import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="" alt="user photo" />
          <h1>Nome de Usuário</h1>
          <h3>username: </h3>
          <span>Valci</span>
          <div>
            <h4>Followers</h4>
            <span>80</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>810</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>80</span>
          </div>
        </div>
        <div>Repositores</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
