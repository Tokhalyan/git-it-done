let getUserRepos = function() {
    fetch("https://api.github.com/users/Tokhalyan/repos");
};

getUserRepos();