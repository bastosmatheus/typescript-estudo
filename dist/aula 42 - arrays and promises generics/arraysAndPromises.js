// arrays e promises tbm são generics, porém o array pode ser usado de outra forma, como: array[]
export const arrayNumbers = [10, 20, 30, 40, 50];
export function myPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Essa promisse foi resolvida.");
        }, 1000);
    });
}
myPromise().then((result) => console.log(result));
