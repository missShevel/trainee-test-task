# Task Management Boards App

## Overview

This project is a **Task Management Boards Application** built with a **React** frontend and a **NestJS** backend. The app allows users to manage task boards, where each board contains multiple columns, and each column can hold several cards representing tasks. The frontend uses **Redux Toolkit** for state management, and the UI is powered by **Ant Design** components.

## Technologies Used

### Frontend:

- **React**
- **Redux Toolkit**
- **React Router**
- **Ant Design**
- **Axios**

### Backend:

- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **TypeScript**

## Features

- **Task Board Management**: Users can create multiple task board, edit its name and delete board
- **Card Management**: Inside each task board, users can add tasks (cards), change their details, drag-and-drop them in defferent columns to change status and delete tasks.
- **Modals**: The app uses modals to handle user interactions like creating and updating tasks and crating boards.

## Project Structure

### Frontend:

- **src/api**: Contains axios instance for sending requests.
- **src/app**: Contains predefined settings for Redux hooks and store settings.
- **src/components**: Contains reusable UI components.
- **src/features**: Handles Redux slices for tasks and boards.
- **src/pages**: Main pages of the application (e.g., Task Board, Home).

### Backend:

- **src/board and src/card**: Contains modules like `board` and `card`, each with entities, controllers and services.
- **src/database**: Contains database connection configuration and migrations using TypeORM.

## Workflow

1. **Board Creation**: Users can create new board for the homepage, afterwards will be redirected to created board page .
2. **Task Management**: Within a board, users can add new task which automatically appears in 'To-to' column. Inside each column, users can update, and delete tasks, also drag tasks between columns to cjeng task status.
3. **UI Interaction**: All interactions, such as adding or editing tasks, are handled via modals. The Redux store manages the state across different parts of the application to ensure a smooth and consistent user experience.
4. **API Communication**: The frontend communicates with the backend through a REST API built with NestJS. Axios is used on the frontend to handle requests, and the API follows RESTful principles.

## Deployment

This application has been deployed with the following services:

- **Frontend:** Deployed on Vercel
- **Backend:** Hosted on Render
- **Database:** Managed by Supabase (PostgreSQL)

### Usage

1. Visit `https://trainee-test-task.vercel.app/` to access the frontend of the Task Board application.
2. Use the interface to create task boards, add columns, and manage tasks.

#

<span style="color:red">**NB:**</span> Please note, the backend is hosted on Render using free plan. That is why after some incativity requests become drastically slow. First requests can take up to 1 minute but later interaction will go smoothly. Thanks😊
