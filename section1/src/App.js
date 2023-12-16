import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "wallet",
      amount: 454.12,
      date: new Date(2021, 3, 22),
    },
    {
      id: "e3",
      title: "glasses",
      amount: 24.12,
      date: new Date(2022, 5, 24),
    },
    {
      id: "e4",
      title: "cup",
      amount: 14.12,
      date: new Date(2023, 9, 19),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
