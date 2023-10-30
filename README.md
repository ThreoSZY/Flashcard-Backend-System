# Flashcard Backend System

This project is designed to be a backend system that manages flashcards for quizzes.

## Table of Contents

- [Features](#features)
- [Usage](#usage)

## Features

- **Flashcard Interface**: A robust system to match and map the data found in `flashcards.json`.
  
- **Interactive REPL**: An interactive REPL to allow users to communicate with the backend. It allows adding, updating, and viewing flashcards. Running the `npm start` command initiates this REPL.

- **Update Card Functionality**: A feature to update existing cards or add new ones. If a flashcard doesn't have an ID, the system generates one for it.

- **Quiz Generator**: This function generates a quiz based on the available flashcards. It presents the choices in multiple choice format with letter identifiers.

## Usage

1. To initiate the REPL: 
   ```bash
   npm start
2. To run a quiz based on the flashcards:
   ```bash
   npm run quiz
