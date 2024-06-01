DROP DATABASE IF EXISTS Pokemon;
CREATE DATABASE IF NOT EXISTS Pokemon /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE=utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE Pokemon;

CREATE TABLE IF NOT EXISTS Player (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    deck_id INT UNIQUE,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS Pokemon_card (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    ability_name VARCHAR(45) NOT NULL,
    description TEXT,
    health INT NOT NULL,
    cost INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS Trainer_card (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS Game (
    id INT NOT NULL AUTO_INCREMENT,
    cards INT NOT NULL,
    duration INT NOT NULL,
    enemies_played INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS Deck (
    id INT NOT NULL AUTO_INCREMENT,
    player_id INT NOT NULL,
    card1 INT NOT NULL,
    card2 INT NOT NULL,
    card3 INT NOT NULL,
    card4 INT NOT NULL,
    card5 INT NOT NULL,
    trainer1 INT DEFAULT NULL,
    trainer2 INT DEFAULT NULL,
    trainer3 INT DEFAULT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_deck_player FOREIGN KEY (player_id) REFERENCES Player(id),
    CONSTRAINT fk_deck_card1 FOREIGN KEY (card1) REFERENCES Pokemon_card(id),
    CONSTRAINT fk_deck_card2 FOREIGN KEY (card2) REFERENCES Pokemon_card(id),
    CONSTRAINT fk_deck_card3 FOREIGN KEY (card3) REFERENCES Pokemon_card(id),
    CONSTRAINT fk_deck_card4 FOREIGN KEY (card4) REFERENCES Pokemon_card(id),
    CONSTRAINT fk_deck_card5 FOREIGN KEY (card5) REFERENCES Pokemon_card(id),
    CONSTRAINT fk_deck_trainer1 FOREIGN KEY (trainer1) REFERENCES Trainer_card(id),
    CONSTRAINT fk_deck_trainer2 FOREIGN KEY (trainer2) REFERENCES Trainer_card(id),
    CONSTRAINT fk_deck_trainer3 FOREIGN KEY (trainer3) REFERENCES Trainer_card(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE VIEW Deck_Pokemon AS
SELECT d.id AS deck_id, p.name AS player_name, pc.name AS pokemon_name, pc.description AS pokemon_description
FROM Deck d
JOIN Pokemon_card pc ON d.card1 = pc.id OR d.card2 = pc.id OR d.card3 = pc.id OR d.card4 = pc.id OR d.card5 = pc.id
JOIN Player p ON d.player_id = p.id;

CREATE VIEW Deck_Trainer AS
SELECT d.id AS deck_id, p.name AS player_name, tc.name AS trainer_name, tc.description AS trainer_description
FROM Deck d
JOIN Trainer_card tc ON d.trainer1 = tc.id OR d.trainer2 = tc.id OR d.trainer3 = tc.id
JOIN Player p ON d.player_id = p.id;



