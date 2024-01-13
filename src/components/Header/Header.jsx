import React, { useState, useEffect } from 'react';
import './Header.css'

const buddyWalletDescriptions = [
  "Take control of your spending habits and achieve your financial goals with Byrddy Expense Tracker, the user-friendly tool that helps you manage your expenses effectively.",
  "Effortlessly track your daily, weekly, and monthly expenses across various categories, providing comprehensive insights into your spending patterns.",
  "Set budgets, receive alerts for potential overspending, and visualize your spending trends with interactive charts and graphs.",
  "Gain valuable insights into your financial health and make informed decisions to optimize your spending and achieve financial stability.",
  "Enjoy the simplicity and convenience of using Byrddy Expense Tracker, your personal finance assistant that helps you take control of your money.",
];

const Header = () => {
  const [description, setDescription] = useState(buddyWalletDescriptions[genRandomInt(4)]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDescription(buddyWalletDescriptions[genRandomInt(4)]);
    }, 3000);

    return () => clearInterval(intervalId); 
  }, []);

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <header className="header">
      <div className="logo">
        <h1>Buddy Wallet</h1>
      </div>
      <p>{description}</p>
    </header>
  );
};

export default Header;
