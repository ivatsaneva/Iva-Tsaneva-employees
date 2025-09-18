# Pair of employees who have worked together

A React + TypeScript + Vite application for finding pairs of employees who have worked together on projects for the longest periods.

The app allows you to:

- Upload a CSV file of employee project assignments.
- Automatically parse the data and calculate overlapping work periods.
- View results in an interactive Ant Design table.
- Highlight the pairs of employees with the most total days worked together.

---

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:ivatsaneva/Iva-Tsaneva-employees.git
```

### 2. Install dependencies

This project uses **pnpm** as the package manager.  
If you don’t have it installed:

```bash
npm install -g pnpm
```

Then install dependencies:

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
pnpm build
```

### 5. Preview production build

```bash
pnpm preview
```

---

## 📂 Example CSV

An example CSV file is included for testing purposes:  
**`employees_extended.csv`**

This file contains sample employee/project data with overlapping work periods.

## 🛠️ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for build tooling
- [Ant Design](https://ant.design/) for UI components
- [styled-components](https://styled-components.com/) for custom styling
- [dayjs](https://day.js.org/) for date parsing & calculations

---

✅ **Task done by Iva Tsaneva**
