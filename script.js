(function () {
    let inputs = document.querySelectorAll('.points-input');
    let form = document.querySelector('.form');
    // let userSubjects = [];
    let temp = 0;
    let btnSubmit = document.querySelector('.subject__submit');
    
    let ru_langMinPoints = 24;
    let mathMinPoints = 27;

    inputs.forEach(input => input.addEventListener('keyup', function () {
        var reg = new RegExp('\\D', 'g');
        if (reg.test(this.value)) {
            this.value = this.value.replace(reg, '');
        }
    }));


    let directionWindow = document.querySelector('.directionWindow');
    let availableDirections = document.createElement('div');
    availableDirections.className = "availableDirections";
    availableDirections.innerHTML = "";

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
                        _050306: {
                            subjects: ["math","ru_lang","geography"],
                            points: 218,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 18,
                            entranceExam: false,
                        },
                        _090301: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 257,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 20,
                            entranceExam: false,
                        },
                        _090302: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 255,
                            dorms: true,
                            extramuralStudies: true,
                            budgetPlaces: 52,
                            entranceExam: false,
                        },
                        _090304: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 262,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 57,
                            entranceExam: false,
                        },
                        _100301: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 252,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _110301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 207,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _110302: {
                            subjects: ["math","ru_lang","physics"],
                            points: 198,
                            dorms: true,
                            extramuralStudies: true,
                            budgetPlaces: 150,
                            entranceExam: false,
                        },
                        _110303: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 234,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _110304: {
                            subjects: ["math","ru_lang","physics"],
                            points: 221,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 28,
                            entranceExam: false,
                        },
                        _120303: {
                            subjects: ["math","ru_lang","physics"],
                            points: 202,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 5,
                            entranceExam: false,
                        },
                        _120304: {
                            subjects: ["math","ru_lang","physics"],
                            points: 206,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 6,
                            entranceExam: false,
                        },
                        _150304: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 208,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 26,
                            entranceExam: false,
                        },
                        _270304: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 259,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 11,
                            entranceExam: false,
                        },
                        _380302: {
                            subjects: ["math","ru_lang","social_science"],
                            points: 239,
                            dorms: true,
                            extramuralStudies: true,
                            budgetPlaces: 0,
                            entranceExam: false,
                        },
                        _380305: {
                            subjects: ["math","ru_lang","social_science"],
                            points: 237,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 0,
                            entranceExam: false,
                        },
                        _270304: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 259,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 11,
                            entranceExam: false,
                        },
                    },
            
                    spbu: {
                        _010302: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 280,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 45,
                            entranceExam: false,
                        },
                        _010303: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 262,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 20,
                            entranceExam: false,
                        },
                        _020301: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 278,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 20,
                            entranceExam: false,
                        },
                        _020302: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 274,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 45,
                            entranceExam: false,
                        },
                        _020303: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 276,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 60,
                            entranceExam: false,
                        },
                        _030301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 292,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _030302: {
                            subjects: ["math","ru_lang","physics"],
                            points: 263,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 55,
                            entranceExam: false,
                        },
                        _030303: {
                            subjects: ["math","ru_lang","physics"],
                            points: 246,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _040301: {
                            subjects: ["math","ru_lang","chemistry"],
                            points: 273,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _050301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 219,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _050302: {
                            subjects: ["math","ru_lang","geography"],
                            points: 246,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 40,
                            entranceExam: false,
                        },
                        _050303: {
                            subjects: ["math","ru_lang","geography"],
                            points: 251,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 15,
                            entranceExam: false,
                        },
                        _050304: {
                            subjects: ["math","ru_lang","geography"],
                            points: 244,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 15,
                            entranceExam: false,
                        },
                        _050306: {
                            subjects: ["math","ru_lang","geography"],
                            points: 251,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 20,
                            entranceExam: false,
                        },
                        _060301: {
                            subjects: ["biology","ru_lang","chemistry"],
                            points: 275,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 65,
                            entranceExam: false,
                        },
                        _060302: {
                            subjects: ["math","ru_lang","biology"],
                            points: 243,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _050302: {
                            subjects: ["math","ru_lang","geography"],
                            points: 246,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 40,
                            entranceExam: false,
                        },
                        _090303: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 277,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _090304: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 288,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 20,
                            entranceExam: false,
                        },
                        _210301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 269,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _210302: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 259,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _370301: {
                            subjects: ["math","ru_lang","biology"],
                            points: 250,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 40,
                            entranceExam: false,
                        },
                        _370302: {
                            subjects: ["math","social_science","history"],
                            points: 277,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _380301: {
                            subjects: ["math","ru_lang","social_science"],
                            points: 269,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 64,
                            entranceExam: false,
                        },
                        _380302: {
                            subjects: ["math","ru_lang","foreign_lang"],
                            points: 273,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 67,
                            entranceExam: false,
                        },
                        _380303: {
                            subjects: ["math","ru_lang","social_science"],
                            points: 267,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 7,
                            entranceExam: false,
                        },
                        _380304: {
                            subjects: ["math","ru_lang","social_science"],
                            points: 267,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _380305: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 277,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 12,
                            entranceExam: false,
                        },
                        _390301: {
                            subjects: ["foreign_lang","ru_lang","social_science"],
                            points: 273,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 35,
                            entranceExam: false,
                        },
                        _390302: {
                            subjects: ["history","ru_lang","social_science"],
                            points: 257,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _400301: {
                            subjects: ["history","ru_lang","social_science"],
                            points: 293,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 60,
                            entranceExam: false,
                        },
                        _410303: {
                            subjects: ["history","ru_lang","foreign_lang"],
                            points: 271,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 57,
                            entranceExam: false,
                        },
                        _410305: {
                            subjects: ["history","ru_lang","foreign_lang"],
                            points: 284,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 70,
                            entranceExam: false,
                        },
                        _420301: {
                            subjects: ["history","ru_lang","social_science"],
                            points: 283,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 20,
                            entranceExam: false,
                        },
                        _430302: {
                            subjects: ["history","ru_lang","foreign_lang"],
                            points: 270,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _450301: {
                            subjects: ["foreign_lang","ru_lang","literature"],
                            points: 285,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 35,
                            entranceExam: false,
                        },
                        _450302: {
                            subjects: ["foreign_lang","ru_lang","literature"],
                            points: 286,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 105,
                            entranceExam: false,
                        },
                        _460301: {
                            subjects: ["social_science","ru_lang","history"],
                            points: 277,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 70,
                            entranceExam: false,
                        },
                        _4730301: {
                            subjects: ["social_science","ru_lang","history"],
                            points: 262,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 25,
                            entranceExam: false,
                        },
                        _470303: {
                            subjects: ["social_science","ru_lang","history"],
                            points: 259,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _500301: {
                            subjects: ["foreign_lang","ru_lang","history"],
                            points: 284,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 45,
                            entranceExam: false,
                        },
                        _510301: {
                            subjects: ["social_science","ru_lang","history"],
                            points: 254,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 15,
                            entranceExam: false,
                        },
                        _510304: {
                            subjects: ["social_science","ru_lang","history"],
                            points: 272,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 12,
                            entranceExam: false,
                        },
                    },
            
                    pgups: {
                        _080301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 219,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: false,
                        },
                        _090301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 208,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 27,
                            entranceExam: false,
                        },
                        _120301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 190,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 14,
                            entranceExam: false,
                        },
                        _130301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 201,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 19,
                            entranceExam: false,
                        },
                        _200301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 203,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 19,
                            entranceExam: false,
                        },
                        _210302: {
                            subjects: ["math","ru_lang","physics"],
                            points: 194,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 17,
                            entranceExam: false,
                        },
                        _230303: {
                            subjects: ["math","ru_lang","physics"],
                            points: 187,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 15,
                            entranceExam: false,
                        },
                        _270301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 194,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 18,
                            entranceExam: false,
                        },
                        _370301: {
                            subjects: ["math","ru_lang","biology"],
                            points: 157,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 0,
                            entranceExam: false,
                        },
                        _230303: {
                            subjects: ["math","ru_lang","physics"],
                            points: 187,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 15,
                            entranceExam: false,
                        },
                    },
                },
            
                MSC: {
                    mgu: {
                        _030301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 257,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 15,
                            entranceExam: true,
                        },
                        _030302: {
                            subjects: ["math","ru_lang","physics"],
                            points: 265,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 360,
                            entranceExam: true,
                        },
                        _050301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 194,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 200,
                            entranceExam: true,
                        },
                        _050302: {
                            subjects: ["math","ru_lang","geography"],
                            points: 226,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 74,
                            entranceExam: true,
                        },
                        _050303: {
                            subjects: ["math","ru_lang","geography"],
                            points: 262,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 14,
                            entranceExam: true,
                        },
                        _050304: {
                            subjects: ["math","ru_lang","geography"],
                            points: 224,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 24,
                            entranceExam: true,
                        },
                        _050306: {
                            subjects: ["math","ru_lang","geography"],
                            points: 225,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 34,
                            entranceExam: true,
                        },
                        _370302: {
                            subjects: ["math","social_science","history"],
                            points: 260,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 3,
                            entranceExam: true,
                        },
                        _380301: {
                            subjects: ["math","ru_lang","foreign_lang"],
                            points: 250,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 170,
                            entranceExam: true,
                        },
                        _380302: {
                            subjects: ["math","ru_lang","foreign_lang"],
                            points: 243,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 24,
                            entranceExam: true,
                        },
                        _380303: {
                            subjects: ["math","ru_lang","foreign_lang"],
                            points: 237,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: true,
                        },
                        _380304: {
                            subjects: ["math","ru_lang","foreign_lang"],
                            points: 239,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 30,
                            entranceExam: true,
                        },
                        _390301: {
                            subjects: ["math","ru_lang","social_science"],
                            points: 245,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 20,
                            entranceExam: true,
                        },
                        _400301: {
                            subjects: ["social_science","ru_lang","history"],
                            points: 273,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 25,
                            entranceExam: true,
                        },
                        _410303: {
                            subjects: ["foreign_lang","ru_lang","history"],
                            points: 281,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 87,
                            entranceExam: true,
                        },
                        _410305: {
                            subjects: ["foreign_lang","ru_lang","history"],
                            points: 300,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 15,
                            entranceExam: true,
                        },
                        _420301: {
                            subjects: ["history","ru_lang","social_science"],
                            points: 280,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: true,
                        },
                        _420302: {
                            subjects: ["history","ru_lang","social_science"],
                            points: 241,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 0,
                            entranceExam: true,
                        },
                        _450301: {
                            subjects: ["foreign_lang","ru_lang","literature"],
                            points: 281,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 81,
                            entranceExam: true,
                        },
                        _460301: {
                            subjects: ["foreign_lang","ru_lang","history"],
                            points: 266,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 118,
                            entranceExam: true,
                        },
                        _470303: {
                            subjects: ["social_science","ru_lang","history"],
                            points: 241,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 10,
                            entranceExam: true,
                        },
                    },
            
                    hse: {
                        _040301: {
                            subjects: ["math","ru_lang","chemistry"],
                            points: 282,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 30,
                            entranceExam: false,
                        },
                        _030302: {
                            subjects: ["math","ru_lang","physics"],
                            points: 275,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _410303: {
                            subjects: ["history","ru_lang","foreign_lang"],
                            points: 291,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _090304: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 300,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 110,
                            entranceExam: false,
                        },
                        _460301: {
                            subjects: ["foreign_lang","ru_lang","history"],
                            points: 277,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 69,
                            entranceExam: false,
                        },
                        _450301: {
                            subjects: ["foreign_lang","ru_lang","literature"],
                            points: 298,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _370301: {
                            subjects: ["math","ru_lang","biology"],
                            points: 267,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 63,
                            entranceExam: false,
                        },
                        _030302: {
                            subjects: ["math","ru_lang","physics"],
                            points: 275,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _010301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 297,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 60,
                            entranceExam: false,
                        },
                        _380302: {
                            subjects: ["math","ru_lang","foreign_lang"],
                            points: 280,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 60,
                            entranceExam: false,
                        },

                    },
            
                    mtuci: {
                        _020302: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 250,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 24,
                            entranceExam: false,
                        },
                        _090301: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 247,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 100,
                            entranceExam: false,
                        },
                        _090302: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 242,
                            dorms: true,
                            extramuralStudies: true,
                            budgetPlaces: 75,
                            entranceExam: false,
                        },
                        _090303: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 245,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 25,
                            entranceExam: false,
                        },
                        _100301: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 244,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 51,
                            entranceExam: false,
                        },
                        _110301: {
                            subjects: ["math","ru_lang","physics"],
                            points: 197,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 50,
                            entranceExam: false,
                        },
                        _110302: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 199,
                            dorms: true,
                            extramuralStudies: true,
                            budgetPlaces: 106,
                            entranceExam: false,
                        },
                        _270304: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 234,
                            dorms: true,
                            extramuralStudies: true,
                            budgetPlaces: 22,
                            entranceExam: false,
                        },
                        _090301: {
                            subjects: ["math","ru_lang","comp_science"],
                            points: 247,
                            dorms: true,
                            extramuralStudies: false,
                            budgetPlaces: 100,
                            entranceExam: false,
                        },
                    },
                },
            };
            
            let universities = {
                sut: "Санкт-Петербургский государственный университет телекоммуникаций",
                spbu: "Санкт-Петербургский государственный университет",
                pgups: "Петербургский государственный университет путей сообщения",
                mgu: "Московский государственный университет",
                hse: "НИУ Высшая школа экономики",
                mtuci: "Московский технический университет связи и информатики",
            };

            let cities = {
                SPb: "Санкт-Петербург",
                MSC: "Москва",
            }

            let allDirections = {
                _010301: "Математика",
                _010302: "Прикладная математика и информатика",
                _010303: "Механика и математическое моделирование",
                _020301: "Математика и компьютерные науки",
                _020302: "Фундаментальная информатика и информационные технологии",
                _020303: "Математическое обеспечение и администрирование информационных систем",
                _030301: "Прикладные математика и физика",
                _030302: "Физика",
                _030303: "Радиофизика",
                _040301: "Химия",
                _040302: "Химия, физика и механика материалов",
                _050301: "Геология",
                _050306: "Экология и природопользование",
                _050302: "География",
                _050303: "Картография и геоинформатика",
                _050304: "Гидрометеорология",
                _050306: "Экология и природопользование",
                _060301: "Биология",
                _060302: "Почвоведение",
                _080301: "Строительство",
                _090301: "Информатика и вычислительная техника",
                _090302: "Информационные системы и технологии",
                _090303: "Прикладная информатика",
                _090304: "Программная инженерия",
                _100301: "Информационная безопасность",
                _110301: "Радиотехника",
                _110304: "Электроника и наноэлектроника",
                _110303: "Контруирование и технология электронных средств",
                _110302: "Инфокоммуникационные технологии и системы связи",
                _120304: "Биотехнические системы и технологии",
                _120303: "Фотоника и оптоинформатика",
                _120301: "Приборостроение",
                _130301: "Теплоэнергетика и теплотехника",
                _200301: "Техносферная безопасность",
                _210301: "Нефтегазовое дело",
                _210302: "Землеустройство и кадастры",
                _230303: "Эксплуатация транспортно-технологических машин и компексов",
                _270301: "Стандартизация и метрология",
                _270304: "Управление в технических системах",
                _370301: "Психология",
                _370302: "Конфликтология",
                _380301: "Экономика",
                _380302: "Менеджмент",
                _380303: "Управление персоналом",
                _380304: "Государственное и муниципальное управление",
                _380305: "Бизнес-информатика",
                _390301: "Социология",
                _390302: "Социальная работа",
                _400301: "Юриспруденция",
                _410303: "Востоковедение и Африканистика",
                _410305: "Международные отношения",
                _420301: "Реклама и связи с общественностью",
                _430302: "Туризм",
                _450301: "Филология",
                _450302: "Лингвистика",
                _460301: "История",
                _470301: "Философия",
                _470303: "Религиоведение",
                _500301: "Искусства и гуманитарные науки",
                _510301: "Культурология",
                _510304: "Музеология и охрана объектов культурного и природного наследия",
                
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
                                    //   console.log('current:'+currentPoints);
                                    //   console.log('po predmetu:'+userPoints[subject]);
                                    }
                                }
                                if (base[city][university][direction].points <= currentPoints) {
                                    // console.log('Баллы подошли');
                                    // console.log('надо:'+base[city][university][direction].points);
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
                                    availableDirections.innerHTML += "<div class=\"directionItem\"><h3 class\"directionName\">" + fullDirection + "</h3><p class\"univName\">" + fullUniversity + "</p>  <p class=\"cityName\">" + fullCity + "</p></div>";
                                    console.log("Доступна специальность: " + fullDirection + " в " + fullUniversity + " в городе " + fullCity);
                                    if (base[city][university][direction].dorms) {
                                        console.log("Доступно общежитие");
                                    }
                                    if (base[city][university][direction].extramuralStudies) {
                                        console.log("Доступна заочная форма обучения");
                                    }
                                    else if (!(base[city][university][direction].extramuralStudies)) {
                                        console.log("Заочная форма обучения недоступна");
                                    }
                                }
                                else if (base[city][university][direction].points > currentPoints) {
                                    // console.log('Баллы не подошли' + currentPoints);
                                }
                                
                            }
                            currentPoints = 0;
                        }
                    }
                }
            }
            renderDirections();
    }
// _____ konec onsubmit
directionWindow.append(availableDirections);





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

