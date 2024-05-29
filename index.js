import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("\tWELCOME TO OTP GENERATOR"));
while (true) {
    let OTPGenerator = await inquirer.prompt({
        message: chalk.bgGreen("Tell Me Your OTP I'll Send To Your Phone"),
        name: "confirm",
        type: "confirm"
    });
    let randomnumbers = Math.floor(Math.random() * 900000 + 100000);
    if (OTPGenerator.confirm === false)
        break;
    console.log(chalk.bgRed(randomnumbers));
}
console.log(chalk.bgWhite("\nGood bye see you soon inshallah\n"));
