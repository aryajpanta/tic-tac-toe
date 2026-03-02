# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern web-based Tic-Tac-Toe game with animated interface and responsive design. The project uses vanilla HTML, CSS, and JavaScript without external dependencies.

## Code Architecture

### Core Structure
- **index.html**: Main HTML structure with semantic markup
- **styles.css**: Complete styling with animations and responsive design
- **game.js**: Object-oriented game logic using TicTacToe class

### Game Architecture
- **TicTacToe Class**: Central game controller with state management
- **Board State**: 9-element array representing the 3x3 grid
- **Game Flow**: Turn-based system with automatic win/tie detection
- **Score Tracking**: Persistent scores across multiple games

### CSS Architecture
- **Component-based**: Each UI element has dedicated styles
- **Animation System**: Keyframe animations for all interactions
- **Responsive Design**: Mobile-first approach with media queries
- **State-based Styling**: Different styles for different game states

## Common Development Tasks

### Running the Game
- Open `index.html` in any modern web browser
- No build process required - pure client-side application

### Testing Changes
- Refresh browser to see updates
- Test on different screen sizes for responsive design
- Verify animations work smoothly

### Adding Features
- Extend TicTacToe class for new game logic
- Add CSS classes for new animations/states
- Update HTML structure for new UI elements

### Modifying Animations
- Add new keyframe animations in styles.css
- Apply animations to elements using animation properties
- Use existing animation patterns as reference

## Development Notes

### JavaScript Patterns
- Use class-based architecture for game logic
- Maintain separation of concerns (UI vs game logic)
- Use event listeners for user interactions
- Keep state management centralized in TicTacToe class

### CSS Patterns
- Use BEM-like naming for classes (.cell, .cell.x, .cell.o)
- Define animations before using them
- Use CSS variables for consistent theming
- Mobile-first responsive design approach

### HTML Structure
- Semantic HTML5 elements
- IDs for JavaScript targeting
- Classes for CSS styling
- Clean separation of content and presentation

## File Dependencies

- **index.html** → depends on styles.css and game.js
- **game.js** → manipulates DOM elements from index.html
- **styles.css** → styles elements defined in index.html

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS custom properties and animations

## Deployment Notes

- Pure client-side application
- No build process required
- Can be hosted on any static hosting service
- GitHub Pages compatible

## Animation System

### Available Animations
- **fadeIn**: For X and O marks appearing
- **take**: For cells being marked
- **winner**: For winning line cells
- **pulse**: For winning cells (continuous)
- **hover ripple**: For cell hover effects

### Animation Patterns
- Use keyframes for complex animations
- Apply via CSS classes
- Use transition for simple state changes
- Maintain consistent timing (0.3s, 0.5s, 1s)

## Responsive Design

### Breakpoints
- **Mobile**: max-width: 480px
- **Desktop**: min-width: 481px

### Responsive Elements
- Container padding and margins
- Font sizes and spacing
- Board dimensions
- Control button layout

## Game Logic

### Win Detection
- 8 possible winning combinations
- Horizontal, vertical, and diagonal checks
- Immediate win detection after each move

### Game States
- **Active**: Game in progress
- **Won**: Player has won
- **Tie**: Board is full with no winner
- **Reset**: Game ready for new round

## Score Management

- Persistent across game sessions
- Separate scores for X, O, and ties
- Updated immediately after each game
- Displayed in game info section