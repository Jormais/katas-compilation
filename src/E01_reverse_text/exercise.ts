export function reverseText(text: string): string {
	const arrayText: string[] = text.split(' ');
	arrayText.reverse();
	return arrayText.join(' ');
}
