export const apiGet = (url) => {
    return (() => fetch(url).then(v => v.json()));
}; 