# COVID-19 Dashboard App

This React application provides a dashboard for tracking COVID-19 statistics in the United States. It includes features such as an overall dashboard, state-wise statistics, historical data visualization, and state comparisons.

## Table of Contents

- Installation
- Usage
- Features
- Technologies
- Folder Structure
- Global State Management
- Local State Management and Custom Hooks
- Data Fetching
- Data Visualization
- Responsive Design
- Type Safety with TypeScript
- Installation
- To run the application locally, follow these steps:

## Clone the repository:

1. `git clone https://github.com/your-username/covid-19-dashboard.git`

2. Navigate to the project directory:
   `cd nadsoft`

3. Install dependencies:
   `npm install`

4. Run the development server:
   `npm run dev`

5. Open your browser and visit http://localhost:3000 to view the application.

## Features

1. Dashboard
   Overview cards displaying overall COVID-19 data in the United States.
   News section with updates related to COVID-19.
2. Statistics
   State-wise cards showing the number of deaths, positive cases, negative cases, etc.
   Dynamically updates based on the selected state from the dropdown.
3. Historical Data
   Graphs illustrating COVID-19 statistics over time for a selected state.
   Date range selector for customized data visualization.
4. Comparison
   Data table comparing statistics across all states.

## Technologies

- React
- TypeScript
- Tailwind CSS
- Redux
- Axios
- DaisyUI

## Folder Structure

The project follows a modular and organized folder structure. Key directories include:

- src/components: Reusable React components.
- src/modules: Contains all modules.
- src/redux: Redux-related files (actions, reducers, store).
- src/hooks: Custom hooks for local state management and data fetching.
- src/services: Axios service for API communication.

### Global State Management

The application uses Redux for global state management. Key features are stored in the Redux store for easy access across components.

### Local State Management and Custom Hooks

Local state management and custom hooks are employed for handling component-specific logic and data fetching.

### Data Fetching

Axios is used for making API requests to fetch COVID-19 data. The application includes logic to dynamically update data based on user interactions.

### Data Visualization

The application utilizes line or bar charts to show trends over time and provides a date range selector for customized data visualization.

### Responsive Design

The application is designed to be responsive, ensuring a consistent look and feel across various devices and screen sizes.

### Type Safety with TypeScript

TypeScript is employed throughout the project to enhance type safety, improve code maintainability, and provide better development tooling support.

Feel free to customize this README file further based on additional details specific to your project.

#### Note:

- I didn't focus so much on the UI just to try to implement all the required logic and functionality.
