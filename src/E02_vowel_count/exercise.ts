export function getVowelCount(text: string): number {
	let count = 0;
	const vowels = 'aeiouáéíóú';
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < text.length; i++) {
		if (vowels.toUpperCase().includes(text.toUpperCase()[i])) {
			// eslint-disable-next-line no-plusplus
			count++;
		}
	}
	return count;
}
