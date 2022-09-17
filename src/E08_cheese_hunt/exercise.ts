enum DirectionEnum {
	up = 'up',
	down = 'down',
	left = 'left',
	right = 'right',
}
const room2 = [
	['*', ' ', ' ', ' '],
	[' ', 'm', '*', ' '],
	[' ', ' ', ' ', ' '],
	[' ', ' ', ' ', '*']
  ];

type DirectionType = keyof typeof DirectionEnum;

export function canMouseEat(direction: DirectionType, game: string[][]): boolean {
	const mouse = 'm';
	const food = '*';
	for (let index = 0, index < game.length, index++) {
		
	}
	return false;
}
