function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    let job = document.getElementsByName('job')
    let selected = null;

    for (let i = 0; i < job.length; i++) {
        if(job[i].checked) {
            selected = job[i].value
            break
        }
    }

    if (selected) {
        alert("Thank you for applying to be a " + selected + "!")
    } else {
        alert("Please select a job!")
    }
}