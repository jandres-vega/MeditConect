export const getHash = ():string => {
    return window.location.hash.slice(1)
        .toLocaleLowerCase().split('/')[1] || '/'
}