(function () {
    let inputs = document.querySelectorAll('.points-input');
    let form = document.querySelector('.form');

    inputs.forEach(input => input.addEventListener('keyup', function () {
        var reg = new RegExp('\\D', 'g');
        if (reg.test(this.value)) {
            this.value = this.value.replace(reg, '');
        }
    }));

    let sortCityItems = document.querySelectorAll('input[name="city"]');
    let sortUnivsItems = document.querySelectorAll('input[name="university"');

    let isCheckedCity = function(city) {
        for (item of sortCityItems) {
            if ((item.value == city) & (item.checked)) {
                return true;
            }
        }
    }

    let isCheckedUniv = function(university) {
        for (item of sortUnivsItems) {
            if ((item.value == university) & (item.checked)) {
                return true;
            }
        }
    }

    let directionWindow = document.querySelector('.directionWindow');
    let availableDirections = document.createElement('div');
    availableDirections.className = "availableDirections";
    availableDirections.innerHTML = "";

    form.onsubmit = function(evt) {
        evt.preventDefault();
        availableDirections.innerHTML = "";

        directionWindow.classList.remove("visually-hidden");

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
                availableDirections.innerHTML = "";
                let currentPoints = 0;
                let fullDirection = "";
                let fullUniversity = "";
                let fullCity = "";
                let subjectNumbers = 0;
                let dorm = "";
                let extramuralAbility = "";
                let extramuralAble = `fill="green"`;
                let extramuralDisable = `fill="red"`;
                let extramuralText = "";
                let entranceExamText = "";
                for (let city in base) {
                   if (isCheckedCity(city)) {

                    for (let university in base[city]) {
                        if (isCheckedUniv(university)) {
                        for (let direction in base[city][university]) {
                            subjectNumbers = 0;
                            for (let i = 0; i < base[city][university][direction].subjects.length; i++) {
                                for (let subject in userPoints) {
                                    if (subject == base[city][university][direction].subjects[i]) {
                                      currentPoints = currentPoints +  userPoints[subject];
                                      subjectNumbers += 1;
                                    }
                                }
                                if ((base[city][university][direction].points <= currentPoints) & (subjectNumbers > 2)) {
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
                                    if (base[city][university][direction].dorms) {
                                        dorm = `
                                        <div class="dormContainer">
                                            <svg class="svg-home" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            width="30px" height="26px" viewBox="0 0 15 12" enable-background="new 0 0 15 12" xml:space="preserve">
                                                <g>
                                                <polygon fill="rgba(0, 128, 28, 1)" points="3,8 3,12 7,12 7,8 9,8 9,12 13,12 13,8 8,3.516 	"/>
                                                <path fill="rgba(0, 128, 28, 1)" d="M14.831,6.365L13,4.751V0h-2v2.987L8.332,0.635c-0.02-0.017-0.043-0.023-0.064-0.037
                                                    c-0.026-0.018-0.052-0.035-0.08-0.047C8.156,0.539,8.125,0.533,8.093,0.527C8.062,0.521,8.032,0.515,8,0.515
                                                    c-0.031,0-0.061,0.006-0.092,0.012C7.875,0.533,7.845,0.539,7.813,0.552C7.785,0.563,7.76,0.581,7.733,0.598
                                                    c-0.021,0.014-0.045,0.02-0.064,0.037l-6.498,5.73C0.964,6.548,0.944,6.864,1.126,7.071C1.225,7.183,1.363,7.24,1.501,7.24
                                                    c0.118,0,0.236-0.041,0.331-0.125L8,1.677l6.169,5.438C14.265,7.199,14.383,7.24,14.5,7.24c0.139,0,0.276-0.058,0.375-0.169
                                                    C15.058,6.864,15.038,6.548,14.831,6.365z"/>
                                                </g>
                                            </svg>
                                            
                                            <span class="tooltip">
                                                Доступно общежитие
                                            </span>
                                        </div>
                                            `
                                    }
                                    if (base[city][university][direction].extramuralStudies) {
                                        extramuralAbility = extramuralAble;
                                        extramuralText = `Доступна заочная форма обучения`;
                                    }
                                    else if (!(base[city][university][direction].extramuralStudies)) {
                                        extramuralAbility = extramuralDisable;
                                        extramuralText = `Заочная форма обучения недоступна`;
                                    }
                                    let extramural = `                                        
                                    <div class="extramuralContainer">
                                    <svg width="35px" height="30px" class="svg-ext" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path ${extramuralAbility} d="M481.999,273.586v-47.58c0-8.284-6.716-15-15-15c-30.988,0-59.878,2.615-87.173,7.955
                                                    c-15.911-15.365-35.308-26.513-56.313-32.606c22.904-19.277,37.486-48.14,37.486-80.349c0-58.449-47.103-106-105-106
                                                    c-57.897,0-105,47.551-105,106c0,32.209,14.582,61.072,37.487,80.348c-21.005,6.094-40.402,17.242-56.313,32.606
                                                    c-27.295-5.339-56.185-7.955-87.173-7.955c-8.284,0-15,6.716-15,15v47.58c-17.459,6.192-30,22.865-30,42.42v30
                                                    c0,19.555,12.541,36.228,30,42.42v47.58c0,8.284,6.716,15,15,15c78.429,0,142.832,18.583,202.68,58.481
                                                    c5.015,3.342,11.621,3.35,16.641,0c59.848-39.898,124.25-58.481,202.68-58.481c8.284,0,15-6.716,15-15v-47.58
                                                    c17.459-6.192,30-22.865,30-42.42v-30C511.999,296.451,499.458,279.778,481.999,273.586z M180.999,106.006
                                                    c0-41.907,33.645-76,75-76s75,34.093,75,76c0,41.355-33.645,75-75,75C214.644,181.006,180.999,147.361,180.999,106.006z
                                                    M44.999,361.006c-8.271,0-15-6.729-15-15v-30c0-8.271,6.729-15,15-15s15,6.729,15,15v30
                                                    C59.999,354.277,53.27,361.006,44.999,361.006z M240.999,470.091c-54.453-31.141-112.886-46.88-181-48.869v-32.796
                                                    c17.459-6.192,30-22.865,30-42.42v-30c0-19.555-12.541-36.228-30-42.42v-32.368c70.481,2.023,127.134,18.62,181,52.916V470.091z
                                                    M255.999,268.145c-27.686-17.469-56.504-30.77-87.268-40.117c16.904-10.986,36.803-17.022,57.268-17.022h60
                                                    c20.465,0,40.364,6.036,57.268,17.022C312.503,237.375,283.684,250.676,255.999,268.145z M451.999,421.222
                                                    c-68.113,1.989-126.548,17.732-181,48.871V294.146c53.867-34.299,110.516-50.906,181-52.928v32.368
                                                    c-17.459,6.192-30,22.865-30,42.42v30c0,19.555,12.541,36.228,30,42.42V421.222z M481.999,346.006c0,8.271-6.729,15-15,15
                                                    s-15-6.729-15-15v-30c0-8.271,6.729-15,15-15s15,6.729,15,15V346.006z"/>
                                            </g>
                                    </svg>
                                    <span class="tooltip">
                                        ${extramuralText}
                                    </span>
                                    </div>`;

                                    if (base[city][university][direction].entranceExam) {
                                       entranceExamText = `
                                       <div class="entranceContainer">
                                            <div class="entranceContainer__warningLogo">
                                                <svg width="35px" height="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
                                                    <g>
                                                        <g>
                                                            <path class="warningPath" d="M503.839,395.379l-195.7-338.962C297.257,37.569,277.766,26.315,256,26.315c-21.765,0-41.257,11.254-52.139,30.102
                                                                L8.162,395.378c-10.883,18.85-10.883,41.356,0,60.205c10.883,18.849,30.373,30.102,52.139,30.102h391.398
                                                                c21.765,0,41.256-11.254,52.14-30.101C514.722,436.734,514.722,414.228,503.839,395.379z M477.861,440.586
                                                                c-5.461,9.458-15.241,15.104-26.162,15.104H60.301c-10.922,0-20.702-5.646-26.162-15.104c-5.46-9.458-5.46-20.75,0-30.208
                                                                L229.84,71.416c5.46-9.458,15.24-15.104,26.161-15.104c10.92,0,20.701,5.646,26.161,15.104l195.7,338.962
                                                                C483.321,419.836,483.321,431.128,477.861,440.586z"/>
                                                                <animate
                                                                attributeType="XML"
                                                                attributeName="fill"
                                                                values="#000;#ff0000;#ff0000;"
                                                                dur="2s"
                                                                repeatCount="indefinite"/>
                                                                </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <rect x="241.001" y="176.01" width="29.996" height="149.982"/>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path d="M256,355.99c-11.027,0-19.998,8.971-19.998,19.998s8.971,19.998,19.998,19.998c11.026,0,19.998-8.971,19.998-19.998
                                                                S267.027,355.99,256,355.99z"/>
                                                        </g>
                                                </svg>
                                            </div>
                                            <div class="entranceContainer__text">
                                                <p>Для поступления необходимо сдать внутренний экзамен!</p>
                                            </div>
                                       </div>
                                       `
                                    }

                                     availableDirections.innerHTML += 
                                     `
                                    <div class="directionItem">
                                        <h3 class="directionName">${fullDirection}</h3>
                                        <p class="univName">${fullUniversity}</p>
                                        <p class="cityName">${fullCity}</p>
                                        <div class="pointsContainer">
                                            <div class="pointsNeeded">
                                                ${base[city][university][direction].points}
                                                <span class="tooltip">
                                                    Минимальный проходной балл в прошлом году
                                                </span>
                                            </div>
                                            <div class="pointsCurrent">
                                                ${currentPoints}
                                                <span class="tooltip">
                                                    Ваши баллы по данному направлению
                                                </span>
                                            </div>
                                            ${dorm}
                                            ${extramural}
                                            ${entranceExamText}
                                        </div>
                                    </div>
                                        `;
                                }
                                
                            }
                            currentPoints = 0;
                            entranceExamText = ``;
                        }
                    }
                }}
            }
            {
                if (availableDirections.innerHTML == "") {
                    availableDirections.innerHTML = `
                    <div class="noResults">
                        <p>
                            По Вашему запросу ничего не нашлось :(
                        </p>
                    </div>
                    `
                }
            }

            document.getElementById('main').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                });
            }
        
        renderDirections();
        directionWindow.append(availableDirections);
        for (item of sortCityItems) {
            item.addEventListener('change', function() {
                renderDirections();
            });
        }
        for (item of sortUnivsItems) {
            item.addEventListener('change', function() {
                renderDirections();
            });
        }
    }
})();
