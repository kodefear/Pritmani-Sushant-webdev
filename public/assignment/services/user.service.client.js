(function () {
    angular
        .module('WamApp')
        .factory('userService', userService)

    function userService() {

        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
        ];

        var api = {
            "createUser": createUser,
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        }

        return api

        function findUserById(userID) {
            for (var u in users) {
                if (users[u]._id === userID) {

                    return users[u];

                }
            }
            return null;
        }

        function createUser(user) {
            user._id = (new Date()).getTime() + "";
            users.push(user);
            return user;
        }

        function findUserByUsername(username) {
            for (var u in users) {
                if (users[u].username === username) {

                    return users[u];
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            user._id = userId;
            for(var u in users){
                if(users[u]._id === userId){
                    users[u] = user;
                }
            }
            return user;
        }

        function deleteUser(userId) {
            for(var u in users){
                if(users[u]._id === userId){
                    delete users[u];
                }
            }
        }

        function findUserByCredentials(username, password) {
            for(var u in users){
                var _user = users[u];
                if(_user.username === username && _user.password === password){
                    return _user;
                }
            }
            return null;
        }

    }
})();