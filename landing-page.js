const header = document.getElementById('header');
const main = document.getElementById('main');
const finishingSection = document.getElementById('finishing-section');
const footer = document.getElementById('footer');

function simpleShowHideAnimation(element, windowRatioShow, windowRatioHide, showAnimation, hideAnimation) {
    const elementTop = element.getBoundingClientRect().top;

    const triggerBottomShow = window.innerHeight * windowRatioShow;
    const triggerBottomHide = window.innerHeight * windowRatioHide;

    if (triggerBottomShow >= elementTop) {
        showAnimation();
    } else if (triggerBottomHide < elementTop) {
        hideAnimation();
    }
}

function complexShowHideAnimation(element, windowRatioShow, windowRatioHide, elementBottomRatio, showAnimation, hideAnimation) {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    const triggerBottom = window.innerHeight * windowRatioShow;
    const triggerTop = window.innerHeight * windowRatioHide;


    if (triggerBottom >= elementTop & triggerBottom <= elementBottom
        || triggerTop >= elementTop & triggerTop < elementBottom  * elementBottomRatio
        || triggerTop <= elementTop & triggerBottom >= elementTop ) {
        showAnimation();
    } else {
        hideAnimation();
    }

}

window.addEventListener('load', () => {
    simpleShowHideAnimation(header, 1, 1, () => {
        header.classList.add('show');
    }, undefined);

    simpleShowHideAnimation(main, 1, 1, mainSectionAnimation, undefined);
});

window.addEventListener('scroll', () => {
    servicesAnimation();
    featuresAnimation();
    pricingAnimation();
    testimonialsAnimation();
    simpleShowHideAnimation(finishingSection, 0.5, 1, 
        () => {
            const h1 = document.querySelector('#finishing-section h1');
            h1.classList.add('show');

            const sectionDescription = document.querySelector('#finishing-section .section-description');
            sectionDescription.classList.add('show');

            const freeTrial = document.querySelector('#finishing-section .free-trial-btn');
            freeTrial.classList.add('show');
        },

        () => {
            const h1 = document.querySelector('#finishing-section h1');
            h1.classList.remove('show');

            const sectionDescription = document.querySelector('#finishing-section .section-description');
            sectionDescription.classList.remove('show');

            const freeTrial = document.querySelector('#finishing-section .free-trial-btn');
            freeTrial.classList.remove('show');
        }
    );
});



function mainSectionAnimation() {
    const sectionTitleContainer = document.querySelector('main .section-title-container');
    sectionTitleContainer.classList.add('show');

    const h1 = document.querySelector('main h1');
    h1.classList.add('show');

    const sectionDescription = document.querySelector('main .section-description');
    sectionDescription.classList.add('show');

    const buttonsContainer = document.querySelector('main .buttons-container');
    buttonsContainer.classList.add('show');

    const orbits = document.querySelectorAll('.orbit');
    orbits.forEach(orbit => {
        orbit.classList.add('show');
    });

    const spheres = document.querySelectorAll('main .sphere');
    spheres.forEach(sphere => {
        sphere.style.opacity = 1;
    });

    const imgContainer = document.querySelector('main .main-img-container');
    window.addEventListener('scroll', () => {
        simpleShowHideAnimation(imgContainer, 0.8, 1, () => {
            imgContainer.classList.add('show');
        }, undefined)
    });
}

function servicesAnimation() {
    const sectionTitleContainer = document.querySelector('#services .section-title-container');
    complexShowHideAnimation(sectionTitleContainer, 0.9, 0, 1.2, 
        () => {
            sectionTitleContainer.classList.add('show');
        },

        () => {
            sectionTitleContainer.classList.remove('show');
        }
    );

    const h2 = document.querySelector('#services h2');
    complexShowHideAnimation(h2, 0.9, 0, 1.2, 
        () => {
            h2.classList.add('show');
        },

        () => {
            h2.classList.remove('show');
        }
    );

    const sectionDescription = document.querySelector('#services .section-description');
    complexShowHideAnimation(h2, 0.9, 0, 1.5, 
        () => {
            sectionDescription.classList.add('show');
        },

        () => {
            sectionDescription.classList.remove('show');
        }
    );

    const servicesContainer = document.querySelector('#services .services-container');
    const serviceCards = document.querySelectorAll('#services .service-card');
    complexShowHideAnimation(servicesContainer, 1, 0, 1.4,  
        () => {
            serviceCards.forEach((card, idx) => {
                const delay = (serviceCards.length - idx - 1) / 10;
                card.style.transitionDelay = delay + 's';
                card.classList.add('show');
            });
        }, 
        
        () => {
            serviceCards.forEach((card, idx) => {
                const delay = (idx + 1) / 10;
                card.style.transitionDelay = delay + 's';
                card.classList.remove('show');
            });
        } 
    );
}

function featuresAnimation() {
    const sectionTitleContainer = document.querySelector('#features .section-title-container');
    complexShowHideAnimation(sectionTitleContainer, 0.9, 0, 1.2, 
        () => {
            sectionTitleContainer.classList.add('show');
        },

        () => {
            sectionTitleContainer.classList.remove('show');
        }
    );

    const h2 = document.querySelector('#features h2');
    complexShowHideAnimation(h2, 0.9, 0, 1.2, 
        () => {
            h2.classList.add('show');
        },

        () => {
            h2.classList.remove('show');
        }
    );

    const sectionDescription = document.querySelector('#features .section-description');
    complexShowHideAnimation(h2, 0.9, 0, 1.5, 
        () => {
            sectionDescription.classList.add('show');
        },

        () => {
            sectionDescription.classList.remove('show');
        }
    );

    const featureCards = document.querySelectorAll('#features .feature-card');
    const featureImages = document.querySelectorAll('#features .feature-image');
    featureCards.forEach((card, idx) => {
        simpleShowHideAnimation(card, 0.9, 1,
            () => {
                card.classList.add('show');
                setTimeout(() => {
                    featureImages[idx].classList.add('show');
                }, 200);
            },

            () => {
                featureImages[idx].classList.remove('show');               
                card.classList.remove('show');               
            }
        );
    });

    const featureTitles = document.querySelectorAll('#features .feature-title');
    const featureIcons = document.querySelectorAll('#features .feature-icon-container');
    featureTitles.forEach((title, idx) => {
        simpleShowHideAnimation(title, 0.9, 0.9, 
            () => {
                title.classList.add('show');
                featureIcons[idx].classList.add('show');
            },

            () => {
                title.classList.remove('show');
                featureIcons[idx].classList.remove('show'); 
            }
        );
    });

    const lineContainers = document.querySelectorAll('#features .interactive-content-container');
    const animatedLines = document.querySelectorAll('#features .animated-line');
    const stepsLists = document.querySelectorAll('#features .steps');
    animatedLines.forEach((line, idx) => {
        const triggerBottom = window.innerHeight * 0.7;
        window.addEventListener('scroll', () => { 
            const lineContainerTop = lineContainers[idx].getBoundingClientRect().top;
            
            if (triggerBottom > lineContainerTop) {
                line.style.height = triggerBottom - lineContainerTop + 'px';
            } else if (triggerBottom < lineContainerTop) {
                line.style.height = 0;
            }


            const lineBottom = line.getBoundingClientRect().bottom * 0.9;
            const steps = stepsLists[idx].querySelectorAll('li');
            steps.forEach(step => {
                const stepTop = step.getBoundingClientRect().top;

                if (stepTop <= lineBottom) {
                    step.classList.add('show');
                } else {
                    step.classList.remove('show');
                }
            });
        });
    });
}

function pricingAnimation() {
    const sectionTitleContainer = document.querySelector('#pricing .section-title-container');
    complexShowHideAnimation(sectionTitleContainer, 0.9, 0, 1.2, 
        () => {
            sectionTitleContainer.classList.add('show');
        },

        () => {
            sectionTitleContainer.classList.remove('show');
        }
    );

    const h2 = document.querySelector('#pricing h2');
    complexShowHideAnimation(h2, 0.9, 0, 1.2, 
        () => {
            h2.classList.add('show');
        },

        () => {
            h2.classList.remove('show');
        }
    );

    const packagesContainer = document.querySelector('#pricing .packages-container');
    const packageCards = document.querySelectorAll('#pricing .package-card');
    complexShowHideAnimation(packagesContainer, 0.9, 0, 1.2, 
        () => {
            packageCards.forEach((card, idx) => {
                const delay = (packageCards.length - idx - 1) / 10;
                card.style.transitionDelay = delay + 's';
                card.classList.add('show');
            });
        }, 
        
        () => {
            packageCards.forEach((card, idx) => {
                const timeOut = (idx + 1) / 10;
                card.style.transitionDelay = timeOut + 's';
                card.classList.remove('show');
            });
        } 
    );
}

function testimonialsAnimation() {
    const sectionTitleContainer = document.querySelector('#testimonials .section-title-container');
    complexShowHideAnimation(sectionTitleContainer, 0.9, 0, 1.2, 
        () => {
            sectionTitleContainer.classList.add('show');
        },

        () => {
            sectionTitleContainer.classList.remove('show');
        }
    );

    const h2 = document.querySelector('#testimonials h2');
    complexShowHideAnimation(h2, 0.9, 0, 1.2, 
        () => {
            h2.classList.add('show');
        },

        () => {
            h2.classList.remove('show');
        }
    );

    const reviewContainer = document.querySelector('#testimonials .position-relative-container');
    simpleShowHideAnimation(reviewContainer, 0.9, 1, 
        () => {
            reviewContainer.classList.add('show');
        },

        () => {
            reviewContainer.classList.remove('show');
        }
    );
}

const reviews = document.querySelectorAll('.review-card');
const nextReview = document.querySelector('#next-review');
const prevReview = document.querySelector('#prev-review');
const dots = document.querySelectorAll('.dot-container');

const reviewWdth = parseFloat(window.getComputedStyle(reviews[0]).getPropertyValue('width'));
const reviewGap = parseFloat(window.getComputedStyle(document.querySelector('.reviews-container'))
.getPropertyValue('gap'));

const translateAmount = reviewWdth + reviewGap;

let currentTranslate = 0;
let currentActiveDot = 0;
nextReview.addEventListener('click', () => {
    let translate = currentTranslate - translateAmount;
    reviews.forEach(review => {
        review.style.transform = `translateX(${translate}px)`
    });

    currentTranslate = translate;
    dots[currentActiveDot].classList.remove('active');
    currentActiveDot++;
    dots[currentActiveDot].classList.add('active');

    prevReview.disabled = false;

    if (currentActiveDot === dots.length - 1) {
        nextReview.disabled = true;
    }
});

prevReview.addEventListener('click', () => {
    let translate = currentTranslate + translateAmount;
    reviews.forEach(review => {
        review.style.transform = `translateX(${translate}px)`
    });

    currentTranslate = translate;
    dots[currentActiveDot].classList.remove('active');
    currentActiveDot--;
    dots[currentActiveDot].classList.add('active');

    nextReview.disabled = false;

    if (currentActiveDot === 0) {
        prevReview.disabled = true;
    }
});



dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        dots[currentActiveDot].classList.remove('active');
        dot.classList.add('active');

        if (idx > currentActiveDot) {
            translate = currentTranslate - (translateAmount * (idx - currentActiveDot));
        } else if (idx < currentActiveDot) {
            translate = currentTranslate + (translateAmount * (currentActiveDot - idx));
        }

        reviews.forEach(review => {
            review.style.transform = `translateX(${translate}px)`;
        });

        currentActiveDot = idx;
        currentTranslate = translate;

        if (currentActiveDot === 0) {
            prevReview.disabled = true;
        } else {
            prevReview.disabled = false;
        }

        if (currentActiveDot === dots.length - 1) {
            nextReview.disabled = true;
        } else {
            nextReview.disabled = false;
        }
    });
});