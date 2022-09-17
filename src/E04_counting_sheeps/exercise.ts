interface Sheep {
	name: string;
	color: string;
}

export function filterSheeps(sheeps: Sheep[]): Sheep[] {
	const filteredSheeps = sheeps.filter(
		sheep =>
			sheep.color === 'rojo' &&
			sheep.name.toLocaleUpperCase().includes('N') &&
			sheep.name.toLocaleUpperCase().includes('A')
	);
	return filteredSheeps;
}
