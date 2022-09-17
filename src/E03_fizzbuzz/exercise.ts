export function fizzBuzz(): string[] {
	const arrayNumeros: string[] = [];

	// eslint-disable-next-line no-plusplus
	for (let index = 1; index <= 100; index++) {
		if (index % 3 === 0) {
			if (index % 15 === 0) {
				arrayNumeros.push('FizzBuzz');
			} else {
				arrayNumeros.push('Fizz');
			}
		} else if (index % 5 === 0) {
			arrayNumeros.push('Buzz');
		} else {
			arrayNumeros.push(index.toString());
		}
	}
	return arrayNumeros;
}
