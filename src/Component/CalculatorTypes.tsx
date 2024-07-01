type stringOrNumberOrNull = string | number | null;

export interface stateType {
	currentOperand?: stringOrNumberOrNull;
	previousOperand?: stringOrNumberOrNull;
	operation?: stringOrNumberOrNull;
	overwrite?: boolean;
}

interface Type {
	type: ACTION;
}
interface Payload {
	payload: {
		operator?: string;
		digit?: string | number;
	};
}

export type Action = Type & Payload;

export const enum ACTION {
	ADD_DIGIT = 'add_digit',
	CLEAR = 'clear',
	CHOOSE_OPERATION = 'choose_operation',
	EVALUATE = ' evaluate',
	DELETE_DIGIT = 'delete_digit',
}
