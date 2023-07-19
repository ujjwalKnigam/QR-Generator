import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"
import { writeFile } from "fs";

inquirer
  .prompt([
    {
        message: "Enter a URL: ",
        name: "URL"
    }
  ])
  .then((answer) => {
    let url = answer.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('QR.png'));
    writeFile("URL.txt",url,(err)=>{
        if (err) throw err
    console.log("The File has been saved!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
        console.log("Something Else went wrong")
    }
  });