(function () {
    angular
        .module("WamApp")
        .controller("loginController", loginController);

    function loginController() {
        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
        ];
        var model = this;
        // Event Handlers
        model.login = login;

        // Functions to implement

        function login (username, password) {
            console.log("Hello");
            var found = false;
            for (var u in users) {
                var user = users[u]
                if (user.username === username && user.password === password) {
                    found = true
                }


            }

            if (found) {
                // $scope.message = "Welcome " + username
            } else {
                model.message = "User " + username + " not found..."
            }
        }
    }
})();