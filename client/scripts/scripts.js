function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")
}

function checkFields(event) {
    const valuesToCheck = [
        "title",
        "category",
        "img",
        "description",
        "url"
    ];

    const isEmpty = valuesToCheck.find((value) => {
        const checkIfIsString = typeof event.target[value].value === "string";
        const checkIfIsEmpty = !event.target[value].value.trim();

        if(checkIfIsString && checkIfIsEmpty){
            return true
        };
    });

    if(isEmpty){
        event.preventDefault();
        alert("Por favor, preencha todos os campos!")
    };
};

