(function () {
    let inputs = document.querySelectorAll('.points-input');
    let form = document.querySelector('.form');
    // let userSubjects = [];
    let temp = 0;
    
    
    let ru_langMinPoints = 24;
    let mathMinPoints = 27;

    // let sut_IVT = 256;

    // let SPbUnivs = {
    //     spbu: {
    //         cs: {
    //             _010302: 280, //cs
    //             _010303: 262, //cs
    //             _020301: 278, //cs
    //             _020302: 274, //cs
    //             _020303: 276, //cs
    //             _090303: 277, //cs
    //             _210302: 259, //cs
    //             _380305: 277, //cs
    //         },
    //         physics: {
    //             _030301: 292, //physics
    //             _030302: 263, //physics
    //             _030303: 246, //physics
    //             _050301: 219, //physics
    //             _210301: 269, //physics

    //         },
    //         chemistry: {
    //             _040301: 273, //chemi
    //             _040302: 265, //chemi
    //         },
    //         geography: {
    //             _050302: 246, //geo
    //             _050303: 251, //geo
    //             _050304: 244, //geo
    //             _050306: 251, //geo
    //         },
    //         biology: {
    //             _060301: 275, //bio
    //             _060302: 243, //bio
    //             _370301: 250, //bio

    //         },
    //         social_science: {
    //             _380301: 269, //ss
    //             _380303: 267, //ss
    //             _380304: 267, //ss
    //             _390301: 249, //ss
    //         },
    //         foreign_lang: {
    //             _380302: 273, //foreign

    //         },
    //     },

    //     sut: {
    //         cs: {
    //             _090301: 257, //cs
    //             _090302: 255, //cs
    //             _090304: 262, //cs
    //             _100301: 252, //cs
    //             _270304: 259, //cs
    //             _110303: 234, //cs
    //             _110302: 201, //cs

    //         },

    //         physics: {
    //             _110301: 207, //physics
    //             _120304: 206, //physics
    //             _120303: 202, //physics
    //             _110304: 221, //physics

    //         },
    //         geography: {
    //             _050306: 218, //geo
    //         },
    //     }
    // };


    inputs.forEach(input => input.addEventListener('keyup', function () {
        var reg = new RegExp('\\D', 'g');
        if (reg.test(this.value)) {
            this.value = this.value.replace(reg, '');
        }
    }));

    form.onsubmit = function(evt) {
        evt.preventDefault();
        // for (let i = 0; i < inputs.length; i++) {
        //     if (inputs[i].value) {
        //         temp++;
        //     }
        // }
        
        // let userSubjects = [temp];
        // temp = 0;
        // for (let i = 0; i < inputs.length; i++) {
        //     if (inputs[i].value) {
        //         userSubjects[temp] = inputs[i].value;
        //         temp++;
        //     }
        // }
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
        
        //______nachalo rabotaushego koda
        // if (userPoints.math >= mathMinPoints && userPoints.ru_lang >= ru_langMinPoints) {
        //     if (userPoints.comp_science > 36) {
        //         let comp_sciencePoints = userPoints.math + userPoints.ru_lang + userPoints.comp_science;
        //         for (let university in SPbUnivs) {
        //             // console.log(SPbUnivs[university]);
        //             // console.log('______________');
        //             // console.log(SPbUnivs[university].cs);
        //             for (let subject in SPbUnivs[university].cs) {
        //                 // console.log(SPbUnivs[university].cs[subject]);
        //                 if (parseInt(SPbUnivs[university].cs[subject], 10) <= comp_sciencePoints) {
        //                     console.log('Вы можете поступить на направление '+subject+' в университете '+university);
        //                 }
        //             }
        //         };
        //     }

        //     if (userPoints.physics > 36) {
        //         let physicsPoints = userPoints.math + userPoints.ru_lang + userPoints.physics;
        //         for (university in SPbUnivs) {
        //             for (subject in SPbUnivs[university].physics) {
        //                 if (parseInt(SPbUnivs[university].physics[subject], 10) <= physicsPoints) {
        //                     console.log('Вы можете поступить на направление '+subject);
        //                 }
        //             }
        //         };
        //     }

        //     if (userPoints.chemistry > 36) {
        //         let chemistryPoints = userPoints.math + userPoints.ru_lang + userPoints.chemistry;
        //         for (university in SPbUnivs) {
        //             for (subject in SPbUnivs[university].chemistry) {
        //                 if (parseInt(SPbUnivs[university].chemistry[subject], 10) <= chemistryPoints) {
        //                     console.log('Вы можете поступить на направление '+subject);
        //                 }
        //             }
        //         };
        //     }

        //     if (userPoints.geography > 36) {
        //         let geographyPoints = userPoints.math + userPoints.ru_lang + userPoints.geography;
        //         for (university in SPbUnivs) {
        //             for (subject in SPbUnivs[university].geography) {
        //                 if (parseInt(SPbUnivs[university].geography[subject], 10) <= geographyPoints) {
        //                     console.log('Вы можете поступить на направление '+subject);
        //                 }
        //             }
        //         };
        //     }
        // };
            //_________ konec 
            let base = {
                SPb: {
                    sut: {
                        _010302: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 250,
                            dorms: true,
                            extramuralStudies: true,
                        },
                    },
            
                    spbu: {
            
                    },
            
                    spbgmu: {
            
                    },
                },
            
                MSC: {
                    mgsu: {
            
                    },
            
                    msmu: {
            
                    },
            
                    mtuci: {
            
                    },
                },
            
                NVS: {
            
                },
            };
            
            let universities = {
                sut: "Санкт-Петербургский государственный университет телекоммуникаций им. проф. М. А. Бонч-Бруевича",
                spbu: "Санкт-Петербургский государственный университет",
                sbpgmu: "Первый Санкт-Петербургский государственный медицинский университет им. И.П. Павлова",
            };

            let cities = {
                SPb: "Санкт-Петербург",
                MSC: "Москва",
                NVS: "Новосибирск",
            }

            let allDirections = {
                _010302: "Прикладная математика и информатика",
                _010303: "Механика и математическое моделирование",
                _020301: "Математика и компьютерные науки",
                _020302: "Фундаментальная информатика и информационные технологии",
                _020303: "Математическое обеспечение и администрирование информационных систем",
                _030301: "Прикладные математика и физика",
                _030302: "Физика",
                _030303: "Радиофизика",
                _050301: "Геология",
                _040301: "Химия",
                _040302: "Химия, физика и механика материалов",
                _090301: "Информатика и вычислительная техника",
                _090302: "Информационные системы и технологии",
                _090303: "Прикладная информатика",
                _090304: "Программная инженерия",
                _100301: "Информационная безопасность",
                _110301: "Радиотехника",
                _050306: "Экология и природопользование",
                _270304: "Управление в технических системах",
                _120304: "Биотехнические системы и технологии",
                _120303: "Фотоника и оптоинформатика",
                _110304: "Электроника и наноэлектроника",
                _110303: "Контруирование и технология электронных средств",
                _110302: "Инфокоммуникационные технологии и системы связи",
                _050302: "География",
                _050303: "Картография и геоинформатика",
                _050304: "Гидрометеорология",
                _050306: "Экология и природопользование",
                _060301: "Биология",
                _060302: "Почвоведение",
                _210301: "Нефтегазовое дело",
                _210302: "Землеустройство и кадастры",
                _370301: "Психология",
                _380301: "Экономика",
                _380302: "Менеджмент",
                _380303: "Управление персоналом",
                _380304: "Государственное и муниципальное управление",
                _380305: "Бизнес-информатика",
                _390301: "Социология",
                
            };
            
            
            function renderDirections() {
                let currentPoints = 0;
                let fullDirection = "";
                let fullUniversity = "";
                let fullCity = "";

                for (let city in base) {
                    for (let university in base[city]) {
                        for (let direction in base[city][university]) {
                            // console.log(direction);
                            for (let i = 0; i < base[city][university][direction].subjects.length; i++) {
                                for (let subject in userPoints) {
                                    if (subject == base[city][university][direction].subjects[i]) {
                                      currentPoints = currentPoints +  userPoints[subject];
                                    }
                                }
                                if (base[city][university][direction].points <= currentPoints) {
                                    for (let directionName in allDirections) {
                                        if (direction == directionName) {
                                            fullDirection = allDirections[directionName];
                                        }
                                    }

                                    for (let universityName in universities) {
                                        if (university == universityName) {
                                            fullUniversity = universities[universityName];
                                        }
                                    }
                                    
                                    for (let cityName in cities) {
                                        if (city == cityName) {
                                            fullCity = cities[cityName];
                                        }
                                    }

                                    console.log("Доступна специальность: " + fullDirection + " в " + fullUniversity + " в городе " + fullCity);
                                    if (base[city][university][direction].dorms) {
                                        console.log("Доступно общежитие");
                                    }
                                    if (base[city][university][direction].extramuralStudies) {
                                        console.log("Доступно заочная форма обучения");
                                    }
                                }
                            }
                        }
                    }
                }
            }
            renderDirections();
    }
// _____ konec onsubmit







})();



// function checkPoints(subject, points) {
//     if (subject == "cs") {
//         if (userPoints.math >= mathMinPoints && userPoints.ru_lang >= ru_langMinPoints) {
//             if (points > 36) {
//                 let comp_sciencePoints = userPoints.math + userPoints.ru_lang + points;
//                 for (let university in SPbUnivs) {
//                     // console.log(SPbUnivs[university]);
//                     // console.log('______________');
//                     // console.log(SPbUnivs[university].cs);
//                     for (let subject in SPbUnivs[university].cs) {
//                         // console.log(SPbUnivs[university].cs[subject]);
//                         if (parseInt(SPbUnivs[university].cs[subject], 10) <= comp_sciencePoints) {
//                             console.log('Вы можете поступить на направление '+subject);
//                         }
//                     }
//                 };
//             }
//         }
//     }
// }

