// settimeout
// console.log('Привет 1');
// setTimeout(() => console.log('Привет 2'),2000)
// setTimeout(() => console.log('Привет 3'),1000)
// console.log('Привет 4');
// setTimeout(() => console.log('Привет 5'),0)

// console.log("get Data...");

// setTimeout(() => {
//     console.log("Preparing data...");
//     let data = {
//     body: [],
//     status: 'working',
//     port: 2000,
//     }

// })

// console.log("get Data...");   

// let prms = new Promise((resolve) => {
//     setTimeout(() => {
//         let data ={
//         body: [],
//         status: 'working',
//         port: 2000,
//     };
//     console.log('Preparing data...');
//     resolve(data)
//    },2500)
// })

// prms.then(() => {
//     console.log("Привет я из функции then");
// })


// prms.then(() => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//             data.location = 'Ukraine';
//             resolve(data)
//             },3000)
//         })
//     }).then(data => {
//         console.log(data);
//     })
// .catch(error => {
//     console.error('Error =>', error);
// })
// .finally(() => {
//     setTimeout(() => {
//         console.log('finally code...');
//     },1500)
// })

// let sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));

// let sleepTwo = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));

// sleep(2000).then(() => console.log('Две секунды прошли'));

// Promise.all([sleep(4000), sleep(2000)]).then(() => {
//     console.log('Метод All сработало');
// })

// Promise.race([sleep(4000), sleepTwo(1000)]).then(() => {
//     console.log('Метод Race сработало');
// })


// =================== Fetch thee ===================

const $container = document.querySelector('.container')

window.addEventListener('load', () => {
    setData("users").then((data) => {
        console.log(data);
        const tepmlate = data.map((item)=> car)
    })
})





// get data from json server 
function setData(resourses) {
    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/${resourses}')
        .then(response => response.json())
        .then(data => resolve(data))
    })
}
