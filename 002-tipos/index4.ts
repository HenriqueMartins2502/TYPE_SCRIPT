// Never

const error = (): never => {
    throw new Error("Algo deu ERRADO!!!!");
}

const validate = (value: string | number) => {
    if(typeof value == 'string'){
        console.log('É uma string')
    }else if(typeof value == 'number'){
        console.log('É um number')
    }
    console.log(error())
};

validate(76);
