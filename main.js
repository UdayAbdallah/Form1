function validateForm() {
    let fname = document.forms["form"]["fname"].value;
    if (fname.trim() === "") {
        alert("Please enter your first name.");
        return false;
    }
    return true;
}
