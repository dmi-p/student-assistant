(function () {
    let inputs = document.querySelectorAll('.points-input');
    let form = document.querySelector('.form');
    // let userSubjects = [];
    let temp = 0;
    
    
    let ru_langMinPoints = 24;
    let mathMinPoints = 27;

    // let sut_IVT = 256;

    let SPbUnivs = {
        spbu: {
            cs: {
                _010302: 280, //cs
                _010303: 262, //cs
                _020301: 278, //cs
                _020302: 274, //cs
                _020303: 276, //cs  
            },
            physics: {
                _030301: 292, //physics
                _030302: 263, //physics
                _030303: 246, //physics
                _050301: 219, //physics
            },
            chemistry: {
                _040301: 273, //chemi
                _040302: 265, //chemi
            },
            geography: {
                _050301: 246,  //geo
            },
        },

        sut: {
            cs: {
                _090301: 257, //cs
                _090302: 255, //cs
                _090304: 262, //cs
                _100301: 252, //cs
            },

            physics: {
                _110301: 207, //physics
            },
            geo: {
                _050306: 218, //geo
            },
        }
    };


    inputs.forEach(input => input.addEventListener('keyup', function () {
        var reg = new RegExp('\\D', 'g');
        if (reg.test(this.value)) {
            this.value = this.value.replace(reg, '');
        }
    }));

    form.onsubmit = function(evt) {
        evt.preventDefault();
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value) {
                temp++;
            }
        }
        
        let userSubjects = [temp];
        temp = 0;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value) {
                userSubjects[temp] = inputs[i].value;
                temp++;
            }
        }
        let mathPoints = document.querySelector('#subject_1');
        let ru_langPoints = document.querySelector('#subject_2');
        let biologyPoints = document.querySelector('#subject_3');
        let foreign_langPoints = document.querySelector('#subject_4');
        let historyPoints = document.querySelector('#subject_5');
        let chemistryPoints = document.querySelector('#subject_6');
        let geographyPoints = document.querySelector('#subject_7');
        let comp_sciencePoints = document.querySelector('#subject_8');
        let literaturePoints = document.querySelector('#subject_9');
        let social_sciencePoints = document.querySelector('#subject_10');
        let physicsPoints = document.querySelector('#subject_11');
    
        let userPoints = {
            math: parseInt(mathPoints.value, 10),
            ru_lang: parseInt(ru_langPoints.value, 10),
            biology: parseInt(biologyPoints.value, 10),
            foreign_lang: parseInt(foreign_langPoints.value, 10),
            history: parseInt(historyPoints.value, 10),
            chemistry: parseInt(chemistryPoints.value, 10),
            geography: parseInt(geographyPoints.value, 10),
            comp_science: parseInt(comp_sciencePoints.value, 10),
            literature: parseInt(literaturePoints.value, 10),
            social_science: parseInt(social_sciencePoints.value, 10),
            physics: parseInt(physicsPoints.value, 10)
        };

        // if (userPoints.math >= mathMinPoints && userPoints.ru_lang >= ru_langMinPoints) {
        //     if (userPoints.comp_science > 36) {
        //         let comp_sciencePoints = userPoints.math + userPoints.ru_lang + userPoints.comp_science;
        //         alert(comp_sciencePoints);
        //         for (let university in SPbUnivs) {
        //             alert(university);
        //             for (let programs in university) {
        //                 alert(programs);
        //                 for (let program in programs) {
        //                     if (comp_sciencePoints >= programs[program]) {
        //                         alert('Вы можете поступить на направление:'+ programs[program].value);
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // };
        if (userPoints.math >= mathMinPoints && userPoints.ru_lang >= ru_langMinPoints) {
            if (userPoints.comp_science > 36) {
                let comp_sciencePoints = userPoints.math + userPoints.ru_lang + userPoints.comp_science;
                for (let university in SPbUnivs) {
                    // console.log(SPbUnivs[university]);
                    // console.log('______________');
                    // console.log(SPbUnivs[university].cs);
                    for (let subject in SPbUnivs[university].cs) {
                        // console.log(SPbUnivs[university].cs[subject]);
                        if (parseInt(SPbUnivs[university].cs[subject], 10) <= comp_sciencePoints) {
                            console.log('Вы можете поступить на направление '+subject);
                        }
                    }
                };
            }};


        // if ((userPoints.math + userPoints.comp_science + userPoints.ru_lang) > sut_IVT) {
        //     alert('У вас есть шансы поступить на направление "Информатика и вычислительная техника" в СПбГУТ.');
        // }
        // else {
        //     alert('Поступление на направление "Информатика и вычислительная техника" в СПбГУТ маловероятно с вашими баллами :(')
        // };
    }
})();
