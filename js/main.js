new WOW().init();
const modalForm = document.querySelector('.modal__form');
if(modalForm) {
    let selector = document.querySelector('#modal__phone');
    let im = new Inputmask("+7(999)999-99-99");
    im.mask(selector);
    
    const validate = new window.JustValidate('#modal__form');
    validate.addField('#modal__name', [
        {
            rule: "required",
            errorMessage: "*Введите имя"
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "*минимум 2 символа"
        },
    ]).addField('#modal__phone', [
        {
            validator: (value)=> {
                const phones = selector.inputmask.unmaskedvalue()
                return Boolean(Number(phones) && phones.length > 0)
            },
            errorMessage: '*Введите телефон'
        },
        {
            validator: (value)=> {
                const phones = selector.inputmask.unmaskedvalue()
                return Boolean(Number(phones) && phones.length === 10)
            },
            errorMessage: '*Введите телефон полностью'
        },
    ]).addField('#modal__email', [
        {
            rule: "required",
            errorMessage: "*Введите email"
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "*минимум 2 символа"
        },
    ]).onSuccess(async function() {
        let data = {
            name: document.getElementById('modal__name').value,
            tel: document.getElementById('modal__phone').value,
            message: document.getElementById('modal__email').value
        }
        let responsive = await fetch("mail.php", {
            method: "POST",
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        let result = await responsive.text();
        alert(result)
    });
};

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('open');
});

const informationBtn = document.querySelector('.information__btn');
if(informationBtn) {
    document.querySelector('.information__btn').addEventListener('click', function() {
        document.querySelector('.modal').classList.add('active');
    });  
    document.querySelector('.modal__close').addEventListener('click', function() {
        document.querySelector('.modal').classList.remove('active');
    });
};

const clientsBtn = document.querySelector('.clients__btn');
if (clientsBtn) {
    document.querySelector('.clients__btn').addEventListener('click', function() {
        document.querySelector('.modal').classList.add('active');
    });  
    document.querySelector('.modal__close').addEventListener('click', function() {
        document.querySelector('.modal').classList.remove('active');
    });
};

const servicesBtn = document.querySelector('.services__btn');
if(servicesBtn) {
    document.querySelector('.services__btn').addEventListener('click', function() {
        document.querySelector('.modal').classList.add('active');
    }); 
};

const questionsBtn = document.querySelector('.questions__btn');
if(questionsBtn) {
    document.querySelector('.questions__btn').addEventListener('click', function() {
        document.querySelector('.modal').classList.add('active');
    });
    document.querySelector('.modal__close').addEventListener('click', function() {
        document.querySelector('.modal').classList.remove('active');
    });
};

const tabs = document.querySelector('.tabs__tab');
if(tabs) {
    let tabsCitizens = document.getElementById('citizens-btn');
    let tabsBisnes = document.getElementById('bisnes-btn');
    
    tabsCitizens.addEventListener('click', function() {
        document.getElementById('bissnes').style.display = 'none'
        document.getElementById('citizens').style.display = 'grid'
    });
    
    tabsBisnes.addEventListener('click', function() {
        document.getElementById('citizens').style.display = 'none'
        document.getElementById('bissnes').style.display = 'grid'
    });
};

const tables = document.querySelectorAll('.services__table');
if(tables) {
    tables.forEach(table => {
        let tableRow = table.querySelectorAll('.services__table-item--row');  
        let tableShow = table.querySelectorAll('.services__table-item--show');
        let btnShow = table.querySelector('.services__table-show');
        tableRow.forEach((el, index) => {
            if (index % 2 == 0) {
                el.style.backgroundColor = '#f7f2c9';
            }
        });
        btnShow.addEventListener('click', () => {
            tableShow.forEach(el => {
                el.classList.toggle('active');
            });
        });
    });
};










// let tableItemConstruction = document.querySelectorAll('.construction__table-row');
// tableItemConstruction.forEach((el, index) => {
//     if(index % 2 == 0) {
//         el.style.backgroundColor = '#c9c9c9'
//     }
// });

