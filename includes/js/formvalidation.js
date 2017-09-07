function ValidateFeedbackForm()
{
    var name = document.FeedbackForm.Name;
    var email = document.FeedbackForm.Email;
    var comment = document.feedbackForm.Comment;

    if (name.value == "")
    {
        window.alert("Name can not be empty");
        name.focus();
        return false;
    }
    
    if (name.search(/[0-9]/i)!=0)
    {
        window.alert("Name can not contain number");
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