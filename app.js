const express = require('express');
const app = express();
const db = require('./db');
const port = 3000; 

app.use(express.json());

app.get('/Usuarios', (req, res) => {
    db.query('SELECT * FROM Usuarios', (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao selecionar a tabela Usuarios');
        }
        res.status(200).json({Usuarios: results});
    });
});

app.post('/Usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    db.query('INSERT INTO Usuarios (nome, email , senha) VALUES (?, ?, ?)', 
        [ nome, email, senha], 
        (error, results) => {
        if (error) {
            console.log(error)
            return res.status(500).json('Erro ao inserir algo na tabela Usuarios');
        }
        res.status(201).json({message: 'Usuario inserido com sucesso!'});
    });
});

app.put('/Usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    db.query('UPDATE Usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?', [nome, email, senha, id], (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao atualizar algo na tabela cliente');
        }
        res.status(201).json({message: 'Usuario atualizado com sucesso!'});
    });
});

app.delete('/Usuarios/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM Usuarios WHERE id = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao deletar o cliente');
        }
        res.status(200).json({message: 'Usuario deletado com sucesso!'});
    });
});


app.listen(port, () => {
    console.log(`Api rodando em http://localhost:${port}`); 
});