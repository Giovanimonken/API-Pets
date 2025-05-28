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
            return res.status(500).json('Erro ao atualizar algo na tabela Usuarios');
        }
        res.status(201).json({message: 'Usuario atualizado com sucesso!'});
    });
});

app.delete('/Usuarios/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM Usuarios WHERE id = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao deletar o Usuario');
        }
        res.status(200).json({message: 'Usuario deletado com sucesso!'});
    });
});


app.listen(port, () => {
    console.log(`Api rodando em http://localhost:${port}`); 
});

//Servicos

app.get('/Servicos', (req, res) => {
    db.query('SELECT * FROM Servicos', (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao selecionar a tabela Servicos');
        }
        res.status(200).json({Servicos: results});
    });
});

app.post('/Servicos', (req, res) => {
    const { nome, preco  } = req.body;
    db.query('INSERT INTO Servicos (nome, preco  ) VALUES (?, ?)', 
        [ nome, preco ], 
        (error, results) => {
        if (error) {
            console.log(error)
            return res.status(500).json('Erro ao inserir algo na tabela Servicos');
        }
        res.status(201).json({message: 'Servico inserido com sucesso!'});
    });
});

app.put('/Servicos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    db.query('UPDATE Servicos SET nome = ?, preco = ? WHERE id = ?', [nome, preco , id], (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao atualizar algo na tabela Servicos');
        }
        res.status(201).json({message: 'Servico atualizado com sucesso!'});
    });
});

app.delete('/Servicos/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM Servicos WHERE id = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao deletar o Servico');
        }
        res.status(200).json({message: 'Servico deletado com sucesso!'});
    });
});


app.listen(port, () => {
    console.log(`Api rodando em http://localhost:${port}`); 
});

//Pets

app.get('/Pets', (req, res) => {
    db.query('SELECT * FROM Pets', (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao selecionar a tabela Pets');
        }
        res.status(200).json({Pets: results});
    });
});

app.post('/Pets', (req, res) => {
    const { nome, especie  } = req.body;
    db.query('INSERT INTO Pets (nome, especie  ) VALUES (?, ?)', 
        [ nome, especie ], 
        (error, results) => {
        if (error) {
            console.log(error)
            return res.status(500).json('Erro ao inserir algo na tabela Pets');
        }
        res.status(201).json({message: 'Pet inserido com sucesso!'});
    });
});

app.put('/Pets/:id', (req, res) => {
    const { id } = req.params;
    const { nome, especie } = req.body;
    db.query('UPDATE Pets SET nome = ?, especie = ? WHERE id = ?', [nome, especie , id], (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao atualizar algo na tabela Pets');
        }
        res.status(201).json({message: 'Pet atualizado com sucesso!'});
    });
});

app.delete('/Pets/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM Pets WHERE id = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).json('Erro ao deletar o Pet');
        }
        res.status(200).json({message: 'Pet deletado com sucesso!'});
    });
});


app.listen(port, () => {
    console.log(`Api rodando em http://localhost:${port}`); 
});