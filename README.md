# Nagarik App 2.0

A modern, user-friendly web application for accessing government services in Nepal. This project aims to simplify the digital experience for citizens by providing a unified platform for documents, social services, and more.

## Features

- **Authentication**: Mobile OTP-based login flow (Mocked for demo).
- **Dashboard**: Comprehensive dashboard with access to Documents, Social Services, and Other Services.
- **Nagarik Sathi (AI Chat)**: An intelligent chatbot assistant to help users navigate services and answer queries (Bilingual: English & Nepali).
- **Bilingual Support**: Full support for English and Nepali languages.
- **Theming**: Dark, Light, and System theme modes.
- **Mobile Responsive**: Fully responsive design with a mobile-friendly sidebar and layout.
- **Transactions**: View transaction history with status tracking.
- **Settings**: Manage profile, security, and preferences.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn UI
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/sandeepshrestha/nagarik-app.git
    cd nagarik-app
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## Usage

- **Login**: Use any 10-digit mobile number. The OTP is hardcoded to `123456`.
- **Theme**: Toggle between Dark and Light mode from the Sidebar.
- **Language**: Switch between English and Nepali from the Sidebar.

## License

This project is licensed under the MIT License.
