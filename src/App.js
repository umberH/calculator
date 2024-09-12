// App.js
import React, { useState } from 'react';
import "./styles.css";

function App() {
  // Define state variables for user inputs
  const [startingWealth, setStartingWealth] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [savingsRate, setSavingsRate] = useState(0);
  const [roi, setRoi] = useState(0);
  const [incomeGrowthRate, setIncomeGrowthRate] = useState(0);
  const [expenseGrowthRate, setExpenseGrowthRate] = useState(0);
  const [yearsToBillionaire, setYearsToBillionaire] = useState(null);

  const calculateYearsToBillionaire = () => {
    let currentWealth = parseFloat(startingWealth);
    let income = parseFloat(annualIncome);
    const targetWealth = 1000000000; // 1 Billion
    const annualSavingsRate = parseFloat(savingsRate) / 100;
    const annualRoi = parseFloat(roi) / 100;
    const incomeGrowth = parseFloat(incomeGrowthRate) / 100;
    const expenseGrowth = parseFloat(expenseGrowthRate) / 100;

    let year = 0;

    while (currentWealth < targetWealth && year < 100) {
      // Annual savings and investment
      const netInvestment = income * annualSavingsRate;
      currentWealth = currentWealth * (1 + annualRoi) + netInvestment;

      // Increase income and expenses for next year
      income = income * (1 + incomeGrowth);

      year++;
    }

    if (currentWealth >= targetWealth) {
      setYearsToBillionaire(year);
    } else {
      setYearsToBillionaire("More than 100 years");
    }
  };

  return (
    <div className="App">
      <h1>Billionaire Calculator</h1>

      <div>
        <label>Starting Wealth ($):</label>
        <input
          type="number"
          value={startingWealth}
          onChange={(e) => setStartingWealth(e.target.value)}
        />
      </div>

      <div>
        <label>Annual Income ($):</label>
        <input
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
      </div>

      <div>
        <label>Savings Rate (%):</label>
        <input
          type="number"
          value={savingsRate}
          onChange={(e) => setSavingsRate(e.target.value)}
        />
      </div>

      <div>
        <label>Return on Investment (ROI) (%):</label>
        <input
          type="number"
          value={roi}
          onChange={(e) => setRoi(e.target.value)}
        />
      </div>

      <div>
        <label>Income Growth Rate (% per year):</label>
        <input
          type="number"
          value={incomeGrowthRate}
          onChange={(e) => setIncomeGrowthRate(e.target.value)}
        />
      </div>

      <div>
        <label>Expense Growth Rate (% per year):</label>
        <input
          type="number"
          value={expenseGrowthRate}
          onChange={(e) => setExpenseGrowthRate(e.target.value)}
        />
      </div>

      <button onClick={calculateYearsToBillionaire}>Calculate</button>

      {yearsToBillionaire !== null && (
        <h2>Years to become a Billionaire: {yearsToBillionaire}</h2>
      )}
    </div>
  );
}

export default App;
