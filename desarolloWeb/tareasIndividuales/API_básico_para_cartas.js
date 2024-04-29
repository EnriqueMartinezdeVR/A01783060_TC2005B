'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let cards = [];

app.post('/api/load-cards', (req, res) => {
  cards = req.body;
  res.json({ message: 'Cartas cargadas correctamente.' });
});

app.get('/api/cards', (req, res) => {
  if (cards.length === 0) {
    res.status(404).json({ message: 'No hay cartas almacenadas.' });
  } else {
    res.json(cards);
  }
});

app.get('/api/cards/:id', (req, res) => {
  const cardId = req.params.id;
  const card = cards.find(card => card.id === cardId);
  if (!card) {
    res.status(404).json({ message: 'La carta no existe.' });
  } else {
    res.json(card);
  }
});

app.post('/api/cards', (req, res) => {
  const newCard = req.body;
  if (!newCard.id || !newCard.type || !newCard.name || !newCard.description || !newCard.attack || !newCard.defense || !newCard.special_ability || !newCard.special_ability_attack) {
    res.status(400).json({ message: 'Faltan atributos en la carta.' });
  } else if (cards.some(card => card.id === newCard.id)) {
    res.status(409).json({ message: 'La carta ya existe.' });
  } else {
    cards.push(newCard);
    res.status(201).json({ message: 'Carta agregada correctamente.' });
  }
});

app.delete('/api/cards/:id', (req, res) => {
  const cardId = req.params.id;
  const index = cards.findIndex(card => card.id === cardId);
  if (index === -1) {
    res.status(404).json({ message: 'La carta no existe.' });
  } else {
    cards.splice(index, 1);
    res.json({ message: 'Carta eliminada correctamente.' });
  }
});

app.put('/api/cards/:id', (req, res) => {
  const cardId = req.params.id;
  const updatedFields = req.body;
  const card = cards.find(card => card.id === cardId);
  if (!card) {
    res.status(404).json({ message: 'La carta no existe.' });
  } else {
    Object.assign(card, updatedFields);
    res.json({ message: 'Carta actualizada correctamente.' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
