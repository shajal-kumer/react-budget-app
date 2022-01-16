import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetContext";
import BudgetCard from "./BudgetCard";

export default function UncategorizedBudgetCard(props) {
	const { getBudgetExpenses } = useBudgets();
	const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((acc, expense) => (acc += expense.amount), 0);

	if (amount === 0) return null;

	return <BudgetCard name="Uncategorized" gray amount={amount} {...props} />;
}
