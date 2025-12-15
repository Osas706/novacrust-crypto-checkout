# NovaCrust Crypto Checkout

A React-based crypto-to-cash checkout widget built with Vite, TypeScript, and Tailwind CSS. This project demonstrates a multi-step checkout flow for converting cryptocurrency to fiat currency.

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Osas706/novacrust-crypto-checkout
    cd novacrust-crypto-checkout
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components + Shadcn UI Components

## 💡 Assumptions & Trade-offs

During the development of this prototype, the following assumptions and trade-offs were made:

### 1. Mock Data & No Backend

- **Assumption**: This is a frontend-only prototype/demo.
- **Trade-off**: There is no actual blockchain interaction or backend server.
  - Exchange rates (e.g., ETH to NGN) are hardcoded or 1:1 for simplicity.
  - "Success" states are simulated immediately without real network confirmation.

### 2. State Management (Zustand)

- **Assumption**: The checkout flow is contained within a single session.
  - **Pros**: extremely lightweight and fast setup.
  - **Cons**: Reloading the page resets the checkout progress (Step 1).

### 3. Navigation

- **Assumption**: The widget is designed to be embedded or act as a standalone modal.
  - **Cons**: The browser's "Back" button may not work as expected (it will leave the site rather than go to the previous step). A custom "Back" button is implemented in the UI to handle this.

### 4. Mobile-First Widget Design

- **Assumption**: The primary use case is mobile or a contained widget on desktop.
- **Design**: The main `App` layout hardcodes a mobile-sized container (`max-w-[440px]`) centered on the screen to simulate the mobile experience on desktop screens.
