import { Button, Container, Stack } from "react-bootstrap";
import "./App.css";
import BudgetCard from "./components/BudgetCard";

function App() {
	return (
		<Container my-4>
			<Stack direction="horizontal" gap="2" className="mb-4">
				<h1 className="me-auto">Budgets</h1>
				<Button variant="primary">Add Budget</Button>
				<Button variant="outline-primary">Add Expense </Button>
			</Stack>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
					gap: "1rem",
					alignItems: "flex-start",
				}}
			></div>

			<BudgetCard name="Entertaiment" amount={200} max={1000}></BudgetCard>
		</Container>
	);
}

export default App;
