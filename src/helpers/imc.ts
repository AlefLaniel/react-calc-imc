export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[],
    yourImc?: number
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] }
]

export const calculateImc = (height: number, weight: number): Level | null => {
    console.log('Altura:', height, 'Peso:', weight);
    const imc = weight / (height * height); // Calcula o IMC
    console.log('IMC Calculado:', imc);

    // Verifica o nível correspondente ao IMC
    for (const i in levels) {
        if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
            return { ...levels[i], yourImc: parseFloat(imc.toFixed(2)) }; // Retorna uma cópia do nível com o IMC calculado
        }
    }

    return null; // Retorna null se nenhum nível corresponder
};
