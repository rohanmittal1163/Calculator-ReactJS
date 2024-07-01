import { stateType } from './CalculatorTypes';

export default function evaluate({
	currentOperand,
	previousOperand,
	operation,
}: stateType): number {
	switch (operation) {
		case '/':
			return (previousOperand as number) / (currentOperand as number);
		case '*':
			return (previousOperand as number) * (currentOperand as number);
		case '+':
			return (previousOperand as number) + (currentOperand as number);
		case '-':
			return (previousOperand as number) - (currentOperand as number);
		default:
			return 0;
	}
}
