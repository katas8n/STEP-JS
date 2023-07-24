function main() {

    const num1 = getNumber();
    const num2 = getNumber();

    const symbol = prompt("Which symbol do u wanna use ?");

    switch (symbol) {
        case "+":
            alert(num1 + num2);
        break;

        case "-":
            alert(num1 - num2);
        break;

        case "*":
            alert(num1 * num2);
        break;

        case "/":
            alert(num1 / num2);
        break;
    
        default:
            alert("There are incorrect value/s !")
            break;
    }

    function isInvalid(num) {
        return isNaN(num)
    }

    function getNumber() {
        let toggler = true;
    
        while(toggler) {
            const num = +prompt("Enter number : ");
            toggler = isInvalid(num);

            if (!toggler) return num;
            
            if(toggler) {
                alert("You must fill this field with numbers !");
            }

        }
    }
        
    // At home 
    // function calc(num1 , num2 , symbol) {
    //     return
    // }
}

main()