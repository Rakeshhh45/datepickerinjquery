$("document").ready(function () {
    $("#datepicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        minDate: new Date(2000, 1, 12),
        maxDate: new Date(2024, 7, 1),
    });
})