// Static
class Utils{
    static cloneObj(object: Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)))
    }
};

const tenis1: {tamanho: number, estoque: boolean} = {
    tamanho: 41,
    estoque: true,
};

const tenis2: {tamanho: number, estoque: boolean} = {
    tamanho: 49,
    estoque: false,
};

console.log(Utils.cloneObj([tenis1, tenis2]));
