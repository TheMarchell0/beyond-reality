import { slidersInitialization } from "./functions/slidersInitialization.js";
import { formValidation } from "./functions/formValidation.js";
import { ratingTabsFunctional } from "./functions/ratingTabsFunctional.js";

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.js-form');
    const tabsBlocks = document.querySelectorAll('.js-tabs-block');
    const slider = document.querySelector('.js-slider');

    forms.forEach(form => formValidation(form));
    tabsBlocks.forEach(tabsBlock => ratingTabsFunctional(tabsBlock));
    if (slider) slidersInitialization();
});