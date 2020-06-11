const PROMESA_1 = ()=> {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve ("Correcto");
                 }else{
                     reject ("Incorrecto");
                 }
    });
};

const PROMESA_2 = ()=> {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve ("Correcto");
                 }else{
                     reject ("Incorrecto");
                 }
    });
};


Promise.all ([PROMESA_1(), PROMESA_2()])
.then ((response)=>{
    console.log ('count', response);
    console.log ('name', response);
    console.log ('height', response);
});
.catch ((err)=>{
    console.error (err):
});
