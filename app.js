function animateElement(element, start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.left= start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = start + delta * counter++;
            element.style.left = currentPosition;
            if(start < end && currentPosition >= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }else if(start > end && currentPosition <= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }                       
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
}
function animateElement2(element, start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración 
        element.style.top= start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = start + delta * counter++;
            element.style.top = currentPosition;
            if(start < end && currentPosition >= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }else if(start > end && currentPosition <= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }                       
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
}

// Somos las programadoras de la promise
//====================== Promise =====================
// Somos las programadoras usuarias de la promise

const allImg = document.getElementsByTagName("img");
/*console.log("Comienza promesa");
animateElement(allImg[0], -200, 500, 3000).then(()=>{ //Dentro de este then, pongo otra promesa
    console.log("Terminó la animación de doge");
    return animateElement(allImg[1], -200, 500, 6000);  //Esta es la otra promesa, que tiene su then propio
}).then(()=>{
    console.log("Terminó la animación de cate");
    return animateElement(allImg[0], -200, 500, 3000);  //Aquí apilo otra promesa con su propio then  
}).then(()=>{
    console.log("Terminó la segunda animación del doge");
}).catch(()=>{

});
console.log("Holi soy código después de la promesa"); //Esta se ejecuta de manera asíncrona, por lo que aparece antes que termine la animación*/

Promise.all([
    animateElement(allImg[0], 200, 600, 3000),
    animateElement(allImg[1], 200, 600, 4000)
]).then(()=>{
    console.log("Terminaron AMBAS animaciones");
    return Promise.all([ //Retornar promesa que se ejecutará en el próximo then
        animateElement2(allImg[0], 0, 400, 3000),
        animateElement2(allImg[1], 0, 400, 4000)
    ]);
}).then(()=>{
    console.log("Doge y cate se devolvieron");
    return Promise.all([ //Retornar promesa que se ejecutará en el próximo then
        animateElement(allImg[0], 400, 200, 3000),
        animateElement(allImg[1], 400, 200, 4000)
    ]);
}).then(()=>{
    console.log("Doge y cate se devolvieron");
    return Promise.all([ //Retornar promesa que se ejecutará en el próximo then
        animateElement2(allImg[0], 400, 0, 3000),
        animateElement2(allImg[1], 400, 0, 4000)
    ]);
}).catch(()=>{

});