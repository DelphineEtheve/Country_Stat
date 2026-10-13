export function countDances(dances) {

    const counter = {};

    dances.forEach(dance => {

        if (!counter[dance.titre]) {
            counter[dance.titre] = 0;
        }

        counter[dance.titre]++;
    });

    return counter;
}