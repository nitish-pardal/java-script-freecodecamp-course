let hasCompletedCourse = true
let givesCertificate = true

/* if (hasCompletedCourse === true) {
    if (givesCertificate === true) {
        generateCertificate()
    }
}
*/
function generateCertificate() {
    console.log("Generating certificate....")
}


if (hasCompletedCourse === true && givesCertificate === true)
    generateCertificate()
else 
    console.log("Not Generating certificates")

