import "./App.css";
import ExpenseItem from "./components/Expenseltem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 298.65,
      date: new Date(2022, 2, 27),
    },
    {
      id: "e2",
      title: "New TV ",
      amount: 500,
      date: new Date(2022, 2, 27),
    },
    {
      id: "e3",
      title: "Test",
      amount: 154,
      date: new Date(2022, 2, 27),
    },
    {
      id: "e4",
      title: "All ok",
      amount: 593.45,
      date: new Date(2022, 2, 27),
    },
  ];

  return (
    <div>
      <h2>Let's get!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
