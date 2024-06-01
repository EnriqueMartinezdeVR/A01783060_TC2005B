-- Usar la base de datos Pokémon
USE Pokemon;

-- Insertar filas dummy en la tabla Player
INSERT INTO Player (name, password, deck_id) VALUES
('Ash Ketchum', 'pikachu123', 1),
('Misty Waterflower', 'psyduck123', 2),
('Brock Stone', 'onix123', 3),
('Gary Oak', 'eevee123', 4),
('James Rocket', 'meowth123', 5),
('Jessie Rocket', 'wobbuffet123', 6),
('Tracey Sketchit', 'scyther123', 7),
('May Birch', 'torchic123', 8),
('Dawn Berlitz', 'piplup123', 9),
('Serena Yvonne', 'fennekin123', 10),
('Clemont Lemon', 'chespin123', 11),
('Bonnie Lemon', 'dedene123', 12),
('Lillie Alola', 'cosmog123', 13),
('Gladion Alola', 'silvally123', 14),
('Kiawe Alola', 'turtonator123', 15);

-- Insertar filas dummy en la tabla Pokemon_card
INSERT INTO Pokemon_card (name, ability_name, description, health, cost) VALUES
('Pikachu', 'Static', 'Electric type Pokémon', 60, 3),
('Charmander', 'Blaze', 'Fire type Pokémon', 50, 2),
('Squirtle', 'Torrent', 'Water type Pokémon', 50, 2),
('Bulbasaur', 'Overgrow', 'Grass type Pokémon', 50, 2),
('Eevee', 'Adaptability', 'Normal type Pokémon', 55, 2),
('Jigglypuff', 'Cute Charm', 'Fairy type Pokémon', 60, 1),
('Meowth', 'Pickup', 'Normal type Pokémon', 40, 1),
('Psyduck', 'Cloud Nine', 'Water type Pokémon', 50, 2),
('Onix', 'Sturdy', 'Rock/Ground type Pokémon', 90, 4),
('Scyther', 'Swarm', 'Bug/Flying type Pokémon', 70, 3),
('Torchic', 'Blaze', 'Fire type Pokémon', 50, 2),
('Piplup', 'Torrent', 'Water type Pokémon', 50, 2),
('Fennekin', 'Blaze', 'Fire type Pokémon', 50, 2),
('Chespin', 'Overgrow', 'Grass type Pokémon', 50, 2),
('Cosmog', 'Unaware', 'Psychic type Pokémon', 40, 1);

-- Insertar filas dummy en la tabla Trainer_card
INSERT INTO Trainer_card (name, description) VALUES
('Professor Oak', 'Grants extra card draw'),
('Brock\'s Training', 'Boosts Rock type Pokémon'),
('Misty\'s Determination', 'Boosts Water type Pokémon'),
('Team Rocket', 'Disrupts opponent\'s strategy'),
('Koga\'s Trap', 'Poisons opponent\'s Pokémon'),
('Erika\'s Hospitality', 'Heals Grass type Pokémon'),
('Lt. Surge\'s Strategy', 'Allows extra attacks'),
('Blaine\'s Quiz Show', 'Confuses opponent'),
('Giovanni\'s Exile', 'Removes opponent\'s Pokémon'),
('Roxanne\'s Defense', 'Increases Rock type defense'),
('Winona\'s Guidance', 'Finds Flying type Pokémon'),
('Cynthia\'s Ambition', 'Increases Pokémon power'),
('Wally\'s Training', 'Evolves Pokémon faster'),
('Lysandre\'s Trump Card', 'Recycles discard pile'),
('Red\'s Challenge', 'Increases attack power');

-- Insertar filas dummy en la tabla Game
INSERT INTO Game (cards, duration, enemies_played) VALUES
(5, 30, 2),
(6, 25, 3),
(5, 40, 1),
(4, 35, 2),
(7, 20, 4),
(6, 25, 3),
(5, 30, 2),
(4, 35, 2),
(7, 20, 4),
(6, 25, 3),
(5, 30, 2),
(4, 35, 2),
(7, 20, 4),
(6, 25, 3),
(5, 30, 2);

-- Insertar filas dummy en la tabla Deck
INSERT INTO Deck (player_id, card1, card2, card3, card4, card5, trainer1, trainer2, trainer3) VALUES
(1, 1, 2, 3, 4, 5, 1, 2, 3),
(2, 6, 7, 8, 9, 10, 4, 5, 6),
(3, 11, 12, 13, 14, 15, 7, 8, 9),
(4, 1, 3, 5, 7, 9, 10, 11, 12),
(5, 2, 4, 6, 8, 10, 13, 14, 15),
(6, 1, 4, 7, 10, 13, 2, 5, 8),
(7, 2, 5, 8, 11, 14, 3, 6, 9),
(8, 3, 6, 9, 12, 15, 1, 4, 7),
(9, 4, 7, 10, 13, 1, 5, 8, 11),
(10, 5, 8, 11, 14, 2, 6, 9, 12),
(11, 6, 9, 12, 15, 3, 7, 10, 13),
(12, 7, 10, 13, 1, 4, 8, 11, 14),
(13, 8, 11, 14, 2, 5, 9, 12, 15),
(14, 9, 12, 15, 3, 6, 10, 13, 1),
(15, 10, 13, 1, 4, 7, 11, 14, 2);
