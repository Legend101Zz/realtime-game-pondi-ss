# Real-time Canvas Game with Socket.io

![Game Screenshot](./Screenshot%202023-10-23%20at%2018.16.22.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [How to Play](#how-to-play)
- [Game Mechanics](#game-mechanics)
- [Contributing](#contributing)
- [License](#license)

## Introduction

![Game Screenshot](./Screenshot%202023-10-23%20at%2018.23.29.png)
Welcome to our real-time canvas game using Socket.io and HTML Canvas! This game is a scalable multiplayer experience where players control circular orbs, aiming to grow in size by consuming smaller orbs while avoiding larger ones. Compete against other players in a dynamic, ever-evolving world.

## Features

- Real-time multiplayer gameplay.
- Scalable game environment.
- Dynamic orb interactions.
- Player leaderboards.
- Beautiful HTML Canvas graphics.

## Prerequisites

Before setting up and playing the game, make sure you have the following prerequisites installed:

- Node.js: Download and install Node.js from [nodejs.org](https://nodejs.org/).

## Setup

Follow these steps to set up the game on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/Legend101Zz/realtime-game-pondi-ss
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev

   or

   npm start
   ```

4. Open your web browser and go to http://localhost:9000 to play the game.

## How to Play

**Objective**: Grow your orb as large as possible by eating orbs (represented as smaller circles) and orbs from other players.

**Controls**: Use your mouse to control the direction of your orb. Your orb will follow your cursor.

**Game Area**: You are in a shared canvas with other players. Be cautious; larger orbs can consume you.

**Scoring**: Your score is based on the size of your orb and the orbs you consume.

**Leaderboard**: Check the leaderboard on the screen to see how you rank compared to other players.

## Game Mechanics

- Orbs will spawn randomly on the canvas.
- Larger orbs can consume smaller orbs.
- When your orb consumes another orb, it will grow in size.
- Avoid contact with orbs larger than yours, as they can consume you.
- Play strategically to reach the top of the leaderboard.

## Contributing

We welcome contributions from the community. If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Enjoy the game! If you have any questions or encounter issues, feel free to contact us.

Happy gaming! 🎮
