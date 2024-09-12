// App.js
import React, { useState } from "react";
import "./App.css"; // Assuming you have the CSS file for styling

function App() {
  const [startingWealth, setStartingWealth] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [savingsRate, setSavingsRate] = useState(0);
  const [roi, setRoi] = useState(0);
  const [incomeGrowthRate, setIncomeGrowthRate] = useState(0);
  const [expenseGrowthRate, setExpenseGrowthRate] = useState(0);
  const [yearsToMillionaire, setYearsToMillionaire] = useState(null);

  const calculateYearsToMillionaire = () => {
    let currentWealth = parseFloat(startingWealth);
    let income = parseFloat(annualIncome);
    const targetWealth = 1000000; // 1 Million
    const annualSavingsRate = parseFloat(savingsRate) / 100;
    const annualRoi = parseFloat(roi) / 100;
    const incomeGrowth = parseFloat(incomeGrowthRate) / 100;
    const expenseGrowth = parseFloat(expenseGrowthRate) / 100;

    let year = 0;

    while (currentWealth < targetWealth && year < 100) {
      // Annual savings and investment
      const netInvestment = income * annualSavingsRate;
      currentWealth = currentWealth * (1 + annualRoi) + netInvestment;

      // Increase income for next year
      income = income * (1 + incomeGrowth);

      year++;
    }

    if (currentWealth >= targetWealth) {
      setYearsToMillionaire(year);
    } else {
      setYearsToMillionaire("More than 100 years");
    }
  };

  return (
    <div className="App">
      <h1>Millionaire Calculator</h1>

      <div>
        <label htmlFor="startingWealth">Starting Wealth ($):</label>
        <input
          id="startingWealth"
          type="number"
          value={startingWealth}
          onChange={(e) => setStartingWealth(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="annualIncome">Annual Income ($):</label>
        <input
          id="annualIncome"
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="savingsRate">Savings Rate (%):</label>
        <input
          id="savingsRate"
          type="number"
          value={savingsRate}
          onChange={(e) => setSavingsRate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="roi">Return on Investment (ROI) (%):</label>
        <input
          id="roi"
          type="number"
          value={roi}
          onChange={(e) => setRoi(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="incomeGrowthRate">
          Income Growth Rate (% per year):
        </label>
        <input
          id="incomeGrowthRate"
          type="number"
          value={incomeGrowthRate}
          onChange={(e) => setIncomeGrowthRate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="expenseGrowthRate">
          Expense Growth Rate (% per year):
        </label>
        <input
          id="expenseGrowthRate"
          type="number"
          value={expenseGrowthRate}
          onChange={(e) => setExpenseGrowthRate(e.target.value)}
        />
      </div>

      <button onClick={calculateYearsToMillionaire}>Calculate</button>

      {yearsToMillionaire !== null && (
        <h2>Years to become a Millionaire: {yearsToMillionaire}</h2>
      )}
    </div>
  );
}

export default App;
