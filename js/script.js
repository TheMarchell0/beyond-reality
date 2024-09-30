import {slidersInitialization} from "./functions/slidersInitialization.js";
import {formValidation} from "./functions/formValidation.js";
import {tabsFunctional} from "./functions/tabsFunctional.js";
import {modalFunctional} from "./functions/modalFunctional.js";

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.js-form');
    const tabsBlocks = document.querySelectorAll('.js-tabs-block');
    const slider = document.querySelector('.js-slider');
    const modals = document.querySelectorAll('.js-modal');

    forms.forEach(form => formValidation(form));
    tabsBlocks.forEach(tabsBlock => tabsFunctional(tabsBlock));
    modals.forEach(modal => modalFunctional(modal));
    if (slider) slidersInitialization();

    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
        });
    });
});