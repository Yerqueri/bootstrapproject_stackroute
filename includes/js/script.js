function ValidateContactForm()
{
    var name = document.ContactForm.Name;
    var email = document.ContactForm.Email;
    var comment = document.ContactForm.Msg;
    
    
    if (name.value == "")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    
    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (comment.value == "")
    {
        window.alert("Please provide a detailed description or comment.");
        comment.focus();
        return false;
    }
    return true;
}