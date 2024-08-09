# Dynamic React Framework

## Description

This project is a dynamic React-based framework designed to load and manage multiple React applications within a unified interface. The framework allows for seamless integration of different components and applications, enabling them to interact without direct communication. It provides a flexible and configurable structure for building and managing complex user interfaces.

## Features

### 1. Dynamic Menu Component

- **Description**: The framework includes a UI component that displays a common menu.
- **Functionality**: The menu can be updated dynamically using configuration assets such as JSON files.
- **Purpose**: This allows for flexibility in updating the UI without needing to modify the core application code.

### 2. Dynamic View Panel

- **Description**: The framework provides a view panel where external React applications can be dynamically loaded.
- **Functionality**: Applications are loaded based on configurations defined in JSON files, allowing for modular and scalable application development.
- **Purpose**: This enables the easy integration of different applications into a single interface.

### 3. Top-Level Menu Synchronization

- **Description**: The top-level menu updates dynamically when a new application is loaded.
- **Functionality**: The framework reads the application's preferred menu configuration and updates the UI accordingly.
- **Purpose**: This ensures a seamless and intuitive user experience, as the menu reflects the currently active application.

### 4. Dynamic Component Loading

- **Description**: The application can load UI components dynamically based on configuration assets.
- **Functionality**: Components such as `RegistrationForm v1` and `RegistrationForm v2` are loaded based on the version specified in a JSON configuration.
- **Purpose**: This supports feature flagging and allows for version control of UI components, enhancing flexibility and reducing the risk of bugs when updating components.

### 5. Inter-Application Communication via Redux

- **Description**: Dynamically loaded applications can interact with each other without direct communication.
- **Functionality**: This is achieved using Redux within the front-end framework, allowing for global state management and event-driven communication.
- **Purpose**: This decouples the applications, making them more modular and easier to maintain while ensuring they can still share data and react to each other's state changes.

### 6. Bonus: React-Flow Diagram with Custom Nodes

- **Description**: One UI component renders a React-Flow diagram with custom nodes.
- **Functionality**: The custom nodes can embed sub-diagrams, demonstrating complex UI capabilities and component nesting.
- **Purpose**: This showcases the framework's ability to handle more advanced UI components and interactions, further proving its flexibility and power.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage

1. Run `npm run dev` to start the development server.
2. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

- `src/`: Contains the source code for the project
  - `components/`: Contains the React components used in the framework, such as `DynamicMenu`, `DynamicViewPanel`, `RegistrationFormV1`, `RegistrationFormV2`, and `FlowDiagram`.
  - `redux/`: Contains the Redux store setup and reducers for managing global state.
  - `index.js`: Entry point of the application.
  - `App.js`: Main application component that integrates the dynamic menu, view panel, and other components.

## Configuration

The application is driven by a configuration JSON file (`config.json`) located in the `public/` directory. This file defines the menu items and the components to be loaded.

Example configuration:

```json
{
  "menu": [
    {
      "name": "App 1",
      "component": "RegistrationFormV1"
    },
    {
      "name": "App 2",
      "component": "RegistrationFormV2"
    }
  ],
  "components": {
    "RegistrationFormV1": {
      "version": "1.0",
      "description": "First version of the registration form."
    },
    "RegistrationFormV2": {
      "version": "2.0",
      "description": "Second version of the registration form."
    }
  }
}
```

## Customization

- **Adding New Components**: To add new components to the framework, create a new component in the `components/` directory and update the `config.json` file to include the new component.

- **Styling**: The application is styled using a global CSS file (`index.css`). You can modify this file or add new CSS files as needed.

## License

This project is licensed under the MIT License.
